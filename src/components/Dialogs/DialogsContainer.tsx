import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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


const AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
