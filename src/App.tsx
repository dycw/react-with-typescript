import "./App.css";

export const Button = ({
  className,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
