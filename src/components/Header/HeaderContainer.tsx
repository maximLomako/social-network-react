import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";
import {ThunkType} from "../../redux/users-reducer";

type HeaderContainerPropsType = {
  login: string | null
  isAuth: boolean
  getAuthUserData: any
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state: RootStateType) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);