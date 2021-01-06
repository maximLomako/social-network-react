import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";

const mapStateToProps = (state: StateType) => ({
  dialogsPage: state.dialogsPage
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
  sendMessage: () => {
    dispatch(sendMessageAC())
  },
  updateNewMessageBody: (text: string) => {
    dispatch(updateNewMessageBodyAC(text))
  }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
