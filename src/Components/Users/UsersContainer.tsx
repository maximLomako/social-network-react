import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollow,
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
          ? <Preloader/> : null}
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


export default connect(mapStateToProps, {
  follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
