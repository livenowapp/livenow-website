import Image from "next/image";
import { useMemo } from "react";

import { StatusBar, AppHeader } from "@/components/AppChrome";
import BottomButton from "@/ui/BottomButton";

export default function CompleteScreen() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        angle: (i / 18) * Math.PI * 2 + (i % 3) * 0.09,
        distance: 78 + (i % 5) * 15,
        delay: (i % 7) * 0.035,
        size: 8 + (i % 4) * 3,
      })),
    []
  );

  return (
    <div className="app completeApp">
      <StatusBar />
      <AppHeader done />

      <div className="completeArea">
        <div className="completeRings">
          <span />
          <span />
          <span />
        </div>

        {particles.map((p, i) => (
          <span
            key={i}
            className="burstSpark"
            style={
              {
                "--x": `${Math.cos(p.angle) * p.distance}px`,
                "--y": `${Math.sin(p.angle) * p.distance}px`,
                "--delay": `${p.delay}s`,
                "--size": `${p.size}px`,
              } as React.CSSProperties
            }
          >
            ✦
          </span>
        ))}

        <div className="completeOrb">✓</div>
      </div>

      <h4>saved to your journey</h4>

      <p>keep going</p>

      <div className="nextCard">
        <Image
          src="/assets/action_nophone.png"
          alt=""
          width={58}
          height={58}
        />

        <span>
          <small>your next step</small>
          <b>Step away from checking their updates</b>
          <em>do this now, before your mind pulls you back in</em>
        </span>
      </div>

      <BottomButton text="New Reset" />

      <button className="linkButton">
        view moments
      </button>
    </div>
  );
}