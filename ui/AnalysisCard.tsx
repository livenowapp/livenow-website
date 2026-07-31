import IconGlyph from "./IconGlyph";

type AnalysisCardProps = {
  icon: "search" | "brain" | "heart";
  title: string;
  text: string;
};

export default function AnalysisCard({
  icon,
  title,
  text,
}: AnalysisCardProps) {
  return (
    <div className="analysisCard">
      <i>
        <IconGlyph type={icon} />
      </i>

      <span>
        <b>{title}</b>
        <small>{text}</small>
      </span>
    </div>
  );
}