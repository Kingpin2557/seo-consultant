import "./App.css";
import Button from "./components/Button/Button";
import Logo from "./components/Icon/Logo";
import { NavItem, NavMenu } from "./components/Navbar/nav";

function App() {
  return (
    <>
      <nav>
        <Logo />
        <NavMenu>
          <NavItem text="Home" url="./" isActive={true} />
          <NavItem text="My Services" url="./" isActive={false} />
          <NavItem text="Clients" url="./" isActive={false} />
          <NavItem text="Resources" url="./" isActive={false} />
        </NavMenu>
        <Button text="Free Zoom Call" />
      </nav>
    </>
  );
}

export default App;
