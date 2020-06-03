import Link from 'next/link';
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  width: 176px;
  margin: 20px 0;

  .image_link {
    display: block;
  }
  .cocktail_image {
    width: 100%;
    vertical-align: top;
  }

  .cocktail_name {
    display: block;
    margin: 15px 0;
    padding: 0 12px;
    font-size: 18px;
    line-height: 26px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .tag_list {
    padding: 0 12px 12px;
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
  isFavorite?: boolean;
}

const CocktailCard = ({ src, alt, href, name, tags, isFavorite }: IProps) => {
  return (
    <CardContainer>
      <Link href={href}>
        <a className='image_link'>
          <img className='cocktail_image' src={src} alt={alt} />
          <strong className='cocktail_name'>{name}</strong>
        </a>
      </Link>

      <div className='tag_list'>
        {tags?.map((tag, i) => (
          <Link href={tag.href} key={i}>
            <a className='tag' style={{ backgroundColor: tag.bgColor }}>
              {tag.text}
            </a>
          </Link>
        ))}
      </div>
    </CardContainer>
  );
};

export default CocktailCard;
