import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Games from "./components/Games";
import Progress from "./components/Progress";
import Tips from "./components/Tips";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Games />
      <Progress />
      <Tips />
    </main>
  );
}
