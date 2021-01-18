import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";


type ProfileContainerPropsType = {
  profile: ProfileUserType | null
  setUserProfile: (profile: ProfileUserType | null) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileContainer);
