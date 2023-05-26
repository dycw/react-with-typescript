import "./App.css";

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};

function App() {
  return <div>Hello</div>;
}

export default App;
