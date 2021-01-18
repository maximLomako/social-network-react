import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
  id: number
  name: string
  avatar: string
}

const DialogItem = (props: DialogItemPropsType) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img className={s.img} src={props.avatar} alt="avatar"/>
      <NavLink className={s.nav} activeClassName={s.active} to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;