import Link from 'next/link';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  width: 155px;
  overflow: hidden;
  margin: 15px 7px;
  padding: 0 8px 10px;

  .image_link {
    display: block;
    object-fit: contain;
  }
  .cocktail_image {
    display: block;
    width: min(30vw, 160px);
    margin: 0 auto;
    object-fit: contain;
  }

  .cocktail_name {
    margin: 7px 0;
    padding: 0 5px;
    font-size: 14px;
    line-height: 19px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .tag {
    display: inline-block;
    margin: 2px 2px;
    padding: 2px 7px;
    border-radius: 50px;
    font-size: 10px;
    line-height: 14px;
    color: #fff;
  }

  @media (min-width: 810px) {
    width: 250px;

    .cocktail_name {
      font-size: 25px;
      line-height: 30px;
    }
    .tag {
      font-size: 20px;
      line-height: 24px;
      padding: 4px 12px;
    }
  }
`;

interface IProps {
  src: string;
  alt: string;
  href: string;
  name: string;
  tags?: {
    text: string;
    href: string;
    bgColor?: string;
  }[];
  favorite?: boolean;
}

const CocktailCard = ({ src, alt, href, name, tags, favorite }: IProps) => {
  return (
    <CardContainer>
      <Link href={href}>
        <a className='image_link'>
          <img className='cocktail_image' src={src} alt={alt} />
          <p className='cocktail_name'>{name}</p>
        </a>
      </Link>

      {tags?.map((tag, i) => (
        <Link href={tag.href} key={i}>
          <a className='tag' style={{ backgroundColor: tag.bgColor }}>
            {tag.text}
          </a>
        </Link>
      ))}
    </CardContainer>
  );
};

export default CocktailCard;
