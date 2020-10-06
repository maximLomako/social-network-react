import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/5c/b7/13/5cb71340d6a6657184d6d2017a5d54ca.jpg" alt="backgroudn"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + descr
      </div>
    </div>
  )
}
export default ProfileInfo;
