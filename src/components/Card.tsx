import type { CardItem } from "../types";
import Link from "./Link";

interface CardProps {
  card: CardItem;
  locked: boolean;
  hint: string;
}

function LockIcon() {
  return (
    <svg className="card__lock" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function Card({ card, locked, hint }: CardProps) {
  const body = (
    <>
      <img
        className="card__image"
        src={card.image}
        alt=""
        draggable={false}
        style={{ objectPosition: card.imagePosition }}
      />
      <span className="card__shade" aria-hidden="true" />
      {locked && (
        <span className="card__badge">
          <LockIcon />
        </span>
      )}
      <span className="card__text">
        <span className="card__title">{card.title}</span>
        <span className="card__description">{locked ? hint : card.description}</span>
      </span>
    </>
  );

  if (locked) return <div className="card card--locked">{body}</div>;

  return (
    <Link className="card" to={`/${card.slug}`}>
      {body}
    </Link>
  );
}
