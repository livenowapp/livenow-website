import Image from "next/image";

type PhoneScreenshotProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function PhoneScreenshot({
  src,
  alt,
  priority = false,
}: PhoneScreenshotProps) {
  return (
    <div className="phoneScreenshot">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="350px"
      />
    </div>
  );
}