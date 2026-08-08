import AnalyzeScreen from "@/screens/AnalyzeScreen";

import ScreenshotScreen from "@/components/ScreenshotScreen";

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
      return (
        <ScreenshotScreen
          src="/screens/reset-input.png"
          alt="LiveNow input screen"
        />
      );

    case "analyze":
      return <AnalyzeScreen progress={analysisProgress} />;

    case "reframe":
      return (
        <ScreenshotScreen
          src="/screens/reset-reframe.png"
          alt="LiveNow reframe screen"
        />
      );

    case "action":
      return (
        <ScreenshotScreen
          src="/screens/reset-action.png"
          alt="LiveNow action screen"
        />
      );

    case "complete":
      return (
        <ScreenshotScreen
          src="/screens/reset-complete.png"
          alt="LiveNow complete screen"
        />
      );
  }
}