import type { Author } from "../types";

interface IntroProps {
  author: Author;
}

export default function Intro({ author }: IntroProps) {
  return (
    <header className="intro">
      <div className="intro__who">
        <img
          className="intro__avatar"
          src={author.avatar}
          alt={`Foto profil ${author.name}`}
          width={56}
          height={56}
        />
        <h1 className="intro__name">{author.name}</h1>
      </div>
      <p className="intro__message">{author.intro}</p>
    </header>
  );
}
