import React from "react";
import s from './Message.module.css';


type MessagePropsType = {
  id: number
  message: string
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={`${props.id % 2 !== 0 ? s.dialog : s.dialogL}`}>
      <p className={s.dialogMessage}>{props.message}</p>
    </div>
  )
}

export default Message;