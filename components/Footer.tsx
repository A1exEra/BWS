import { styled } from 'styled-components';
import Link from 'next/link';
import SocialMediaIcons from './shared/SocialMediaIcons';
import { useRouter } from 'next/router';
interface StyledProps {
  pathname: string;
}
const Footer = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <StyledFooter pathname={pathname}>
      <ul className="left_container">
        <li>
          <Link href="/">
            <h3>BWS</h3>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>DESIGN GALLERY</p>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <p>PRODUCTS</p>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <p>RESOURCES</p>
          </Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/contact">CONTACTS</Link>
        </li>
      </ul>
      <SocialMediaIcons />
    </StyledFooter>
  );
};

const StyledFooter = styled.div<StyledProps>`
  padding: 26px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
  background: ${({ pathname }) =>
    pathname === '/'
      ? ({ theme }) => theme.colors.secondary
      : ({ theme }) => theme.colors.whiteSecondary};
  .left_container {
    display: flex;
    align-items: center;
    gap: 36px;
    a {
      ${({ theme }) => theme.mixins.secondarySidebar}
    }
    h3 {
      font-size: 32px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-weight: 500;
      letter-spacing: 10px;
      color: ${({ pathname }) =>
        pathname === '/'
          ? ({ theme }) => theme.colors.whitePrimary
          : ({ theme }) => theme.colors.secondary};
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    .left_container {
      flex-direction: column;
    }
  }
`;
export default Footer;
