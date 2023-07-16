import React from "react";
import Header from "./Header";
import Authmodel from "./authModal/Registermodal";

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
