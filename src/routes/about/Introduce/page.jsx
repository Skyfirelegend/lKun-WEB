import React, { useState, useEffect } from "react";
import { Button } from "antd";
import introduceBanner from './img/introduceBanner.png';
import introduceBannerTwo from './img/introduceBannerTwo.png'
import aboutBanner from './img/aboutBanner.png'
import styles from './index.module.less';
import FadeInContainer from '../../../components/common';
import introducePic3_1 from './img/introducePic3-1.png';
import introducePic3_2 from './img/introducePic3-2.png';


const Introduce = () => {
  const [showTip, setShowTip] = useState(false);
  const [cView, setCView] = useState(0);

  useEffect(() => {
    document.title = '公司介绍-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInContainer children={
      <>
        <div className={styles.banner}>
          <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} src={aboutBanner} draggable="false" alt="" />
        </div>


        <div className={styles.ClickBtn}>
          <div
            className={cView === 0 ? styles.ClickBtnItemClick : styles.ClickBtnItemNoClick}
            onClick={() => setCView(0)}
          >
            朗科科技
          </div>
          <div
            className={cView === 1 ? styles.ClickBtnItemClick : styles.ClickBtnItemNoClick}
            onClick={() => setCView(1)}
          >
            朗坤科技
          </div>
          <div
            className={cView === 2 ? styles.ClickBtnItemClick : styles.ClickBtnItemNoClick}
            onClick={() => setCView(2)}
          >
            联合实验室
          </div>
        </div>


        <div className={styles.tabs}>
          <div className={styles.introduce}>
            {
              cView === 0 &&
              <div style={{ paddingBottom: '15px' }}>
                <div className={styles.banner}>
                  <img style={{ width: '100%', aspectRatio: 'auto 2160/630' }} src={introduceBanner} alt="" />
                </div>
                <div style={{ transform: 'translateY(-5vw)' }}>
                  <div className={styles.text}>朗科科技成立于1999年，公司位于深圳市。朗科科技是闪存盘的发明者，全球存储应用领域产品与解决方案提供商，2010年在A股创业板成功上市，股票代码：300042。公司成立以来，始终致力于存储技术的研发与创新，拥有专利及专利申请总量超300项，产品覆盖SSD、DDR、嵌入式存储和移动存储等多个品类，产品远销全球百余国家及地区。</div>
                  <div className={styles.text}>随着2022年国家“东数西算”工程正式全面启动，韶关市成为了粤港澳大湾区国家算力枢纽节点城市集群，同年韶关市城市投资发展集团有限公司成为朗科科技第一大股东，至此朗科科技成为韶关市委市政府围绕“东数西算”重仓布局的战略要地，公司也从传统的存储产品研发销售逐渐转型为“东数西算”韶关集群的算力产业投资平台。目前，朗科科技在算力全产业链积极布局，逐渐形成“上游布局服务器级核心硬件，中游布局自建智算中心，下游布局大数据应用类项目”的算力布局形态。</div>
                </div>
              </div>
            }
            {/* <div className={styles.line}></div> */}
            {
              cView === 1 &&
              <div style={{ paddingBottom: '15px' }}>
                <div className={styles.bannerTwo}>
                  <img style={{ width: '100%', aspectRatio: 'auto 2160/630' }} src={introduceBannerTwo} alt="" />
                </div>
                <div style={{ transform: 'translateY(-5vw)' }}>
                  <div className={styles.text}>朗坤科技成立于2022年，公司位于韶关市。作为深圳市朗科科技股份有限公司（股票代码：300042）的全资子公司，承担算力产业链布局工作。朗坤科技围绕算力产业，聚焦通算、智算、超算业务，通过有效聚合基础设施供应商，集成企业与用户主体资源，构建了完整的算力产业生态平台。公司打造了以AI训练和推理为核心，以通用计算为辅助，以存储、网卡等硬件为并行发展方向的全生态服务器产品体系，致力于成为领先的国产信创服务器（智算+通算）制造商和集成商。</div>
                </div>
              </div>
            }
            {
              cView === 2 &&
              <div style={{ paddingBottom: '0' }}>
                <div className={styles.bannerTwo}>
                  <img style={{ width: '100%', aspectRatio: 'auto 2160/630' }} src={introducePic3_1} alt="" />
                </div>
                <div style={{ transform: 'translateY(-5vw)' }}>
                  <div className={styles.text}>2024年，朗科科技与深圳大学开展校企合作，成立“深圳大学-朗科科技算力调度与提升联合实验室”。实验室一方面致力于算力监测、调度、交易平台建设，平台将重点汇聚通用算力、智能算力、高性能算力等多元算力资源，构建异构资源池调度引擎，实现跨资源池、跨架构、跨厂商的异构算力资源调度能力；另一方面，致力于在算力相关技术理论与方法探究，聚焦智能调度与算力优化、“架构-电路-集成-算法”协同一体化创新的算力提升、算力体系架构理论与方法等研究方向，突破相关的基础理论、方法和关键技术。</div>
                </div>
                <div className={styles.bannerThree_2}>
                  <img style={{ width: '100%', aspectRatio: 'auto 2160/630' }} src={introducePic3_2} alt="" />
                </div>
              </div>
            }
          </div>
        </div>
      </>
    } />

  )
}
export default Introduce;
