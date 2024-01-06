import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav
      style={{ padding: "20px" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link active mr-3" href="/">
            {" "}
            Home
          </Link>
          <Link className="nav-item nav-link mr-3" href="/createblog">
            Create Blog
          </Link>
          <Link href="/allblogs" className="nav-item nav-link mr-3">
            All blogs
          </Link>
          {/* <a className="nav-item nav-link disabled" href="#">
            Disabled
          </a> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
