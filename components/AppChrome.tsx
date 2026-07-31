type AppHeaderProps = {
  done?: boolean;
};

type ProgressTopProps = {
  step: number;
};

export function StatusBar() {
  return (
    <div className="status">
      <b>9:41</b>
      <span>•••• ᴡɪꜰɪ ▰</span>
    </div>
  );
}

export function AppHeader({ done = false }: AppHeaderProps) {
  return (
    <div className="appHeader">
      <span />
      <b>LiveNow</b>
      {done ? <em>Done</em> : <span />}
    </div>
  );
}

export function ProgressTop({ step }: ProgressTopProps) {
  return (
    <>
      <StatusBar />

      <div className="progressTop">
        <b>‹</b>

        <span>
          <i style={{ width: `${step * 25}%` }} />
        </span>

        <em>{step} of 4</em>
      </div>
    </>
  );
}