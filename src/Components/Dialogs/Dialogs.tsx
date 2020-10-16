import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
  state: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {


  const dialogsElements = props.state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
  const messagesElements = props.state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addMessage = () => {
    console.log(newPostElement.current?.value)
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
      <textarea ref={newPostElement}></textarea>
      <button onClick={addMessage}>Send Message</button>
    </div>
    </div>
  )
}

export default Dialogs;