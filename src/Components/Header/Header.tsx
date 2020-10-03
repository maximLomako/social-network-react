import React from "react";
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img src="https://www.uokpl.rs/fpng/f/513-5139461_library-of-owl.png" alt="logo"/>
    </header>
  )
}

export default Header;