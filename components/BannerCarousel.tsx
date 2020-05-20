import Swiper from 'react-id-swiper';

interface IProps {
  BannerComponent: (props: any) => JSX.Element;
  BannerInfos: {
    src: string;
    alt: string;
    href: string;
  }[];
}

const BannerCarousel = ({ BannerComponent, BannerInfos }: IProps) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
  };
  return (
    <Swiper {...params}>
      {BannerInfos.map((info, i) => (
        <BannerComponent key={i} {...info} />
      ))}
    </Swiper>
  );
};
export default BannerCarousel;
