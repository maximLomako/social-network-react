import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  ActionsTypes,
  DialogsPageType,
  sendMessageAC, StoreType,
  updateNewMessageBodyAC,
  updateNewPostTextAC
} from "../../redux/state";


type DialogsPropsType = {
  store: StoreType
}

const Dialogs = (props: DialogsPropsType) => {
  let state = props.store.getState().dialogsPage;

  const dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
  const messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    if (text) {
      props.store.dispatch(updateNewMessageBodyAC(text));
    }
  }
  const onSendMessage = () => {
    props.store.dispatch(sendMessageAC());
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
      <textarea placeholder="Enter yout message"
                value={state.newMessageBody}
                onChange={onMessageChange}></textarea>
        <button onClick={onSendMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default Dialogs;