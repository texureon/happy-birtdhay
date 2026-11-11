import { useState } from "react";
import Intro from "../components/Intro";
import Carousel from "../components/Carousel";
import { author, cards } from "../data/home";
import { getRead } from "../lib/progress";

export default function Home() {
  const [read] = useState(getRead);

  return (
    <main className="home">
      <Intro author={author} />
      <Carousel cards={cards} read={read} />
    </main>
  );
}
