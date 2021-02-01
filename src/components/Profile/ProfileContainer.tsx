import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


type OwnProfileContainerPropsType = {
  profile: ProfileUserType | null
  setUserProfile: (profile: ProfileUserType | null) => void
}

type PathParamsType = {
  userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    usersAPI.getUserProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
      })
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
