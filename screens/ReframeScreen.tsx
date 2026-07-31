import { ProgressTop } from "@/components/AppChrome";
import BottomButton from "@/ui/BottomButton";

export default function ReframeScreen() {
  const options = [
    "You can enjoy your own evening and still be close to your friends.",
    "Staying home sometimes is normal, not a sign you’re left out.",
    "Missing one thing doesn’t mean you’re missing out on the friendship itself.",
  ];

  return (
    <div className="app flowApp">
      <ProgressTop step={3} />

      <div className="flowHeading">
        <h4>
          let’s reframe
          <br />
          this
        </h4>

        <p>here’s a more realistic view</p>
      </div>

      <div className="optionList">
        {options.map((option, index) => (
          <div key={option} className={index === 0 ? "selected" : ""}>
            <i>{index === 0 ? "✓" : ""}</i>
            <span>{option}</span>
          </div>
        ))}
      </div>

      <p className="helper">
        Choose the response that feels most believable right now.
      </p>

      <BottomButton text="continue" />
    </div>
  );
}