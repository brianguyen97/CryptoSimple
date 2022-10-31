import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>Cryptotrade</h1>
      </Link>
    </div>
  );
}

export default Navbar;
