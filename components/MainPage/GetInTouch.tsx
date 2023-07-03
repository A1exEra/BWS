import { styled } from 'styled-components';
import MainButton from '../shared/MainButton';
import { useState } from 'react';
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
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
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}></textarea>
        <MainButton
          label="Submit"
          type="submit"
          className="btn"
          backgroundColor="#fff"></MainButton>
      </form>
    </Styled>
  );
};

const Styled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  padding: 100px 177px;
  justify-content: space-between;
  // height: 530px;
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
