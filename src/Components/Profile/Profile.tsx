import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




function Profile() {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts />
    </div>
  )
}

export default Profile;
