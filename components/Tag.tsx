import styled from 'styled-components';

interface StyleProps {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: number;
}

const StyledSpan = styled.span`
  display: inline-block;
  margin: 2px 0 3px 5px;
  border-radius: 50px;
  padding: 4px 8px;
  font-size: ${({ fontSize }: StyleProps) => (fontSize ? fontSize : '10')}px;
  background-color: ${({ backgroundColor }: StyleProps) =>
    backgroundColor ? backgroundColor : '#aeaeae'};
  color: ${({ textColor }: StyleProps) => (textColor ? textColor : '#fff')};
  ${({ borderColor }: StyleProps) =>
    borderColor ? `border: 1px solid ${borderColor}` : ''}
`;

interface IProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  borderColor?: string;
  onClickHandler?: (e: any) => any;
}

const Tag = ({
  text,
  textColor,
  backgroundColor,
  borderColor,
  fontSize,
  onClickHandler,
}: IProps) => {
  return (
    <StyledSpan
      onClick={onClickHandler}
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      fontSize={fontSize}
    >
      {text}
    </StyledSpan>
  );
};

export default Tag;
