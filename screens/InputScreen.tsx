import { ProgressTop } from "@/components/AppChrome";
import BottomButton from "@/ui/BottomButton";
import CloudIcon from "@/ui/CloudIcon";

export default function InputScreen() {
  return (
    <div className="app flowApp inputApp">
      <ProgressTop step={1} />

      <div className="flowHeading">
        <h4>
          what’s on
          <br />
          your mind?
        </h4>

        <p>write freely, no filter.</p>
      </div>

      <div className="thoughtInput">
        Today my friends are going out, but I’m staying home. I feel like I’m
        missing out.
        <span className="cursor" />
      </div>

      <p className="examplesTitle">examples</p>

      <div className="exampleCard">
        <CloudIcon />
        <span>they think I’m weird</span>
      </div>

      <div className="exampleCard">
        <CloudIcon />
        <span>I said something stupid</span>
      </div>

      <div className="exampleCard">
        <CloudIcon />
        <span>I’m not good enough</span>
      </div>

      <small className="disclaimer inputDisclaimer">
        ✦ &nbsp; AI-generated reflection. Not professional advice.
      </small>

      <BottomButton text="analyze" />
    </div>
  );
}