import { styled } from 'styled-components';
import image from '@/public/images/twoGuys.jpg';
import MainButton from '../shared/MainButton';
import Image from 'next/image';
const WhoWeAre = () => {
  return (
    <StyledWhoWeAre>
      <div className="text_container">
        <h3>WHO WE ARE</h3>
        <h4>
          Best Way is about endurance: products that last, styles that last, and
          as a family-owned and operated business since 1965
        </h4>
        <p>
          Best Way Stone Limited provides a transferable lifetime guarantee on
          the structural integrity of it's Interlocking Paving Stone products
          for residential use. All Best Way Stone® products are manufactured to
          meet and exceed their respective North American standards set forth by
          both the CSA and ASTM. This guarantee provides assurances to the
          individual who has chosen Best Way Stone® as their source for
          Interlocking Paving Stones.
        </p>
        <MainButton className="btn" label="Read More"></MainButton>
      </div>
      <div className="img_container">
        <Image
          src={image}
          width={560}
          height={369}
          layout="responsive"
          objectFit="cover"
          alt={'Image of some guys'}
        />
      </div>
    </StyledWhoWeAre>
  );
};

const StyledWhoWeAre = styled.div`
  display: flex;
  flex-direction: row;
  gap: 128px;
  padding: 100px 64px;
  .text_container {
    max-width: 624px;
    h3 {
      ${({ theme }) => theme.mixins.primaryComponentTitle};
      margin-bottom: 40px;
    }
    h4 {
      ${({ theme }) => theme.mixins.primaryProductPrice};
      color: ${({ theme }) => theme.colors.black};
      margin-bottom: 20px;
    }
    p {
      ${({ theme }) => theme.mixins.primaryFontRegular300};
    }
    .btn {
      margin-top: 32px;
      p {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .img_container {
    width: 560px;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
    .img_container {
      width: 100%;
    }
    .text_container {
      max-width: 100%;
    }
  }
`;
export default WhoWeAre;
