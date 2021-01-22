import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
  login: string | null
  isAuth: boolean
  setAuthUserData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);