import Image from "next/image";

type ActionItem = {
  icon: string;
  color: string;
};

const actions: ActionItem[] = [
  {
    icon: "action_breath",
    color: "rgba(255, 235, 59, 0.33)",
  },
  {
    icon: "action_walk",
    color: "rgba(255, 152, 0, 0.22)",
  },
  {
    icon: "action_chat",
    color: "rgba(99, 102, 241, 0.22)",
  },
  {
    icon: "action_pencil",
    color: "rgba(20, 184, 166, 0.22)",
  },
  {
    icon: "action_leaf",
    color: "rgba(59, 130, 246, 0.11)",
  },
  {
    icon: "action_music",
    color: "rgba(34, 211, 238, 0.22)",
  },
  {
    icon: "action_sleep",
    color: "rgba(236, 72, 153, 0.16)",
  },
  {
    icon: "action_sunlight",
    color: "rgba(59, 130, 246, 0.22)",
  },
  {
    icon: "action_handraised",
    color: "rgba(239, 68, 68, 0.33)",
  },
  {
    icon: "action_meditation",
    color: "rgba(168, 85, 247, 0.11)",
  },
  {
    icon: "action_nophone",
    color: "rgba(107, 114, 128, 0.33)",
  },
  {
    icon: "action_book",
    color: "rgba(168, 85, 247, 0.16)",
  },
];

export default function ActionCloud() {
  return (
    <div className="actionCloud">
      {actions.map((action, index) => (
        <div
          key={action.icon}
          style={{
            animationDelay: `-${index * 0.37}s`,
            backgroundColor: action.color,
          }}
        >
          <Image
            src={`/assets/${action.icon}.png`}
            alt=""
            width={82}
            height={82}
          />
        </div>
      ))}
    </div>
  );
}