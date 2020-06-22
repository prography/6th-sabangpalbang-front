import styled from 'styled-components';
import Link from 'next/link';

interface StyleProps {
  href: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: number;
}

const StyledAnchor = styled.a`
  display: inline-block;
  margin: 2px 0 3px 5px;
  border-radius: 50px;
  padding: 4px 8px;
  font-weight: bold;
  font-size: ${({ fontSize }: StyleProps) => fontSize}px;
  background-color: ${({ backgroundColor }: StyleProps) => backgroundColor};
  color: ${({ textColor }: StyleProps) => textColor};
  ${({ href, textColor }: StyleProps) =>
    href === '' ? `&:hover {color:${textColor}}` : ''}
  ${({ borderColor }: StyleProps) =>
    borderColor ? `border: 1px solid ${borderColor}` : ''}
`;

interface IProps {
  name: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  borderColor?: string;
  href?: string;
  onClickHandler?: (e: any) => any;
}

const Tag = ({
  name,
  textColor = '#fff',
  backgroundColor = '#aeaeae',
  borderColor,
  fontSize = 10,
  href = '',
  onClickHandler,
}: IProps) => {
  return (
    <Link href={href}>
      <StyledAnchor
        href={href}
        onClick={onClickHandler}
        textColor={textColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        fontSize={fontSize}
      >
        {name}
      </StyledAnchor>
    </Link>
  );
};

export default Tag;
