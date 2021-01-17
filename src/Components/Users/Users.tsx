import React from "react";
import userPhoto from "../../assets/images/user.webp";
import s from "./users.module.css";
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsers: (users: UsersType) => void
  follow: (userID: number) => void
  unFollow: (userID: number) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map(p => <span
            key={p}
            className={this.props.currentPage === p ? s.selectedPage : ''}
            onClick={() => {
              this.onPageChanged(p)
            }}>{p}</span>)}
        </div>
        {this.props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <img src={u.photos.small ? u.photos.small : userPhoto} alt="user-img" className={s.userPhoto}/>
        </div>
        <div>
          {u.followed
            ? <button onClick={() => {
              this.props.unFollow(u.id)
            }}>unfollow</button>
            : <button onClick={() => {
              this.props.follow(u.id)
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
}

export default Users;