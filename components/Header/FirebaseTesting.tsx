import { styled } from 'styled-components';
import { handleSubmit } from '@/helpers/api-util';
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

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({
      email: '',
      name: '',
      message: '',
    });
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
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
          label="Submit"
          type="submit"
          className="btn"
          backgroundColor="black"></MainButton>
      </form>
    </div>
  );
};
const Styled = styled.form`
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
    color: ${({ theme }) => theme.colors.whiteSecondary};
    border-radius: 4px;
    padding: 16px;
    &:active {
      border: 2px solid ${({ theme }) => theme.colors.whitePrimary};
      color: ${({ theme }) => theme.colors.third};
    }
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.whiteSecondary};
    opacity: 0.8;
  }
  textarea {
    resize: none;
    height: 132px;
    max-width: 100%;
    background: none;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.whiteSecondary};
    padding: 16px;
    &:active {
      border: 2px solid ${({ theme }) => theme.colors.whitePrimary};
      color: ${({ theme }) => theme.colors.whiteSecondary};
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
export default FirebaseTesting;
