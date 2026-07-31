"use client";

import Image from "next/image";
import Phone from "./Phone";
import HomeScreen from "@/screens/HomeScreen";

export default function HeroSection() {
  return (
    <>
      <nav className="nav shell">
        <a href="#top" className="brand">
          <Image
            src="/assets/LogoCircle.png"
            alt="LiveNow"
            width={32}
            height={32}
          />
          <span>LiveNow</span>
        </a>

        <div className="navLinks">
          <a href="#how">How it works</a>
          <a href="#moments">Moments</a>
          <a className="navCta" href="#download">
            Coming soon
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Your reset from overthinking</p>

          <h1>
            Stop
            <br />
            Overthinking.
            <br />
            <span>Start Living.</span>
          </h1>

          <p className="heroText">
            LiveNow helps you understand the thought, reframe it, and take one
            small step back into the present.
          </p>

          <div className="heroActions">
            <a href="#how" className="primaryButton">
              See how it works
            </a>

            <span>Quick. Private. Made for the moment.</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroAura" />

          <Phone>
            <HomeScreen />
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