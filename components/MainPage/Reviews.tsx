import { styled } from 'styled-components';
import img from '@/public/images/Bakery.jpg';
import Button from '../shared/Button_Dummy';
import arrowIcon from '@/public/icons/ArrowIcon.svg';
import Image from 'next/image';
import { useState } from 'react';
const reviews: { name: string; description: string; job: string }[] = [
  {
    name: 'Alex Regelman',
    description:
      'We have been a customer of BWS for 10 years and we are very happy with their services. Our property always looks bright, colourful, and clean. BWS has great customer service and pricing. It has been a pleasure working with them over the years!',
    job: 'Co-founder, Colabrio',
  },
  {
    name: 'Emma Smith',
    description:
      'BWS provides exceptional services that have exceeded our expectations. The team is professional, efficient, and always goes the extra mile. Our property has never looked better. Highly recommended!',
    job: 'CEO, Smith Enterprises',
  },
  {
    name: 'John Anderson',
    description:
      'I have been a loyal customer of BWS for over 5 years, and I couldnt be happier with their services. They consistently deliver outstanding results, and their attention to detail is remarkable. BWS is the best in the business!',
    job: 'Marketing Director, Anderson Corp',
  },
  {
    name: 'Sarah Thompson',
    description:
      'Choosing BWS was one of the best decisions we made for our property. Their team is reliable, trustworthy, and always completes the job to perfection. Our property stands out in the neighborhood thanks to their excellent services.',
    job: 'Property Manager, Thompson Properties',
  },
];
const Reviews = () => {
  const [counter, setCounter] = useState<number>(0);
  const leftClickHandler = (): void => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? reviews.length - 1 : prevCounter - 1
    );
  };

  const rightClickHandler = (): void => {
    setCounter((prevCounter) =>
      prevCounter === reviews.length - 1 ? 0 : prevCounter + 1
    );
  };
  return (
    <StyledReviews>
      <div className="card_container">
        <div className="text_container">
          <h3>{reviews[counter].description}</h3>
          <h4>
            {reviews[counter].name}
            <br /> {reviews[counter].job}
          </h4>

          <div className="btn_container">
            <Button onClick={leftClickHandler}>
              <Image src={arrowIcon} alt="arrow-icon" />
            </Button>
            <Button onClick={rightClickHandler}>
              <Image src={arrowIcon} alt="arrow-icon" />
            </Button>
          </div>
        </div>
      </div>
    </StyledReviews>
  );
};

const StyledReviews = styled.div`
  height: 569px;
  background-image: url(${img.src});
  padding: 100px 64px;
  .card_container {
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 560px;
    height: 369px;
    padding: 36px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  }
  .text_container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.text20};
      color: ${({ theme }) => theme.colors.whitePrimary};
      transition: opacity 0.3s ease;
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.text20};
      color: ${({ theme }) => theme.colors.primary};
      transition: opacity 0.3s ease;
    }
    .btn_container {
      margin-left: 75%;
      width: 56px;
      height: 56px;
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      button:nth-child(1) {
        transition: transform 0.3s ease;
      }
      button:nth-child(2) {
        transition: transform 0.3s ease;
        transform: rotate(180deg);
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    .card_container {
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
`;
export default Reviews;
