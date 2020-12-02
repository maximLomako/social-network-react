import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;
