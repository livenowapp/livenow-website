import type { ReactNode } from "react";

type PhoneProps = {
  children: ReactNode;
};

export default function Phone({ children }: PhoneProps) {
  return (
    <div className="phone">
      <div className="phoneSide sideA" />
      <div className="phoneSide sideB" />

      <div className="screen">
        <div className="island" />
        {children}
      </div>
    </div>
  );
}