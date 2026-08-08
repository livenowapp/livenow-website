"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import HeroSection from "@/components/HeroSection";
import Phone from "@/components/Phone";
import ActionCloud from "@/components/ActionCloud";
import ScrollStory from "@/components/ScrollStory";
import StageScreen, { type Stage } from "@/components/StageScreen";

import Link from "next/link";

const stages: {
  id: Stage;
  eyebrow: string;
  title: string;
  body: string;
}[] = [
  {
    id: "input",
    eyebrow: "01 · Name it",
    title: "Write what is on your mind.",
    body: "Start with the thought exactly as it feels. No filter, no perfect wording.",
  },
  {
    id: "analyze",
    eyebrow: "02 · Understand",
    title: "See what your mind is doing.",
    body: "The analysis moves from your original thought through the patterns and evidence, ending with a reflection.",
  },
  {
    id: "reframe",
    eyebrow: "03 · Reframe",
    title: "Choose a thought you can believe.",
    body: "No forced positivity. Pick a calmer, realistic interpretation that feels true right now.",
  },
  {
    id: "action",
    eyebrow: "04 · Act",
    title: "Take one small step into real life.",
    body: "Move from reflection to one practical action that brings your attention back to the present.",
  },
  {
    id: "complete",
    eyebrow: "05 · Reset",
    title: "Finish with clarity and momentum.",
    body: "A gentle completion animation reinforces the reset and keeps the next step visible.",
  },
];

export default function Home() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const center = window.innerHeight * 0.48;
      let best = 0;
      let distance = Infinity;
      refs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const d = Math.abs(rect.top + rect.height / 2 - center);
        if (d < distance) { distance = d; best = index; }
      });
      setActive(best);
      const analyzeEl = refs.current[1];
      if (analyzeEl) {
        const rect = analyzeEl.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight * 0.54);
        setAnalysisProgress(Math.min(1, Math.max(0, (window.innerHeight * 0.28 - rect.top) / travel)));
      }
    };
    let frame = 0;
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(() => { update(); frame = 0; }); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return (
    <main>
      <HeroSection />

      <section className="flow shell" id="how">
        <header className="sectionIntro"><p className="eyebrow">A guided reset, not another chatbot</p><h2>Follow one thought from the first word to the final reset.</h2></header>
        <div className="flowGrid">
          <div className="flowCopy">
            <div className="flowCopySticky">
              <div
                key={stages[active].id}
                className="flowCopyContent"
              >
                <p className="stepEyebrow">
                  {stages[active].eyebrow}
                </p>

                <h3>
                  {stages[active].title}
                </h3>

                <p>
                  {stages[active].body}
                </p>
              </div>
            </div>

            <div className="flowTriggers" aria-hidden="true">
              {stages.map((stage, index) => (
                <article
                  key={stage.id}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  className={`flowTrigger ${
                    stage.id === "analyze"
                      ? "analysisTrigger"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="stickyDemo">
            <div className="phoneAura" />

            <Phone>
              <StageScreen
                stage={stages[active].id}
                analysisProgress={analysisProgress}
              />
            </Phone>

            <div className="demoDots" aria-label="Reset steps">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  type="button"
                  aria-label={`Go to ${stage.title}`}
                  aria-current={active === index ? "step" : undefined}
                  className={active === index ? "active" : ""}
                  onClick={() => {
  const target = refs.current[index];

  if (!target) {
    return;
  }

  const rect = target.getBoundingClientRect();

  const top =
    rect.top +
    window.scrollY +
    rect.height / 2 -
    window.innerHeight * 0.48;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollStory
  id="moments"
  dark
  eyebrow="Don’t just stop overthinking. Understand it."
  title="Every reset becomes part of your story."
  body="As you scroll, the saved moment moves smoothly through the original thought, the thinking patterns, the realistic reframe, and your own note."
/>

      <section className="progressSection">
        <div className="shell progressGrid equalScreens">
          <div className="screenshotPhone">
            <Image
              src="/screens/moments.png"
              alt="LiveNow Moments screen"
              fill
              sizes="(max-width:900px) 78vw, 360px"
            />
          </div>

          <div className="progressCopy">
            <p className="eyebrow">
              Patterns over time
            </p>

            <h2>
              See what keeps returning—and what actually helps.
            </h2>

            <p>
              Moments keep every reset organized. Insights reveal
              outcomes, active days, progress, and the actions that
              give your mind a calmer place to land.
            </p>
          </div>

          <div className="screenshotPhone">
            <Image
              src="/screens/insights.png"
              alt="LiveNow Insights screen"
              fill
              sizes="(max-width:900px) 78vw, 360px"
            />
          </div>
        </div>
      </section>

      <section className="actionsSection">
        <div className="shell">
          <header className="sectionIntro centered">
            <p className="eyebrow">
              One small step
            </p>

            <h2>
              Clarity becomes something you can do.
            </h2>
          </header>

          <ActionCloud />
        </div>
      </section>

      <section className="finalCta shell" id="download">
        <div className="ctaOrb" />

        <Image
          className="finalCtaLogo"
          src="/assets/LogoCircle.png"
          width={92}
          height={92}
          alt="LiveNow logo"
        />

        <p className="eyebrow">
          LiveNow for iPhone
        </p>

        <h2>
          Get out of your head.
          <br />
          Come back to your life.
        </h2>

        <p className="finalCtaText">
          LiveNow is being prepared for the App Store.
        </p>

        <button
          className="primaryButton"
          type="button"
          disabled
        >
          Coming soon on App Store
        </button>
      </section>
      
      <footer className="footer shell">
  <div className="brand">
    <Image
      src="/assets/LogoCircle.png"
      alt=""
      width={28}
      height={28}
    />
    <span>LiveNow</span>
  </div>

  <div className="footerLinks">
    <Link href="/privacy">
      Privacy
    </Link>

    <Link href="/terms">
      Terms
    </Link>

    <a href="mailto:livenowapp@outlook.com">
      Contact
    </a>
  </div>

  <p>© 2026 LiveNow</p>
</footer>
</main>
  );
}
