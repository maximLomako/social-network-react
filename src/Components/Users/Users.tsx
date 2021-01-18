import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.webp";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
  users: UsersType
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  follow: (userID: number) => void
  unFollow: (userID: number) => void

}

const Users: React.FC<UsersPropsType> = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(p => <span
          key={p}
          className={props.currentPage === p ? s.selectedPage : ''}
          onClick={() => {
            props.onPageChanged(p)
          }}>{p}</span>)}
      </div>
      {props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <NavLink to={`/profile/${u.id}`}>
          <img src={u.photos.small ? u.photos.small : userPhoto} alt="user-img" className={s.userPhoto}/>
          </NavLink>
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
    </div>)
}

export default Users;