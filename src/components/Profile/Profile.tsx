import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type ProfilePropsType = {
  profile: ProfileUserType | null
  updateStatus: any
  status: string
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
