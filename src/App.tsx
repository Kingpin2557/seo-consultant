import "./App.css";
import Button from "./components/Button/Button";
import { NavItem, NavMenu } from "./components/Navbar/nav";

function App() {
  return (
    <>
      <Button text="Free Zoom Call" />

      <NavMenu>
        <NavItem text="Home" url="./" isActive={true} />
        <NavItem text="My Services" url="./" isActive={false} />
        <NavItem text="Clients" url="./" isActive={false} />
        <NavItem text="Resources" url="./" isActive={false} />
      </NavMenu>
    </>
  );
}

export default App;
