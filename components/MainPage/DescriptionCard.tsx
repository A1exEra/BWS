import { styled } from 'styled-components';
import Button from '../shared/Button_Dummy';
import ArrowRight from '@/public/icons/arrow-right.svg';
import Image from 'next/image';
const DescriptionCard = (props: {
  data: { title: string; description: string; about: string };
}) => {
  return (
    <StyledDescription>
      <h4>{props.data.title}</h4>
      <h3>{props.data.description}</h3>
      <p>{props.data.about}</p>
      <Button>
        <Image src={ArrowRight} alt="arrow-icon" />
      </Button>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  width: 480px;
  height: 480px;
  padding: 70px 64px;
  background-color: ${({ theme }) => theme.colors.whitePrimary};
  h4 {
    ${({ theme }) => theme.mixins.primaryFontRegular300}
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    margin: 50px 0 16px 0;
    font-size: ${({ theme }) => theme.fontSizes.text20};
    // color: ${({ theme }) => theme.colors.black};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.textXbase};
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 62px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    h4 {
      color: ${({ theme }) => theme.colors.whitePrimary};
    }
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    width: 320px;
    height: auto;
    padding: 30px 20px;
  }
`;
export default DescriptionCard;
