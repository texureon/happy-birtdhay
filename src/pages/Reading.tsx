import { useEffect } from "react";
import Link from "../components/Link";
import { cards } from "../data/home";
import { getRead, isUnlocked, markRead } from "../lib/progress";
import { navigate } from "../lib/router";
import type { Page } from "../types";

interface ReadingProps {
  page: Page;
}

export default function Reading({ page }: ReadingProps) {
  const card = cards.find((item) => item.slug === page.slug);
  const allowed = isUnlocked(card, getRead());

  // Halaman yang masih terkunci dikembalikan ke beranda.
  useEffect(() => {
    if (!allowed) navigate("/", true);
  }, [allowed]);

  if (!allowed) return null;

  const finish = () => {
    markRead(page.slug);
    navigate("/");
  };

  return (
    <main className="reading">
      <Link className="reading__back" to="/">
        Kembali
      </Link>

      <article className="reading__article">
        <h1 className="reading__title">{page.title}</h1>
        <div className="reading__body">
          {page.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </article>

      <button type="button" className="button" onClick={finish}>
        Selesai membaca
      </button>
    </main>
  );
}
