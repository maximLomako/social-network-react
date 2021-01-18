import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {
  followAC,
  initialStateUsersType,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC, toggleIsFetchingAC,
  unFollowAC
} from "./users-reducer";

export type PostsType = {
  id: number
  message: string
  likeCount: number
}
export type DialogsType = {
  id: number
  name: string
  avatar: string
}
export type MessagesType = {
  id: number
  message: string
}
export type FriendsType = {
  id: number
  name: string
  avatar: string
}
export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}
export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}
export type SidebarType = {
  friends: Array<FriendsType>
}
export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType
  sidebar: SidebarType
  usersPage: initialStateUsersType

}
export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
}

// export const store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: 1, message: "It's my first post", likeCount: 21},
//         {id: 2, message: 'How are you', likeCount: 23},
//         {id: 3, message: 'Yoo', likeCount: 24}
//       ],
//       newPostText: ''
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: 'Dimych',
//           avatar: "https://img.pngio.com/owl-png-clipart-animal-baby-baby-owl-cute-cute-owl-free-png-cute-baby-owl-png-432_428.jpg"
//         },
//         {
//           id: 2,
//           name: 'Maxim',
//           avatar: 'https://www.nicepng.com/png/detail/109-1091648_owl-sweet-clipart-png-owl-clipart-transparent-background.png'
//         },
//         {id: 3, name: 'Ignat', avatar: 'https://im0-tub-by.yandex.net/i?id=0f31a447884c7f6ee2f51bbd772b8dc4&n=13'},
//         {
//           id: 4,
//           name: 'Petya',
//           avatar: 'https://yt3.ggpht.com/a/AATXAJwOSrnw1sxiAja3shA1pcI79Fo0U4iF2gDAAw=s900-c-k-c0xffffffff-no-rj-mo'
//         },
//         {
//           id: 5,
//           name: 'Vasiliy',
//           avatar: 'https://yt3.ggpht.com/a/AATXAJzLBshD_XKGp7khJN3CFZ6qlbJKHlGMCHpzOQ=s900-c-k-c0xffffffff-no-rj-mo'
//         }
//       ],
//       messages: [
//         {id: 1, message: 'hello'},
//         {id: 2, message: 'How are you'},
//         {id: 3, message: 'Yoo'},
//         {id: 4, message: 'Hey'},
//         {id: 5, message: 'Bye'}
//       ],
//       newMessageBody: ''
//     },
//     sidebar: {
//       friends: [
//         {
//           id: 1,
//           name: 'Dimych',
//           avatar: 'https://img.pngio.com/owl-png-clipart-animal-baby-baby-owl-cute-cute-owl-free-png-cute-baby-owl-png-432_428.jpg'
//         },
//         {
//           id: 2,
//           name: 'Maxim',
//           avatar: 'https://www.nicepng.com/png/detail/109-1091648_owl-sweet-clipart-png-owl-clipart-transparent-background.png'
//         },
//         {id: 3, name: 'Ignat', avatar: 'https://im0-tub-by.yandex.net/i?id=0f31a447884c7f6ee2f51bbd772b8dc4&n=13'},
//         {
//           id: 4,
//           name: 'Petya',
//           avatar: 'https://yt3.ggpht.com/a/AATXAJwOSrnw1sxiAja3shA1pcI79Fo0U4iF2gDAAw=s900-c-k-c0xffffffff-no-rj-mo'
//         },
//         {
//           id: 5,
//           name: 'Vasiliy',
//           avatar: 'https://yt3.ggpht.com/a/AATXAJzLBshD_XKGp7khJN3CFZ6qlbJKHlGMCHpzOQ=s900-c-k-c0xffffffff-no-rj-mo'
//         }
//       ]
//     }
//   },
//   _callSubscriber() {
//     console.log('state is changed!')
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer
//   },
//   getState() {
//     return this._state
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//     this._callSubscriber();
//   },
// }



