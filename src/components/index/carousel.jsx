import { Carousel } from 'antd';
import banner1 from '../../static/banner1.png';
import banner2 from '../../static/banner2.png';
import banner3 from '../../static/banner3.png';

import banner4 from './ServerCard/img/banner.png';

import './index.module.less'

import styles from './index.module.less'

const CPOCarousel = () => {
  return (
    <Carousel
      autoplay
      className='animate__animated  animate__fadeIn'
      draggable="true"
    >
      <img style={{ width: '100%', height: 'auto', aspectratio: 'auto 2160/840' }} aria-labelledby="banner" src={banner1} />
      <img style={{ width: '100%', height: 'auto', aspectRatio: 'auto 2160/840' }} aria-labelledby="banner" src={banner2} />
      <img style={{ width: '100%', height: 'auto', aspectRatio: 'auto 2160/840' }} aria-labelledby="banner" src={banner3} />


      {/* <div className={styles.banner}>
        <img style={{ width: '100%', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={banner4} alt="" />
        <div><a className={styles.btn1} href="http://8.134.32.42:20000/cloud">立即体验</a></div>
      </div> */}

    </Carousel>
  );
};

export default CPOCarousel;
