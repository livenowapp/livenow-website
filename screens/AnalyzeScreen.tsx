import { ProgressTop } from "@/components/AppChrome";
import BottomButton from "@/ui/BottomButton";
import CloudIcon from "@/ui/CloudIcon";
import AnalysisCard from "@/ui/AnalysisCard";

export default function AnalyzeScreen({
  progress,
}: {
  progress: number;
}) {
  const translate = progress * 570;

  return (
    <div className="app detailApp analysisStoryApp">
      <ProgressTop step={2} />

      <div className="linkedViewport analysisLinkedViewport">
        <div
          className="linkedTrack analysisLinkedTrack"
          style={{
            transform: `translate3d(0,-${translate}px,0)`,
          }}
        >
          <div className="flowHeading">
            <h4>
              let’s analyze
              <br />
              this thought
            </h4>

            <p>this helps you see clearly.</p>
          </div>

          <div className="thoughtSummary">
            <strong>missing out with friends</strong>

            <div>
              <CloudIcon />

              <span>
                <b>your thought:</b>
                <small>
                  Today my friends are going out, but I’m staying home. I feel
                  like I’m missing out.
                </small>
              </span>
            </div>
          </div>

          <AnalysisCard
            icon="search"
            title="Everyone’s having more fun"
            text="Assuming their time together is better than your evening at home."
          />

          <AnalysisCard
            icon="brain"
            title="Social connection matters"
            text="Your brain flags social moments as important, especially when others are together."
          />

          <AnalysisCard
            icon="heart"
            title="One evening, not the whole story"
            text="Missing one outing doesn’t define your friendships or social life overall."
          />

          <p className="ask">Ask yourself</p>

          <div className="evidence">
            <div>
              <b>What might feel worthwhile tonight?</b>
              <span>Rest, a hobby, or time for something you’ve delayed.</span>
            </div>

            <div>
              <b>Will one evening change your friendships?</b>
              <span>Unlikely. Real friendships survive individual choices.</span>
            </div>
          </div>
        </div>
      </div>

      <BottomButton text="continue" />
    </div>
  );
}