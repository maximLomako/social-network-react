import React from "react";
import s from './Friends.module.css'
import {FriendsType} from "../../../redux/state";

type FriendsPropsType = {
  state: Array<FriendsType>
}



const Friends = (props: FriendsPropsType) => {
const friendElement = props.state.map(f =>
  <div key={f.id} className={s.friend}>
  <img className={s.friendsIcon} src={f.avatar} alt="icon"/>
  <span className={s.friendsName} >{f.name}</span>
</div>)
  return (
    <div className={s.friends}>
      <h3 className={s.friendsTitle} >Friends</h3>
      <div className={s.friendWrapper}>
        {friendElement}
      </div>

    </div>
  )
}

export default Friends;