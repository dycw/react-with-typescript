import "./App.css";

export type ButtonProps = { className: string };

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};

function App() {
  return <div>Hello</div>;
}

export default App;
