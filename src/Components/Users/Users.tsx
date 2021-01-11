import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.webp'

type UsersPropsType = {
  users: UsersType
  setUsers: (users: UsersType) => void
  follow: (userID: number) => void
  unFollow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    });
  }
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <img src={u.photos.small ? u.photos.small : userPhoto} alt="user-img" className={s.userPhoto}/>
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;