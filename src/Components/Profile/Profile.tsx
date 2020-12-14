import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {CombinedState, Store} from "redux";


type ProfilePropsType = {
  store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}
      />
    </div>
  )
}

export default Profile;
