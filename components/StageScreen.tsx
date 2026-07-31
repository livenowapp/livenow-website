import InputScreen from "@/screens/InputScreen";
import AnalyzeScreen from "@/screens/AnalyzeScreen";
import ReframeScreen from "@/screens/ReframeScreen";
import ActionScreen from "@/screens/ActionScreen";
import CompleteScreen from "@/screens/CompleteScreen";

export type Stage =
  | "input"
  | "analyze"
  | "reframe"
  | "action"
  | "complete";

type StageScreenProps = {
  stage: Stage;
  analysisProgress: number;
};

export default function StageScreen({
  stage,
  analysisProgress,
}: StageScreenProps) {
  switch (stage) {
    case "input":
      return <InputScreen />;

    case "analyze":
      return <AnalyzeScreen progress={analysisProgress} />;

    case "reframe":
      return <ReframeScreen />;

    case "action":
      return <ActionScreen />;

    case "complete":
      return <CompleteScreen />;
  }
}