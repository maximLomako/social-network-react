import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
  state: DialogsPageType
  addMessage: () => void,
  updateNewMessageText: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
  const messagesElements = props.state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    if (text) {
      props.updateNewMessageText(text);
    }
  }
  const addMessage = () => {
    props.addMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    <div>
      <textarea value={props.state.newMessageText} onChange={onMessageChange}></textarea>
      <button onClick={addMessage}>Send Message</button>
    </div>
    </div>
  )
}

export default Dialogs;