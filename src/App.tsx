import "./App.css";
import article from "./Article.module.css";
import dude from "./Dude.module.css";
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
      <header>
        <article className={article.article}>
          <div className={article.article__description}>
            <h1 className={article.article__title}>
              Hi, I am joe, your trusted <span>seo</span> consultant
            </h1>
            <p className={article.article__paragraph}>
              I help businesses optimize their online presence by implementing
              tailored SEO strategies, so they can increase their bvibisility,
              atrract more organic traffic, and ultimately achieve higher
              conversion rats.
            </p>
          </div>
          <Button text="Free Zoom Call" />
        </article>

        <div className={dude.dude}>
          <img
            src="./public/dude.png"
            alt="This is a person"
            width="500"
            height="749"
          />
        </div>
      </header>
    </>
  );
}

export default App;
