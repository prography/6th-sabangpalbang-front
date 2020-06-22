import Swiper from 'react-id-swiper';

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

const Carousel = ({ ItemComponent, infos }: IProps) => {
  return infos ? (
    <Swiper {...params}>
      {infos.map((info, i) => (
        <ItemComponent key={i} {...info} />
      ))}
    </Swiper>
  ) : null;
};
export default WithLoading(Carousel);
