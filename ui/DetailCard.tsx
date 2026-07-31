type DetailCardProps = {
  kicker: string;
  title: string;
  text: string;
  muted?: boolean;
};

export default function DetailCard({
  kicker,
  title,
  text,
  muted = false,
}: DetailCardProps) {
  return (
    <div className="detailCard">
      <small>{kicker}</small>
      <h5>{title}</h5>
      <p className={muted ? "muted" : ""}>{text}</p>
    </div>
  );
}