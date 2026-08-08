import PhoneScreenshot from "@/components/PhoneScreenshot";

type AnalyzeScreenProps = {
  progress: number;
};

export default function AnalyzeScreen({
  progress,
}: AnalyzeScreenProps) {
  const clamped = Math.min(1, Math.max(0, progress));
  const showBottom = clamped >= 0.5;

  return (
    <PhoneScreenshot
      src={
        showBottom
          ? "/screens/reset-analyze-bottom.png"
          : "/screens/reset-analyze-top.png"
      }
      alt="LiveNow analyze screen"
      priority
    />
  );
}