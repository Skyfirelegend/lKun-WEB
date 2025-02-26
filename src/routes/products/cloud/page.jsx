import React, { useState } from "react";
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


const Index = () => {
  const [showTip, setShowTip] = useState(false);
  const [cView, setCView] = useState(0);
  // const { width, height } = Dimensions.get('windows');
  // const containerWidth = width * 0.1;
  return (
    <FadeInContainer children={
      <div className={styles.products} id="products">
        <div className={styles.compute}>
          <div className={styles.banner}>
            <img style={{ width: '100%', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={cloudBanner} alt="" />
            <div><a className={styles.btn5} href="/informationFilling">了解更多</a></div>
            {/* <img style={{ width: '20%', left: '5%', transform: 'translate(-25%,-115%)', aspectRatio: 'auto 335/97', position: 'absolute', zIndex: 3 }} src={BanBtn} alt="" /> */}
          </div>


          {/* <div className={styles.frameworkTitle}>
            技术架构图
          </div> */}


          <div className={styles2.ClickBtn}>
            <Button
              className={styles2.ClickBtnItem}
              onClick={() => setCView(0)}
            >
              传统私有云与公有云
            </Button>
            <Button
              className={styles2.ClickBtnItem}
              onClick={() => setCView(1)}
            >
              专属定制云
            </Button>
          </div>


          <div className={styles.frameworkPicWrapper}>
            {
              cView === 0 &&
              <img src={CloudPic1} alt="" />
            }
            {
              cView === 1 &&
              <img src={CloudPic2} alt="" />
            }
          </div>


          <div className={styles.cloudWrapper}>
            <div className={styles.btn}>
              <div><a href="/informationFilling">了解更多</a></div>
            </div>
          </div>


        </div>
      </div>
    } />

  );
};

export default Index;
