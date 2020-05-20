import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
  display: block;
  width: 85vw;
  height: 34.53125vw;
  border-radius: 15px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  margin: 20px 0px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
  }
`;

interface IProps {
  alt: string;
  src: string;
  href: string;
}

const Banner = ({ src, alt, href }: IProps) => {
  return (
    <Link href={href}>
      <StyledLink className="swiper-slide">
        <img src={src} alt={alt} />
      </StyledLink>
    </Link>
  );
};
export default Banner;
