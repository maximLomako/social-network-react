import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type OwnProfileContainerPropsType = {
  profile: ProfileUserType | null
  getUserProfile: any
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
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {getUserProfile})
)(ProfileContainer);