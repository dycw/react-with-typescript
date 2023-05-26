import { useReducer } from "react";

type Add = { type: "add"; add: number };
type Subtract = { type: "subtract"; subtract: number };

const reducer = (state: { count: number }, action: Add | Subtract) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.add };
    case "subtract":
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

dispatch({ type: "add", add: 1 });

// @ts-expect-error
dispatch({ type: "SUBTRACT", subtract: 1 });

// @ts-expect-error
dispatch({ type: "add" });

// @ts-expect-error
dispatch({ type: "subtract", subtract: "123" });

function App() {
  return <div></div>;
}

export default App;
