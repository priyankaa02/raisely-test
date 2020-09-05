import React from 'react'
import Notification from 'rc-notification'
import 'rc-notification/assets/index.css'

let notification = null
if (typeof window !== 'undefined') {
  Notification.newInstance({}, (n) => (notification = n))
}

export const notifyFn = ({ text, style }) => {
  if (typeof window === 'undefined') {
    return
  }
  notification.notice({
    style: style || {
      color: '#ffff',
      background: '#2D2D2D',
      boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.25)',
      borderRadius: '5px',
      transform: 'translateX(-50%)',
      padding: '10px 23px',
      fontFamily: 'Avenir',
      fontWeight: 'normal',
      position: 'fixed',
      bottom: '0px',
      marginBottom: '100px',
      fontSize: '14px',
      textAlign: 'center',
    },
    content: <span>{text}</span>,
    duration: 4,
    closable: true,
  })
}
