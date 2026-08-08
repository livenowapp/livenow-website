import PhoneScreenshot from "@/components/PhoneScreenshot";

type ScreenshotScreenProps = {
  src: string;
  alt: string;
};

export default function ScreenshotScreen({
  src,
  alt,
}: ScreenshotScreenProps) {
  return (
    <PhoneScreenshot
      src={src}
      alt={alt}
      priority
    />
  );
}