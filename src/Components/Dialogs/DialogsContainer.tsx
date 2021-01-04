import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        if (!store) {
          return
        }
        let state = store.getState().dialogsPage;
        const onMessageChange = (text: string) => {
          if (text) {
            let action = updateNewMessageBodyAC(text);
            store.dispatch(action);
          }
        }
        const onSendMessageClick = () => {
          store.dispatch(sendMessageAC());
        }
        return <Dialogs dialogsPage={state}
                        sendMessage={onSendMessageClick}
                        updateNewMessageBody={onMessageChange}
                        newMessageBody={state.newMessageBody}/>
      }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;