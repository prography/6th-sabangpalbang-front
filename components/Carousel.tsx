import Swiper from 'react-id-swiper';

interface IProps {
  ItemComponent: (props: any) => JSX.Element;
  Infos: {
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

const Carousel = ({ ItemComponent, Infos }: IProps) => {
  return (
    <Swiper {...params}>
      {Infos.map((info, i) => (
        <ItemComponent key={i} {...info} />
      ))}
    </Swiper>
  );
};
export default Carousel;
