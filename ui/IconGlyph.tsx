type IconGlyphProps = {
  type: "search" | "brain" | "heart";
};

export default function IconGlyph({ type }: IconGlyphProps) {
  if (type === "search") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="21" cy="21" r="11" />
        <path d="M29 29l9 9" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 39S7 29 7 17c0-7 9-10 17-2 8-8 17-5 17 2 0 12-17 22-17 22z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M18 10c-5 0-8 4-8 8 0 2 1 4 3 5-2 2-3 4-2 7 1 4 5 6 9 5 1 3 4 5 7 5 4 0 7-3 7-7 4 0 7-3 7-7 0-3-2-6-5-7 1-5-3-9-8-9-3 0-5 1-6 3-1-2-3-3-6-3z" />
      <path d="M19 15c3 1 4 4 3 7M31 15c-3 1-4 4-3 7M16 27c3-2 6-1 7 2M32 27c-3-2-6-1-7 2M24 13v22" />
    </svg>
  );
}