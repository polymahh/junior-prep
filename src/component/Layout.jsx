import React from "react";
import Header from "./Header";
import Authmodel from "./Registermodal";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Authmodel />
    </>
  );
};

export default Layout;
