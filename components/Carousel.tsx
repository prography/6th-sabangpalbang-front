import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import WithLoading from './WithLoading';

interface IProps {
  ItemComponent: (props: any) => JSX.Element;
  infos: {
    src: string;
    alt: string;
    href: string;
  }[];
}

const params = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
};

const StyledCarousel = styled.div`
  padding: 35px 0;
  background-color: #fff;
  
  .inner_container {
    max-width: 968px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const Carousel = ({ ItemComponent, infos }: IProps) => {
  return infos ? (
    <StyledCarousel>
      <div className="inner_container">
        <Swiper {...params}>
          {infos.map((info, i) => (
            <ItemComponent key={i} {...info} />
          ))}
        </Swiper>
      </div>
    </StyledCarousel>
  ) : null;
};
export default WithLoading(Carousel);
