import Image from "next/image";

export default function CloudIcon() {
  return (
    <span className="cloudIcon">
      <Image
        src="/assets/cloud.png"
        alt=""
        width={38}
        height={38}
      />
    </span>
  );
}