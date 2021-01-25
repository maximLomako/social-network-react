import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowingProgress,
  unFollow,
  UsersType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";
import {getUsers} from "../../api/api";

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
  toggleIsFollowingProgress: (isFetching:boolean, userId: number) => void
  followingInProgress: [] | Array<number>
  isFetching: boolean
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.toggleIsFetching(false);
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
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
          followingInProgress={this.props.followingInProgress}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: RootStateType) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
})


export default connect(mapStateToProps, {
  follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress
})(UsersContainer);
