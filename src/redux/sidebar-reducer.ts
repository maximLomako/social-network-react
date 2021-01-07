import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {FriendsType} from "./store";

export type SidebarType = {
  friends: Array<FriendsType>
}

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>

const initialState = {
  friends: [
    {
      id: 1,
      name: 'Dimych',
      avatar: 'https://img.pngio.com/owl-png-clipart-animal-baby-baby-owl-cute-cute-owl-free-png-cute-baby-owl-png-432_428.jpg'
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
  ]
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
  return {...state};
}
export default sidebarReducer;