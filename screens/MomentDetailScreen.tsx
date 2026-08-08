import PhoneScreenshot from "@/components/PhoneScreenshot";

type MomentDetailScreenProps = {
  progress?: number;
};

export default function MomentDetailScreen({
  progress = 0,
}: MomentDetailScreenProps) {
  const clamped = Math.min(1, Math.max(0, progress));
  const showBottom = clamped >= 0.5;

  return (
    <PhoneScreenshot
      src={
        showBottom
          ? "/screens/detail-bottom.png"
          : "/screens/detail-top.png"
      }
      alt="LiveNow moment detail screen"
      priority
    />
  );
}