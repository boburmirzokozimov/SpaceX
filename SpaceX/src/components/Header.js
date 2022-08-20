import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

const Header = () => {
  return (
    <header className="absolute flex items-center justify-between px-5 w-full ">
      <div>
        <Link to="/">
          <SiSpacex className="text-white text-8xl"/>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to='/capsules' className="text-white text-sm lg:text-lg">Capsules</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
