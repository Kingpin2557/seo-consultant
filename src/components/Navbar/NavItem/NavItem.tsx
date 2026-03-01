import style from "./NavItem.module.css";

type NavItem = {
  text: string;
  url: string;
  isActive: boolean;
};

function NavItem({ text, url, isActive }: NavItem) {
  return (
    <a
      className={`${style.navitem} ${isActive ? style["navitem--active"] : ""}`}
      href={url}
    >
      {text}
    </a>
  );
}

export default NavItem;
