import { Carousel } from 'antd';
import banner1 from '../../static/banner1.png';
import banner2 from '../../static/banner2.png';
import banner3 from '../../static/banner3.png';
import './index.module.less'
const CPOCarousel = () => {
  return (
    <Carousel
      autoplay
      className='animate__animated  animate__fadeIn'
    >
      <img style={{ width: '100%', height: 'auto', aspectratio: 'auto 2160/840' }} aria-labelledby="banner" src={banner1} />
      <img style={{ width: '100%', height: 'auto', aspectRatio: 'auto 2160/840' }} aria-labelledby="banner" src={banner2} />
      <img style={{ width: '100%', height: 'auto', aspectRatio: 'auto 2160/840' }} aria-labelledby="banner" src={banner3} />
    </Carousel>
  );
};

export default CPOCarousel;
