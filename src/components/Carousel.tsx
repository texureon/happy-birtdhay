import type { CardItem } from "../types";
import { isUnlocked } from "../lib/progress";
import Card from "./Card";

interface CarouselProps {
  cards: CardItem[];
  read: string[];
}

export default function Carousel({ cards, read }: CarouselProps) {
  const hintFor = (card: CardItem) => {
    const titles = cards.filter((c) => card.requires?.includes(c.slug)).map((c) => c.title);
    return `Baca ${titles.join(" dan ")} dulu.`;
  };

  return (
    <section className="carousel" aria-label="Pilihan ucapan">
      <ul className="carousel__track">
        {cards.map((card) => (
          <li key={card.slug} className="carousel__item">
            <Card card={card} locked={!isUnlocked(card, read)} hint={hintFor(card)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
