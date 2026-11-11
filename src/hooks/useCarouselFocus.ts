import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Menjaga satu kartu tetap "fokus" di tengah track:
 * - menulis --focus (0 sampai 1) ke setiap item untuk skala dan opasitas,
 * - melaporkan indeks kartu yang paling dekat dengan tengah,
 * - menyediakan scrollToIndex untuk memusatkan kartu tertentu.
 */
export function useCarouselFocus(initialIndex: number) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(initialIndex);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Infinity;

    Array.from(track.children).forEach((child, index) => {
      const item = child as HTMLElement;
      const distance = Math.abs(center - (item.offsetLeft + item.offsetWidth / 2));
      const focus = Math.max(0, 1 - distance / item.offsetWidth);
      item.style.setProperty("--focus", focus.toFixed(3));
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    setActive(nearest);
  }, []);

  const scrollToIndex = useCallback((index: number, instant = false) => {
    const track = trackRef.current;
    const item = track?.children[index] as HTMLElement | undefined;
    if (!track || !item) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: item.offsetLeft + item.offsetWidth / 2 - track.clientWidth / 2,
      behavior: instant || reduceMotion ? "auto" : "smooth",
    });
  }, []);

  useLayoutEffect(() => {
    scrollToIndex(initialIndex, true);
    update();
  }, [initialIndex, scrollToIndex, update]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      scrollToIndex(active, true);
      update();
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active, scrollToIndex, update]);

  return { trackRef, active, scrollToIndex };
}
