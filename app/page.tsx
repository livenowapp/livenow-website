"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    eyebrow: "01 · Name the thought",
    title: "Get the thought out of your head.",
    body: "Write what is looping in your mind. No perfect wording. No filter.",
    image: "/screens/input.png",
  },
  {
    eyebrow: "02 · Pause",
    title: "LiveNow slows the loop down.",
    body: "Your thought is organized into clear, useful pieces instead of one overwhelming feeling.",
    image: "/screens/thinking.png",
  },
  {
    eyebrow: "03 · Understand",
    title: "See what your mind is doing.",
    body: "AI highlights possible thinking patterns and gently checks the evidence behind the worry.",
    image: "/screens/analyze.png",
  },
  {
    eyebrow: "04 · Reframe",
    title: "Choose a thought you can actually believe.",
    body: "Not fake positivity. A calmer and more realistic way to see the same situation.",
    image: "/screens/reframe.png",
  },
  {
    eyebrow: "05 · Act",
    title: "Take one small step back into real life.",
    body: "LiveNow turns reflection into a simple action you can do right now.",
    image: "/screens/action.png",
  },
  {
    eyebrow: "06 · Reset",
    title: "You interrupted the overthinking.",
    body: "Finish with clarity, a next step, and a moment you can return to later.",
    image: "/screens/complete.png",
  },
];

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActiveStep(index);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sectionRefs.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="LiveNow home">
          <span className="brandDot" />
          <span>LiveNow</span>
        </a>
        <div className="navLinks">
          <a href="#how-it-works">How it works</a>
          <a href="#progress">Progress</a>
          <a className="navCta" href="#download">Coming soon</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Your reset from overthinking</p>
          <h1>
            Stop Overthinking.
            <br />
            <span>Start Living.</span>
          </h1>
          <p className="heroText">
            LiveNow helps you understand the thought, reframe it, and take one small step back into the present.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#how-it-works">See how it works</a>
            <span className="smallNote">Designed for quick, private resets.</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="LiveNow app preview">
          <div className="orangeGlow" />
          <PhoneFrame image="/screens/home.png" priority />
        </div>
      </section>

      <section className="promise">
        <div className="shell promiseGrid">
          <p>One thought.</p>
          <p>One clearer perspective.</p>
          <p>One small next step.</p>
        </div>
      </section>

      <section className="flow shell" id="how-it-works">
        <div className="flowIntro">
          <p className="eyebrow">A reset that moves with you</p>
          <h2>From spiraling to something you can do.</h2>
        </div>

        <div className="flowLayout">
          <div className="flowSteps">
            {steps.map((step, index) => (
              <article
                className={`flowStep ${activeStep === index ? "active" : ""}`}
                key={step.title}
                data-index={index}
                ref={(element) => { sectionRefs.current[index] = element; }}
              >
                <p className="stepEyebrow">{step.eyebrow}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="stickyPhone">
            <div className="phoneHalo" />
            <div className="screenStack">
              {steps.map((step, index) => (
                <div className={`screenLayer ${activeStep === index ? "show" : ""}`} key={step.image}>
                  <PhoneFrame image={step.image} />
                </div>
              ))}
            </div>
            <div className="stepDots" aria-hidden="true">
              {steps.map((_, index) => (
                <span className={activeStep === index ? "active" : ""} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="beyond" id="progress">
        <div className="shell beyondGrid">
          <div className="beyondCopy">
            <p className="eyebrow">Beyond one reset</p>
            <h2>Notice the patterns your mind keeps repeating.</h2>
            <p>
              Moments keep your completed resets organized. Insights turn them into a clearer picture of your progress over time.
            </p>
            <div className="featureList">
              <div><strong>Moments</strong><span>Return to thoughts, reframes, and outcomes.</span></div>
              <div><strong>Insights</strong><span>See progress, active days, and what helps most.</span></div>
              <div><strong>Private by design</strong><span>Your reflections stay personal and focused on you.</span></div>
            </div>
          </div>

          <div className="doublePhone">
            <div className="phoneBack"><PhoneFrame image="/screens/moments.png" /></div>
            <div className="phoneFront"><PhoneFrame image="/screens/insights.png" /></div>
          </div>
        </div>
      </section>

      <section className="finalCta shell" id="download">
        <div className="ctaCircle" />
        <p className="eyebrow">LiveNow for iPhone</p>
        <h2>Get out of your head.<br />Come back to your life.</h2>
        <p>LiveNow is being prepared for the App Store.</p>
        <button className="primaryButton" type="button" disabled>Coming soon</button>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandDot" /><span>LiveNow</span></div>
        <div className="footerLinks">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@livenowapp.net">Contact</a>
        </div>
        <p>© 2026 LiveNow</p>
      </footer>
    </main>
  );
}

function PhoneFrame({ image, priority = false }: { image: string; priority?: boolean }) {
  return (
    <div className="phoneFrame">
      <div className="phoneSpeaker" />
      <div className="phoneScreen">
        <Image src={image} alt="LiveNow app screen" fill sizes="(max-width: 800px) 72vw, 360px" priority={priority} />
      </div>
    </div>
  );
}
