import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, MessagesType} from "../../index";

type DialogsPropsType = {
  dialogsData: Array<DialogsDataType>
  messages: Array<MessagesType>

}

const Dialogs = (props: DialogsPropsType) => {


  const dialogsElements = props.dialogsData
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
  const messagesElements = props.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;