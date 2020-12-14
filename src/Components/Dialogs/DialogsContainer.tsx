import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {CombinedState, Store} from "redux";
import Dialogs from "./Dialogs";
import {updateNewPostTextAC} from "../../redux/profile-reducer";


type DialogsContainerPropsType = {
  store:  Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
  let state = props.store.getState().dialogsPage;

  const onMessageChange = (text: string) => {
    if (text) {
      let action = updateNewPostTextAC(text);
      props.store.dispatch(action);
    }
  }
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC());
  }

  return (
    <Dialogs dialogsPage={state}
             sendMessage={onSendMessageClick}
             updateNewMessageBody={onMessageChange}
             newMessageBody={state.newMessageBody}/>
  )
}

export default DialogsContainer;