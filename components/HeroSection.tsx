"use client";

import Image from "next/image";

import Phone from "./Phone";

export default function HeroSection() {
  return (
    <>
      <header className="navBar">
        <nav className="nav shell">
          <a
            href="#top"
            className="brand"
            aria-label="LiveNow home"
          >
            <Image
              className="brandLogo"
              src="/assets/LogoCircle.png"
              alt=""
              width={38}
              height={38}
              priority
            />

            <span>LiveNow</span>
          </a>

          <div className="navLinks">
            <a href="#how">
              How it works
            </a>

            <a href="#moments">
              Moments
            </a>

            <a
              className="navCta"
              href="#download"
            >
              Coming soon for iOS
            </a>
          </div>
        </nav>
      </header>

      <section
        className="hero shell"
        id="top"
      >
        <div className="heroCopy">
          <p className="eyebrow">
            Your reset from overthinking
          </p>

          <h1>
            Stop Overthinking.
            <br />
            <span>Start Living.</span>
          </h1>

          <p className="heroText">
            LiveNow helps you understand the thought, reframe it,
            and take one small step back into the present.
          </p>

          <div className="heroActions">
            <a
              href="#how"
              className="primaryButton"
            >
              See how it works
            </a>

            <span>
              Quick. Private. Made for the moment.
            </span>
          </div>
        </div>

        <div className="heroVisual">

          <Phone>
            <div className="heroScreenshot">
              <Image
                src="/screens/home-hero.png"
                alt="LiveNow home screen"
                fill
                priority
                sizes="(max-width: 820px) 86vw, 350px"
              />
            </div>
          </Phone>
        </div>
      </section>

      <section className="orangeBand">
        <div className="shell bandGrid">
          <strong>Name the thought.</strong>
          <strong>See it clearly.</strong>
          <strong>Move forward.</strong>
        </div>
      </section>
    </>
  );
}