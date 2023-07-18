import { styled } from 'styled-components';
import NotificationContext from '@/helpers/Notificationcontext';
import { useState, useContext } from 'react';
import MainButton from '../shared/MainButton';
const FirebaseTesting = () => {
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

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notificationCtx.setNotification({
      title: 'Submitting...',
      message: 'Getting ready to submit your feedback...',
      status: 'pending',
    });
    try {
      const response = await fetch('/api/feedback', {
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
    <StyledForm onSubmit={onHandleSubmit}>
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
        onChange={handleInputChange}></textarea>
      <MainButton
        label="Send"
        type="submit"
        className="btn"
        backgroundColor="#6ea6dd"></MainButton>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  padding: 8px;
  .btn {
    width: 100%;
    p {
      color: ${({ theme }) => theme.colors.third};
    }
  }
  input {
    height: 48px;
    width: 100%;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.third};
    border-radius: 4px;
    padding: 16px;
    &:active {
      border: 2px solid ${({ theme }) => theme.colors.whitePrimary};
      color: ${({ theme }) => theme.colors.third};
    }
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.third};
    opacity: 0.8;
  }
  textarea {
    resize: none;
    height: 132px;
    max-width: 100%;
    background: none;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.third};
    padding: 16px;
    &:active {
      border: 2px solid ${({ theme }) => theme.colors.whitePrimary};
      color: ${({ theme }) => theme.colors.third};
    }
  }
`;
export default FirebaseTesting;
