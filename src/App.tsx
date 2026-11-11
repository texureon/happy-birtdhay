import Home from "./pages/Home";
import Reading from "./pages/Reading";
import { pages } from "./data/pages";
import { usePath } from "./lib/router";

export default function App() {
  const path = usePath();
  const slug = path.replace(/^\/+/, "");
  const page = pages.find((item) => item.slug === slug);

  if (!page) return <Home />;
  return <Reading key={page.slug} page={page} />;
}
