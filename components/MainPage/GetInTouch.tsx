import { styled } from 'styled-components';
import MainButton from '../shared/MainButton';
import NotificationContext from '@/helpers/Notificationcontext';
import { useState, useContext } from 'react';
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const notificationCtx = useContext(NotificationContext);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notificationCtx.setNotification({
      title: 'Submitting...',
      message: 'Getting ready to submit your feedback...',
      status: 'pending',
    });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        notificationCtx.setNotification({
          title: 'Error',
          message: 'Error sending to Database...',
          status: 'error',
        });
        return;
      }
      const data = await response.json();
      notificationCtx.setNotification({
        title: 'Success!',
        message: 'Successfully submitted your feedback!',
        status: 'success',
      });
      setFormData({
        email: '',
        name: '',
        message: '',
      });
    } catch (error: any) {
      notificationCtx.setNotification({
        title: 'Error!',
        message: error.message || 'something went wrong...',
        status: 'error',
      });
    }
  };
  return (
    <Styled>
      <div className="text_container">
        <div className="text_container_top">
          <h4>CONTACTS</h4>
          <h2>Get In Touch</h2>
        </div>
        <div className="text_container_bottom">
          <a href="mailto:info@mail.com">
            <p>info@mail.com</p>
          </a>
          <p>8821 Weston Rd. Woodbridge, ON L4L 0K9</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <MainButton
          label="Submit"
          type="submit"
          className="btn"
          backgroundColor="#fff"
        ></MainButton>
      </form>
    </Styled>
  );
};

const Styled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  padding: 100px 177px;
  justify-content: space-between;
  .text_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      ${({ theme }) => theme.mixins.primaryComponentTitle}
      color: ${({ theme }) => theme.colors.grey};
    }
    h2 {
      ${({ theme }) => theme.mixins.productTitle46}
      color: ${({ theme }) => theme.colors.whitePrimary};
    }
    p {
      ${({ theme }) => theme.mixins.primaryFontRegular300}
    }
    .text_container_top {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .text_container_bottom {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 528px;
    gap: 14px;
    .btn {
      p {
        color: black;
      }
    }
    input {
      height: 48px;
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.grey};
      padding: 16px;
      &:active {
        border: 2px solid ${({ theme }) => theme.colors.whitePrimary};
        color: ${({ theme }) => theme.colors.whiteSecondary};
      }
    }
    textarea {
      height: 132px;
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.grey};
      padding: 16px;
      &:active {
        border: 2px solid ${({ theme }) => theme.colors.whitePrimary};
        color: ${({ theme }) => theme.colors.whiteSecondary};
      }
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 36px;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 100px 64px;
    form {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
export default GetInTouch;
