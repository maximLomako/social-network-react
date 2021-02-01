import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileUserType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


type ProfileInfoPropsType = {
  profile: ProfileUserType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/5c/b7/13/5cb71340d6a6657184d6d2017a5d54ca.jpg" alt="backgroudn"/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile?.photos.large ? props.profile.photos.large : 'https://im0-tub-by.yandex.net/i?id=bbd5dc7448b6d0b372d78656394d35a4&n=13'}/>
        ava + descr
      </div>
    </div>
  )
}
export default ProfileInfo;
