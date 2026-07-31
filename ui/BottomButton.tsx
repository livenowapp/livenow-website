type BottomButtonProps = {
  text: string;
};

export default function BottomButton({ text }: BottomButtonProps) {
  return (
    <button className="bottomButton" type="button">
      {text}
    </button>
  );
}