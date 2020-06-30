import Link from 'next/link';
import styled, { css } from 'styled-components';

const StyledAnchor = styled.a`
  display: block;
  position: relative;
  width: 280px;
  height: 140px;
  border: 1px solid ${(props: any) => props.color};
  border-radius: 4px;
  background: ${(props: any) => props.bgUrl ? `url(${props.bgUrl})` : "transparent"};
  
  .text {
    margin: 17px;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: ${(props: any) => props.color};
    white-space: pre-line;
  }

  ${(props: any) => props.logoUrl ?
    css`
      &::after {
        position: absolute;
        right: 4px;
        bottom: 4px;
        width: 54px;
        height: 54px;
        background: url(${props.logoUrl});
        content: '';
      }
    `
    : null}
`;

interface IProps {
  bgUrl?: string;
  href: string;
  logoUrl?: string;
  text?: string;
  color: string;
}

const Banner = (props: IProps) => {
  return (
    <Link href={props.href}>
      <StyledAnchor {...props} className='banner swiper-slide'>
        <p className="text">{props.text}</p>
      </StyledAnchor>
    </Link>
  );
};
export default Banner;
