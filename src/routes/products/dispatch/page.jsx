import React, { useState, useEffect } from "react";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import chip from "../img/chip.png";
import doc from "../img/doc.png";
import settingIcon from "../img/settingIcon.png";
import frameworkproductPic from "./img/frameworkproductPic.png";
import frameworkPic from "../img/frameworkPic.svg";
import computeBanner from '../img/computeBanner.png';
import serveBanner from '../img/serveBanner.png';
import styles from "../index.module.less";
const { Text } = Typography;
import FadeInContainer from '../../../components/common'

import styles2 from "./index.module.less";

import cardBg1 from './img/cardbg1.svg';
import cardBg2 from './img/cardbg2.svg';
import cardBg3 from './img/cardbg3.svg';
import cardBg4 from './img/cardbg4.svg';
import cardBg5 from './img/cardbg5.svg';
import cardBg6 from './img/cardbg6.svg';

import { cpo_address } from "../../../utils/address";


const Index = () => {
  const [showTip, setShowTip] = useState(false);
  const [cView, setCView] = useState(0);

  useEffect(() => {
    document.title = '算力调度平台-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInContainer children={
      <div className={styles.products} id="products">
        <div className={styles.compute}>
          <div className={styles.banner}>
            <img style={{ width: '100%', height: 'auto', objectFit: 'contain', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={computeBanner} alt="" />
            <div><a className={styles.btn1} href={`${cpo_address}/overview`}>立即使用</a></div>
            <div><a className={styles.btn2} href="/informationFilling?gotopage=info">了解更多</a></div>
          </div>



          {/* <div className={styles.frameworkTitle}>
            技术架构图
          </div> */}



          <div className={styles2.ClickBtn}>
            <div
              className={cView === 0 ? styles2.ClickBtnItemClick : styles2.ClickBtnItemNoClick}
              onClick={() => setCView(0)}
            >
              产品优势
            </div>
            <div
              className={cView === 1 ? styles2.ClickBtnItemClick : styles2.ClickBtnItemNoClick}
              onClick={() => setCView(1)}
            >
              技术架构
            </div>
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
              // <div className={styles2.frameworkPic}>

              // </div>
              <img style={{ height: '50vw' }} src={frameworkPic} alt="" />
            }

          </div>


          <div className={styles.consultWrapper}>
            <div className={styles.btn}>
              <div><a href={`${cpo_address}/overview`}>立即使用  →</a></div>
            </div>
            <div><a className={styles.btn2} href="/informationFilling?gotopage=info">了解更多</a></div>
          </div>


        </div>
      </div>
    } />

  );
};

export default Index;
