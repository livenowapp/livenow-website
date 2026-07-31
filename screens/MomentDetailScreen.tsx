import Image from "next/image";

import { StatusBar } from "@/components/AppChrome";

import AnalysisCard from "@/ui/AnalysisCard";
import DetailCard from "@/ui/DetailCard";

type MomentDetailScreenProps = {
  progress?: number;
};

export default function MomentDetailScreen({
  progress = 0,
}: MomentDetailScreenProps) {
  const eased = progress * progress * (3 - 2 * progress);
  const translate = eased * 815;

  return (
    <div className="app detailApp">
      <StatusBar />

      <div className="back detailBack">‹</div>

      <div className="detailViewport linkedViewport">
        <div
          className="detailScrollTrack linkedTrack"
          style={{
            transform: `translate3d(0,-${translate}px,0)`,
          }}
        >
          <div className="detailHero">
            <small>Jul 28, 2026 · 7:16 PM</small>

            <span className="detailAction">
              <Image
                src="/assets/action_handraised.png"
                alt=""
                width={72}
                height={72}
              />
            </span>

            <p>Do one small thing despite the doubt</p>

            <h5>
              lacking confidence
              <br />
              right now
            </h5>

            <em>Not worth it</em>
          </div>

          <div className="outcome">
            <b>Was it worth overthinking?</b>

            <div>
              <strong>no</strong>
              <span>maybe</span>
              <span>yes</span>
            </div>
          </div>

          <DetailCard
            kicker="your thought"
            title="What was on your mind"
            text="I don’t feel confident"
          />

          <div className="detailAnalysis">
            <h5>What your mind was doing</h5>

            <AnalysisCard
              icon="search"
              title="confidence is all-or-nothing"
              text="Feeling unconfident in one moment doesn’t mean you lack it overall."
            />

            <AnalysisCard
              icon="brain"
              title="uncertainty triggers doubt"
              text="When stakes feel high or outcomes are unclear, your mind questions your ability."
            />

            <AnalysisCard
              icon="heart"
              title="confidence grows through doing"
              text="Most people feel uncertain before trying something new. Action often comes before the feeling."
            />
          </div>

          <DetailCard
            kicker="chosen reframe"
            title="A more realistic thought"
            text="Confidence isn’t a requirement to start; it often follows small steps forward."
          />

          <DetailCard
            kicker="note"
            title="What did you learn?"
            text="write a small note…"
            muted
          />

          <div className="deleteReset">
            delete reset
          </div>
        </div>
      </div>
    </div>
  );
}