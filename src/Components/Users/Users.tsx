import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from './users.module.css'

type UsersPropsType = {
  users: UsersType
  setUsers: (users: UsersType) => void
  follow: (userID: number) => void
  unFollow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://sun9-45.userapi.com/c9946/u157240103/e_a1ccb275.jpg?ava=1',
        followed: true,
        fullName: 'Petr',
        status: 'I am a Petric',
        location: {city: 'Molodechno', country: 'Belarus'}
      },
      {
        id: 2,
        photoUrl: 'https://sun9-45.userapi.com/c9946/u157240103/e_a1ccb275.jpg?ava=1',
        followed: false,
        fullName: 'Kolya',
        status: 'I am a Raper from street',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 3,
        photoUrl: 'https://sun9-45.userapi.com/c9946/u157240103/e_a1ccb275.jpg?ava=1',
        followed: false,
        fullName: 'Astanifka',
        status: 'I like eat dranik',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
      {
        id: 4,
        photoUrl: 'https://sun9-45.userapi.com/c9946/u157240103/e_a1ccb275.jpg?ava=1',
        followed: true,
        fullName: 'Cyprian',
        status: 'Looking for seeds',
        location: {city: 'Lodz', country: 'Poland'}
      }
    ])
  }
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <img src={u.photoUrl} alt="user-img" className={s.userPhoto}/>
        </div>
        <div>
          {u.followed
            ? <button onClick={() => {
              props.unFollow(u.id)
            }}>unfollow</button>
            : <button onClick={() => {
              props.follow(u.id)
            }}>follow</button>}
        </div>
      </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;