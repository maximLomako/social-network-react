import React from "react";
import s from './Post.module.css';

type MessagePropsType = {
  message: string
  likeCount: number
}



function Post(props: MessagePropsType) {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/1a/11/13/1a11132fd33123ee4d02e05721eb47d6.png" alt="avatar"/>
      {props.message}
      <div>
        <span>{props.likeCount}</span>
      </div>
    </div>

  )
}

export default Post;
