import React, { useState } from "react";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import { Tips } from '../../login/page'
import chip from "../img/chip.png";
import doc from "../img/doc.png";
import settingIcon from "../img/settingIcon.png";
import frameworkproductPic from "./img/frameworkproductPic.svg";
import frameworkPic from "../img/frameworkPic.svg";
import computeBanner from '../img/computeBanner.png';
import serveBanner from '../img/serveBanner.png';
import styles from "../index.module.less";
const { Text } = Typography;
import FadeInContainer from '../../../components/common'

import styles2 from "./index.module.less";

import BanBtn from './img/BanBtn.svg';

import cardBg1 from './img/cardbg1.svg';
import cardBg2 from './img/cardbg2.svg';
import cardBg3 from './img/cardbg3.svg';
import cardBg4 from './img/cardbg4.svg';
import cardBg5 from './img/cardbg5.svg';
import cardBg6 from './img/cardbg6.svg';


const Index = () => {
  const [showTip, setShowTip] = useState(false);
  const [cView, setCView] = useState(0);
  return (
    <FadeInContainer children={
      <div className={styles.products} id="products">
        <div className={styles.compute}>
          <div className={styles.banner}>
            <img style={{ width: '100%', height: 'auto', objectFit: 'contain', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={computeBanner} alt="" />
            {/* <img style={{ width: '20%', left: '5%', transform: 'translate(0%,-140%)', aspectRatio: 'auto 335/97', position: 'absolute', zIndex: 3 }} src={BanBtn} alt="" /> */}
            <div><a className={styles.btn1} href="http://8.134.32.42:20000/overview">立即使用</a></div>
            <div><a className={styles.btn2} href="/informationFilling">了解更多</a></div>
          </div>



          {/* <div className={styles.frameworkTitle}>
            技术架构图
          </div> */}


          <div className={styles2.ClickBtn}>
            <Button
              className={styles2.ClickBtnItem}
              onClick={() => setCView(0)}
            >
              产品优势
            </Button>
            <Button
              className={styles2.ClickBtnItem}
              onClick={() => setCView(1)}
            >
              技术架构
            </Button>
          </div>


          <div className={styles.frameworkPicWrapper}>
            {
              cView === 0 &&
              <div>
                <img src={frameworkproductPic} alt="" />
                <FadeInContainer
                  children={
                    <div className={styles2.advantageWrapper}>
                      <div
                        className={styles2.myCardWrapper}
                      >
                        <img src={cardBg1} alt="" />
                      </div>
                      <div
                        className={styles2.myCardWrapper}
                      >
                        <img src={cardBg2} alt="" />
                      </div>
                      <div
                        className={styles2.myCardWrapper}
                      >
                        <img src={cardBg3} alt="" />
                      </div>
                    </div>
                  }
                />
                <FadeInContainer
                  children={
                    <div className={styles2.advantageWrapper}>
                      <div
                        className={styles2.myCardWrapper2}
                      >
                        <img src={cardBg4} alt="" />
                      </div>
                      <div
                        className={styles2.myCardWrapper2}
                      >
                        <img src={cardBg5} alt="" />
                      </div>
                      <div
                        className={styles2.myCardWrapper2}
                      >
                        <img src={cardBg6} alt="" />
                      </div>
                    </div>
                  }
                />
              </div>
            }
            {
              cView === 1 &&
              <img src={frameworkPic} alt="" />
            }

          </div>


          <div className={styles.consultWrapper}>
            <div className={styles.btn}>
              <div><a href="http://8.134.32.42:20000/overview">立即使用  →</a></div>
              {/* <div style={{ borderRadus: '0px', transform: 'translate(160%,-60%)' }}><a href="/informationFilling">咨询更多</a></div> */}
            </div>
            <div><a className={styles.btn2} href="/informationFilling">了解更多</a></div>
          </div>


        </div>
      </div>
    } />

  );
};

export default Index;
