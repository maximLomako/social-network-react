import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


type DialogsPropsType = {
  dialogsPage: DialogsPageType
  updateNewMessageBody: (text: string) => void
  sendMessage: () => void
}

const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage;
  const dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
  const messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    if (text) {
      props.updateNewMessageBody(text)
    }
  }
  const onSendMessage = () => {
    props.sendMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div className={s.textAreaBlock}>
      <textarea placeholder="Enter you message"
                value={props.dialogsPage.newMessageBody}
                onChange={onMessageChange}/>
        <button onClick={onSendMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default Dialogs;