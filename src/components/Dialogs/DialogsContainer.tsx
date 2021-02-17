import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: RootStateType) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
  sendMessage: () => {
    dispatch(sendMessageAC())
  },
  updateNewMessageBody: (text: string) => {
    dispatch(updateNewMessageBodyAC(text))
  }
})

export default compose<React.ComponentType>(withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps))(Dialogs);
