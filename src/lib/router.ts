import { useEffect, useState } from "react";

const clean = (path: string) => path.replace(/\/+$/, "") || "/";

/** Pindah halaman tanpa memuat ulang. */
export function navigate(to: string, replace = false) {
  if (replace) window.history.replaceState(null, "", to);
  else window.history.pushState(null, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}

/** Path saat ini, diperbarui saat navigasi maupun tombol kembali browser. */
export function usePath() {
  const [path, setPath] = useState(() => clean(window.location.pathname));

  useEffect(() => {
    const onChange = () => setPath(clean(window.location.pathname));
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return path;
}
