"use client";

import { useEffect, useRef, useState } from "react";

import Phone from "@/components/Phone";
import MomentDetailScreen from "@/screens/MomentDetailScreen";

type ScrollStoryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
};

export default function ScrollStory({
  id,
  eyebrow,
  title,
  body,
  dark = false,
}: ScrollStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;

      if (!section) {
        frame = 0;
        return;
      }

      const rect = section.getBoundingClientRect();

      const travel = Math.max(
        1,
        section.offsetHeight - window.innerHeight
      );

      const nextProgress = Math.min(
        1,
        Math.max(0, -rect.top / travel)
      );

      setProgress(nextProgress);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const showBottom = progress >= 0.5;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`scrollStory ${dark ? "dark" : ""}`}
    >
      <div className="scrollStorySticky shell">
        <div className="scrollStoryCopy">
          <p className="eyebrow">{eyebrow}</p>

          <h2>{title}</h2>

          <p>{body}</p>

          <div
            className={`storyProgress ${
              showBottom ? "showRight" : "showLeft"
            }`}
          >
            <span />
          </div>
        </div>

        <div className="scrollStoryPhone">
          <Phone>
            <MomentDetailScreen progress={progress} />
          </Phone>
        </div>
      </div>
    </section>
  );
}