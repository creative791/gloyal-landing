import { useLayoutEffect, useRef } from "react";
import { initScrollReveal } from "./lib/scrollReveal";
import Background from "./components/Background";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Tasks from "./sections/Tasks";
import How from "./sections/How";
import Why from "./sections/Why";
import Integrations from "./sections/Integrations";
import Trust from "./sections/Trust";
import Cases from "./sections/Cases";
import Contacts from "./sections/Contacts";

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const cleanup = initScrollReveal(rootRef.current);
    return cleanup;
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-x-hidden bg-bg text-text"
    >
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Tasks />
        <How />
        <Why />
        <Integrations />
        <Trust />
        <Cases />
      </main>
      <div className="relative z-10">
        <Contacts />
      </div>
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}
