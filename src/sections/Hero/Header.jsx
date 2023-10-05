import React from "react";
import logo from "../../assets/logo.svg";
import ButtonPrimary from "../../components/Buttons/Button";
import { links } from "../../data.js";

const Header = () => {
  return (
    <div className="container-2xl mx-auto flex w-full items-center justify-between px-[120px] pt-12">
      <div>
        <a href="#">
          <img src={logo} width={156} height={52} alt="main logo" />
        </a>
      </div>
      <nav className="">
        <ul className="flex gap-x-[60px]">
          {links.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="text-xl font-medium transition duration-500 ease-in-out hover:text-primary"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
