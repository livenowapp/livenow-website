import Image from "next/image";

import { ProgressTop } from "@/components/AppChrome";
import BottomButton from "@/ui/BottomButton";

const actionItems = [
  {
    img: "action_chat.png",
    text: "Text a friend something genuine",
  },
  {
    img: "action_leaf.png",
    text: "Notice what feels good about your space",
  },
  {
    img: "action_pencil.png",
    text: "Write down plans you’d enjoy tonight",
  },
  {
    img: "action_nophone.png",
    text: "Step away from checking their updates",
  },
];

export default function ActionScreen() {
  return (
    <div className="app flowApp">
      <ProgressTop step={4} />

      <div className="flowHeading compact">
        <h4>
          what’s one small
          <br />
          step you can take
          <br />
          now?
        </h4>

        <p>shift your focus</p>
      </div>

      <div className="actionList">
        {actionItems.map((action, index) => (
          <div
            key={action.text}
            className={index === 3 ? "selected" : ""}
          >
            <i>{index === 3 ? "✓" : ""}</i>

            <span className="actionImage">
              <Image
                src={`/assets/${action.img}`}
                alt=""
                width={48}
                height={48}
              />
            </span>

            <b>{action.text}</b>
          </div>
        ))}
      </div>

      <BottomButton text="finish" />
    </div>
  );
}