import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type  HeaderPropsType = {
  login: string | null
  isAuth: boolean
  setAuthUserData: (userId: number, email: string, login: string) => void
}
const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src="https://www.clipartmax.com/png/full/17-174256_transparent-owl-with-book-png-clipart-picture-transparent-background-books-clipart.png" alt="logo"/>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}



export default Header;