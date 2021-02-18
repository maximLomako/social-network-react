import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileUserType, updateStatus} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type OwnProfileContainerPropsType = {
  profile: ProfileUserType | null
  getUserProfile: any
  getStatus: any
  updateStatus: any
  status: string
}

type PathParamsType = {
  userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2'
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
)(ProfileContainer);