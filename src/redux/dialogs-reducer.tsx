import React from "react";
import {ActionsTypes, DialogsPageType} from "./state";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
  switch (action.type) {
    case "SEND-MESSAGE":
      let newMessage = {
        id: 6, message: state.newMessageBody,
      }
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;
    case "UPDATE-NEW-MESSAGE-BODY":
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (text: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)

export default dialogsReducer;