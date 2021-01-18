import {connect} from "react-redux";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import s from './users.module.css'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unFollowAC,
  UsersType
} from "../../redux/users-reducer";
import {StateType} from "../../redux/store";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

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
  toggleIsFetching: (isFetching: boolean) => void
  isFetching: boolean
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.toggleIsFetching(false);
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.toggleIsFetching(false);
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader /> : null}
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          onPageChanged={this.onPageChanged}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
        />
      </>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
  follow: (userID: number) => {
    dispatch(followAC(userID))
  },
  unFollow: (userID: number) => {
    dispatch(unFollowAC(userID))
  },
  setUsers: (users: UsersType) => {
    dispatch(setUsersAC(users))
  },
  setCurrentPage: (currentPage: number) => {
    dispatch(setCurrentPageAC(currentPage))
  },
  setTotalUsersCount: (totalCount: number) => {
    dispatch(setTotalUsersCountAC(totalCount))
  },
  toggleIsFetching: (isFetching: boolean) => {
    dispatch(toggleIsFetchingAC(isFetching))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
