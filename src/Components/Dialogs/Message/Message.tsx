import React from "react";
import s from './Message.module.css';


type MessagePropsType = {
  id: number
  message: string
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={s.dialog}>
      {props.message}
    </div>
  )
}

export default Message;