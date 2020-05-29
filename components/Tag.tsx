import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  margin: 2px 0 3px 5px;
  border-radius: 50px;
  padding: 4px 8px;
  font-size: ${({
    fontSize,
  }: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fontSize?: number;
  }) => (fontSize ? fontSize : '10')}px;
  background-color: ${({
    backgroundColor,
  }: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fontSize?: number;
  }) => (backgroundColor ? backgroundColor : '#aeaeae')};
  color: ${({
    textColor,
  }: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fontSize?: number;
  }) => (textColor ? textColor : 'white')};
  ${({
    borderColor,
  }: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fontSize?: number;
  }) => (borderColor ? `border: 1px solid ${borderColor}` : '')}
`;

interface IProps {
  text: string;
  href: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  borderColor?: string;
}

const Tag = ({
  text,
  href,
  textColor,
  backgroundColor,
  borderColor,
  fontSize,
}: IProps) => {
  return (
    <Link href={href}>
      <StyledLink
        textColor={textColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        fontSize={fontSize}
      >
        {text}
      </StyledLink>
    </Link>
  );
};

export default Tag;
