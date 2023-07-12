import { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import Notification from '../ui/Notification';
import NotificationContext from '@/helpers/Notificationcontext';
const MainContainer = (props: { children: ReactNode }) => {
  const notificationCtx: any = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <MainContainerWrapper>
      {props.children}
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </MainContainerWrapper>
  );
};

const MainContainerWrapper = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
export default MainContainer;
