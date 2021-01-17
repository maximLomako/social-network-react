import {connect} from "react-redux";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
  UsersType
} from "../../redux/users-reducer";
import {StateType} from "../../redux/store";
import Users from "./Users";

const mapStateToProps = (state: StateType) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage
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
}

})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
