import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type OwnProfileContainerPropsType = {
  profile: ProfileUserType | null
  getUserProfile: any
  auth: boolean
}

type PathParamsType = {
  userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId)
  }

  render() {
    if (!this.props.auth) {
      return <Redirect to={'/login'}/>
    }
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  auth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
