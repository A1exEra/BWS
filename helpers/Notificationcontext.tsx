import { useState, createContext, useEffect, ReactNode } from 'react';

interface NotificationData {
  status: string;
  title: string;
  message: string;
}
interface NotificationContextProps {
  notification: NotificationData | null;
  setNotification: (notificationData: NotificationData | null) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextProps>({
  notification: null,
  setNotification: function (notificationData) {},
  hideNotification: function () {},
});

export const NotificationContextProvider = (props: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );

  useEffect(() => {
    if (notification && notification.status !== 'pending') {
      const timer = setTimeout(() => setNotification(null), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);
  const hideNotification = () => {
    setNotification(null);
  };

  const context = {
    notification,
    setNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};
export default NotificationContext;
