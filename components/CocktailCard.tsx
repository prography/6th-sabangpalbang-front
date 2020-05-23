import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  width: 30vw;
  max-width: 160px;
  margin: 0px auto 10px;
  overflow: hidden;
  position: relative;
  img {
    width: min(30vw, 160px);
    height: min(37.5vw, 200px);
    object-fit: contain;
  }
  & > a > p {
    padding: 5px;
    font-weight: 600;
  }
`;

const Tag = styled.a`
  display: inline-block;
  margin: 2px 0 3px 5px;
  border-radius: 50px;
  padding: 3px 7px;
  font-size: 10px;
  background-color: ${({
    backgroundColor,
  }: {
    backgroundColor?: string;
    textColor?: string;
  }) => (backgroundColor ? backgroundColor : '#aeaeae')};
  color: ${({ textColor }: { backgroundColor?: string; textColor?: string }) =>
    textColor ? textColor : 'white'};
`;

interface IProps {
  src: string;
  alt: string;
  href: string;
  name: string;
  tags?: {
    text: string;
    href: string;
    textColor?: string;
    backgroundColor?: string;
  }[];
  favorite?: boolean;
}

const CocktailCard = ({ src, alt, href, name, tags, favorite }: IProps) => {
  return (
    <Card>
      <Link href={href}>
        <a>
          <img src={src} alt={alt} />
          <p>{name}</p>
        </a>
      </Link>
      <div>
        {tags?.map((tag, i) => (
          <Link href={tag.href} key={i}>
            <Tag
              backgroundColor={tag.backgroundColor}
              textColor={tag.textColor}
            >
              {tag.text}
            </Tag>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default CocktailCard;
