import React, { type ReactNode } from "react";

type NavMenu = {
  children: ReactNode;
};

function NavMenu({ children }: NavMenu) {
  return (
    <ul>
      {React.Children.toArray(children).map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
}

export default NavMenu;
