import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
  id: string
  name: string
}

const DialogItem = (props: DialogItemPropsType) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

type MessagePropsType = {
  message: string
}

const Message = (props:MessagePropsType) => {
  return (
    <div className={s.dialog}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
       <DialogItem name='Maxim' id='1'/>
       <DialogItem name='Ignat' id='2'/>
       <DialogItem name='Petya' id='3'/>
       <DialogItem name='Taras' id='4'/>
       <DialogItem name='Vasiliy' id='5'/>
      </div>
      <div className={s.messages}>
      <Message message='Hello'/>
      <Message message='How are you'/>
      <Message message='Yoo'/>
      </div>
    </div>
  )
}

export default Dialogs;