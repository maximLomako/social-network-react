import {rerenderEntireTree} from "../render";

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
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}

export type SidebarType = {
  friends: Array<FriendsType>
}

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType
  sidebar: SidebarType

}

export const state = {
  profilePage: {
    posts: [
      {id: 1, message: "It's my first post", likeCount: 21},
      {id: 2, message: 'How are you', likeCount: 23},
      {id: 3, message: 'Yoo', likeCount: 24}
    ]
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
    ]
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
}

export const addPost = (postMessage: string) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state, addPost)
}