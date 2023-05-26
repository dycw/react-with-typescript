import { useCallback } from "react";

export const Buttons = (props: { id: string }) => {
  const onClick = useCallback<(buttonName: string) => void>(
    (buttonName) => {
      console.log(props.id, buttonName);
    },
    [props.id]
  );

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};

function App() {
  return <div></div>;
}

export default App;
