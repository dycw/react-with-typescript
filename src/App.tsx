import "./App.css";
import { ComponentProps } from "react";

// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};

// Your app:

type NavBarProps = ComponentProps<typeof NavBar>;

function App() {
  return (
    <div>
      <NavBar title="title" links={[]}>
        children
      </NavBar>
    </div>
  );
}

export default App;
