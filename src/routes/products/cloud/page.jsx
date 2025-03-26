import React, { useState, useEffect } from "react";
// import { Dimensions } from "react-native-cli";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import { Tips } from '../../login/page'
import chip from "../img/chip.png";
import doc from "../img/doc.png";
import settingIcon from "../img/settingIcon.png";
import computeBanner from '../img/computeBanner.png';
import serveBanner from '../img/serveBanner.png';
import styles from "../index.module.less";
const { Text } = Typography;
import FadeInContainer from '../../../components/common'

import styles2 from "./index.module.less";

import BanBtn from './img/BanBtn.svg'
import CloudPic1 from "./img/CloudPic1.svg";
import CloudPic2 from "./img/CloudPic2.svg";
import cloudBanner from '../img/cloudBanner.png';

import 'animate.css'

const Index = () => {
  const [showTip, setShowTip] = useState(false);
  const [cView, setCView] = useState(0);
  // const { width, height } = Dimensions.get('windows');
  // const containerWidth = width * 0.1;

  useEffect(() => {
    document.title = '专属定制云-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInContainer children={
      <div className={styles.products} id="products">
        <div className={styles.compute}>
          <div className={styles.banner}>
            <img style={{ width: '100%', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={cloudBanner} alt="" />
            <div><a className={styles.btn5} href="/informationFilling?gotopage=info">了解更多</a></div>
          </div>


          <div className={styles2.ClickBtn}>
            <div
              className={cView === 0 ? styles2.ClickBtnItemClick : styles2.ClickBtnItemNoClick}
              onClick={() => setCView(0)}
            >
              传统私有云与公有云
            </div>
            <div
              className={cView === 1 ? styles2.ClickBtnItemClick : styles2.ClickBtnItemNoClick}
              onClick={() => setCView(1)}
            >
              专属定制云
            </div>
          </div>


          <div className={styles.frameworkPicWrapper}>
            {
              cView === 0 &&
              <img src={CloudPic1} alt="" />
              // <div className={styles2.PicAnimate}><img src={CloudPic1} alt="" /></div>
              // <div className="animate__animated animate__fadeIn" style={{ '--animate-duration': '0.5s' }}><img src={CloudPic1} alt="" /></div>
            }
            {
              cView === 1 &&
              <img src={CloudPic2} alt="" />
            }
          </div>


          <div className={styles.cloudWrapper}>
            <div className={styles.btn}>
              <div><a href="/informationFilling?gotopage=info">了解更多</a></div>
            </div>
          </div>


        </div>
      </div>
    } />

  );
};

export default Index;
