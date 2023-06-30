import { styled } from 'styled-components';
import Button from '../shared/Button_Dummy';
import ArrowRight from '../icons/ArrowRightGrey.svg';
import Image from 'next/image';
const CatalogueCard = (props: {
  data: { title: string; description: string; image: string };
}) => {
  const { data } = props;
  return (
    <StyledCard>
      <div className="imageContainer">
        <Image
          src={`${data.image}`}
          alt={data.title}
          width={640}
          height={360}
          layout="responsive"
          objectFit="cover"
        />
        {/* <img src={data.image} alt={data.title} /> */}
      </div>
      <div className="container">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <Button className="button">
          <Image src={ArrowRight} alt="arrow-icon" />
        </Button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  max-width: 640px;
  max-height: 652px;
  background-color: ${({ theme }) => theme.colors.whitePrimary};
  .imageContainer {
    width: 100%;
    max-height: 360px;
    img {
      max-width: 100%;
      max-height: 360px;
      //   object-fit: contain;
    }
  }
  .container {
    padding: 40px;
    h4 {
      ${({ theme }) => theme.mixins.primaryFontRegular300}
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 30px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.textXbase};
      color: ${({ theme }) => theme.colors.grey};
      margin-bottom: 40px;
    }
  }
  .button {
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    .button {
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    .container {
      padding: 40px 10px;
    }
  }
`;
export default CatalogueCard;
