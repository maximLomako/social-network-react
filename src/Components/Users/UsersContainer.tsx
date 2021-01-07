import {connect} from "react-redux";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {StateType} from "../../redux/store";

const mapStateToProps = (state: StateType) => ({
  users: state.usersPage.users
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
  }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
