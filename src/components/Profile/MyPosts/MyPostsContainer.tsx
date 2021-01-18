import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {DialogsActionsTypes} from "../../../redux/dialogs-reducer";

export type DispatchType = (action: DialogsActionsTypes) => void

const mapStateToProps = (state: RootStateType) => ({
  profilePage: state.profilePage
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
  updateNewPostText: (text: string) => {
    if (text) {
      dispatch(updateNewPostTextAC(text));
    }
  },
  addPost: () => {
    dispatch(addPostAC());
  }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

