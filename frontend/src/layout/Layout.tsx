import React, { useState } from "react";
import { Nav } from "./Nav/Nav";
import "./Layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (  
    <>
      <Nav showSignUp={showSignUp} />
      <div className="main-wrapper">
        <div className={"main-content-container"}>{children}</div>
      </div>
    </>
  );
};
