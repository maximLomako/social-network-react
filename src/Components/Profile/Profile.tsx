import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src="https://i.pinimg.com/originals/5c/b7/13/5cb71340d6a6657184d6d2017a5d54ca.jpg" alt="backgroudn"/>
      </div>
      <div>
        ava + descr
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
