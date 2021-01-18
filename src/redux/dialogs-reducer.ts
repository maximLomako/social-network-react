import {DialogsType, MessagesType} from "./store";
import {addPostAC, updateNewPostTextAC} from "./profile-reducer";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>


export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}

const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Dimych',
      avatar: "https://img.pngio.com/owl-png-clipart-animal-baby-baby-owl-cute-cute-owl-free-png-cute-baby-owl-png-432_428.jpg"
    },
    {
      id: 2,
      name: 'Maxim',
      avatar: 'https://www.nicepng.com/png/detail/109-1091648_owl-sweet-clipart-png-owl-clipart-transparent-background.png'
    },
    {id: 3, name: 'Ignat', avatar: 'https://im0-tub-by.yandex.net/i?id=0f31a447884c7f6ee2f51bbd772b8dc4&n=13'},
    {
      id: 4,
      name: 'Petya',
      avatar: 'https://yt3.ggpht.com/a/AATXAJwOSrnw1sxiAja3shA1pcI79Fo0U4iF2gDAAw=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
      id: 5,
      name: 'Vasiliy',
      avatar: 'https://yt3.ggpht.com/a/AATXAJzLBshD_XKGp7khJN3CFZ6qlbJKHlGMCHpzOQ=s900-c-k-c0xffffffff-no-rj-mo'
    }
  ],
  messages: [
    {id: 1, message: 'hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yoo'},
    {id: 4, message: 'Hey'},
    {id: 5, message: 'Bye'}
  ],
  newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: state.newMessageBody}]
      };
    }
    case "UPDATE-NEW-MESSAGE-BODY":
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state;
  }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (text: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)

export default dialogsReducer;