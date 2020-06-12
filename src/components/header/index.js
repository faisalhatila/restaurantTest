import React from "react";
import { Navbar, Cover } from "..";

const Header = (props) => {
  return (
    <div>
      <div className="headerComponentDiv">
        <Navbar />
      </div>
      <Cover />
    </div>
  );
};

export default Header;
