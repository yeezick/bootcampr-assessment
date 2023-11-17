import React, { useEffect, useState } from "react";
import { Nav } from "./Nav/Nav";
import "./Layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  // const [showSignup, setShowSignup] = useState(true)

  // const updateSignupButton = () => {
  //   setShowSignup(false)
  // }

  return (
    <>
      <Nav  />
      <div className="main-wrapper">
        <div className={"main-content-container"}>{children}</div>
      </div>
    </>
  );
};
