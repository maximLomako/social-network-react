

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
  newMessageText: string
}
export type SidebarType = {
  friends: Array<FriendsType>
}
export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType
  sidebar: SidebarType

}
export type StoreType = {
  _state: StateType
  addPost: ()=> void
  addMessage: ()=> void
  updateNewPostText: (newText: string) => void
  updateNewMessageText: (newText: string) => void
  _rerenderEntireTree:() => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
}

export const store:StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "It's my first post", likeCount: 21},
        {id: 2, message: 'How are you', likeCount: 23},
        {id: 3, message: 'Yoo', likeCount: 24}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Dimych',
          avatar: 'https://www.clipartmax.com/png/full/17-174256_transparent-owl-with-book-png-clipart-picture-transparent-background-books-clipart.png'
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
      newMessageText: ''
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Dimych',
          avatar: 'https://www.clipartmax.com/png/full/17-174256_transparent-owl-with-book-png-clipart-picture-transparent-background-books-clipart.png'
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
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree()
  },
  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._rerenderEntireTree()
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree();
  },
  updateNewMessageText(newText: string) {
    this._state.dialogsPage.newMessageText = newText;
    this._rerenderEntireTree();
  },
  _rerenderEntireTree(){
    console.log('state is changed!')
  },
  subscribe(observer: () => void) {
    this._rerenderEntireTree = observer
  },
  getState() {
    return this._state
  }

}
// export let state = {
//   profilePage: {
//     posts: [
//       {id: 1, message: "It's my first post", likeCount: 21},
//       {id: 2, message: 'How are you', likeCount: 23},
//       {id: 3, message: 'Yoo', likeCount: 24}
//     ],
//     newPostText: ''
//   },
//   dialogsPage: {
//     dialogs: [
//       {
//         id: 1,
//         name: 'Dimych',
//         avatar: 'https://www.clipartmax.com/png/full/17-174256_transparent-owl-with-book-png-clipart-picture-transparent-background-books-clipart.png'
//       },
//       {
//         id: 2,
//         name: 'Maxim',
//         avatar: 'https://www.nicepng.com/png/detail/109-1091648_owl-sweet-clipart-png-owl-clipart-transparent-background.png'
//       },
//       {id: 3, name: 'Ignat', avatar: 'https://im0-tub-by.yandex.net/i?id=0f31a447884c7f6ee2f51bbd772b8dc4&n=13'},
//       {
//         id: 4,
//         name: 'Petya',
//         avatar: 'https://yt3.ggpht.com/a/AATXAJwOSrnw1sxiAja3shA1pcI79Fo0U4iF2gDAAw=s900-c-k-c0xffffffff-no-rj-mo'
//       },
//       {
//         id: 5,
//         name: 'Vasiliy',
//         avatar: 'https://yt3.ggpht.com/a/AATXAJzLBshD_XKGp7khJN3CFZ6qlbJKHlGMCHpzOQ=s900-c-k-c0xffffffff-no-rj-mo'
//       }
//     ],
//     messages: [
//       {id: 1, message: 'hello'},
//       {id: 2, message: 'How are you'},
//       {id: 3, message: 'Yoo'},
//       {id: 4, message: 'Hey'},
//       {id: 5, message: 'Bye'}
//     ],
//     newMessageText: ''
//   },
//   sidebar: {
//     friends: [
//       {
//         id: 1,
//         name: 'Dimych',
//         avatar: 'https://www.clipartmax.com/png/full/17-174256_transparent-owl-with-book-png-clipart-picture-transparent-background-books-clipart.png'
//       },
//       {
//         id: 2,
//         name: 'Maxim',
//         avatar: 'https://www.nicepng.com/png/detail/109-1091648_owl-sweet-clipart-png-owl-clipart-transparent-background.png'
//       },
//       {id: 3, name: 'Ignat', avatar: 'https://im0-tub-by.yandex.net/i?id=0f31a447884c7f6ee2f51bbd772b8dc4&n=13'},
//       {
//         id: 4,
//         name: 'Petya',
//         avatar: 'https://yt3.ggpht.com/a/AATXAJwOSrnw1sxiAja3shA1pcI79Fo0U4iF2gDAAw=s900-c-k-c0xffffffff-no-rj-mo'
//       },
//       {
//         id: 5,
//         name: 'Vasiliy',
//         avatar: 'https://yt3.ggpht.com/a/AATXAJzLBshD_XKGp7khJN3CFZ6qlbJKHlGMCHpzOQ=s900-c-k-c0xffffffff-no-rj-mo'
//       }
//     ]
//   }
// }
//
// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 0
//   }
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state)
// }
//
// export const updateNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }
//
// export const addMessage = () => {
//   let newMessage = {
//     id: 6,
//     message: state.dialogsPage.newMessageText,
//   }
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText = '';
//   rerenderEntireTree(state)
// }
//
// export const updateNewMessageText = (newText: string) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// }
//
// export const subscribe = (observer: (state: StateType) => void) => {
//   rerenderEntireTree = observer;
// }



