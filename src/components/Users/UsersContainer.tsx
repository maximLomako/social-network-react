import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unFollow, UsersType} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type UsersPropsType = {
  users: UsersType
  pageSize: number
  totalUsersCount: number
  setCurrentPage: (currentPage: number) => void
  followingInProgress: [] | Array<number>
  isFetching: boolean
  currentPage: number
  follow: any
  unFollow: any
  getUsers: any
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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

export default compose<React.ComponentType>(connect(mapStateToProps,
  {
    follow, unFollow,
    setCurrentPage, getUsers
  }), withAuthRedirect)(UsersContainer)