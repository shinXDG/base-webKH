import { notification } from 'antd'

export const notificationSuccess = (message: string) => {
  notification.open({
    message: message,
    className: 'custom-class-notification',
    style: {
      width: 'auto',
      backgroundColor: '#50C783',
    },
    duration: 1.6,
  })
}

export const notificationError = (message: string) => {
  notification.open({
    message: message,
    className: 'custom-class-notification',
    style: {
      width: 'auto',
      backgroundColor: '#C75050',
    },
    duration: 1.6,
  })
}

export const notificationWarning = (message: string) => {
  notification.open({
    message: message,
    className: 'custom-class-notification',
    style: {
      width: 'auto',
      backgroundColor: '#E8852E',
    },
    duration: 1.6,
  })
}
