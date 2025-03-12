import React, { useState, useEffect } from "react";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import { Tips } from '../../login/page'
import chip from "../img/chip.png";
import doc from "../img/doc.png";
import settingIcon from "../img/settingIcon.png";
import frameworkPic from "../img/frameworkPic.png";
import computeBanner from '../img/computeBanner.png';
import serveBanner from '../img/serveBanner.png'
import styles from "../index.module.less";

import modelBanner from '../img/modelBanner.svg';
import styles2 from "./index.module.less";
import modelBtnbg from '../img/modelBtnbg.svg'

import Pap from './img/pap.svg';
import Tensorflow from './img/Tensorflow.svg';
import PyTorch from './img/PyTorch.svg';
import Stab from './img/stab.svg'
import Youyun from './img/youyun.svg'
import Tongyi from './img/tongyi.svg'
import Gitee from './img/Gitee.svg'
import Nvidia from './img/nvidia.svg'

import BanBtn from './img/BanBtn.svg'

const { Text } = Typography;
import FadeInContainer from '../../../components/common'



const frame = [
  {
    img: Pap,
    title: 'PaddlePaddle',
    desc: 'PaddlePaddle是一个功能全面的深度学习框架，由百度公司主导开发并开源。它最初源于2013年百度深度学习实验室创建的Paddle项目，旨在支持大规模数据的多GPU和多机器并行训练。'
  },
  {
    img: Tensorflow,
    title: 'Tensorflow',
    desc: 'TensorFlow 是一个端到端开源机器学习平台和深度学习框架。它拥有一个全面而灵活的生态系统，其中包含各种工具、库和社区资源，可助力研究人员推动先进机器学习技术的发展，并使开发者能够轻松地构建和部署由机器学习提供支持的应用。'
  },
  {
    img: PyTorch,
    title: 'PyTorch',
    desc: 'PyTorch是一个用于机器学习和深度学习的开源深度学习框架，由Facebook于2016年发布，具有强大的 GPU 加速张量计算功能，并且能够自动进行微分计算，从而可以使用基于梯度的方法对模型参数进行优化。'
  },
]


const aigc = [
  {
    img: Stab,
    title: 'Stable Diffusion WebUI',
    desc: 'Stable Diffusion WebUI‌是一个基于Gradio库的Stable Diffusion的浏览器界面，支持目前主流的开源AI绘画模型，如NovelAi和Stable Diffusion。它为用户提供了一个方便配置和生成AI绘画作品的平台，并且可以进行各种精细地配置。'
  },
  {
    img: Youyun,
    title: 'ComfyUI',
    desc: 'ComfyUI是一个基于节点流程的Stable Diffusion操作界面，它将稳定扩散的流程拆分为各个节点，用户可通过自定义节点、拖拽连线实现精准的工作流定制与可靠复现，以完成更复杂的、自由度更高的图像生成工作。'
  },
  {
    img: Tongyi,
    title: 'FunAudioLLM',
    desc: 'FunAudioLLM 是阿里巴巴通义实验室推出的一款开源语音大模型，它包含两个核心模型：SenseVoice和CosyVoice。SenseVoice专注于多语言语音识别、情感辨识和声音事件检测，CosyVoice则擅长语音合成，能够根据少量原始音频快速生成模拟音色，包括韵律和情感细节，并支持跨语言合成。'
  },
  {
    img: Gitee,
    title: 'RVC介绍',
    desc: 'RVC是一个基于VITS的语音转换框架，旨在提供简便易用的变声功能。作为一款前沿的音色替换项目，RVC支持歌曲翻唱和实时变声，具有低延迟、优秀的变声效果、强大的声音模型扩展性、个性化定制，以及先进的深度学习技术。'
  },
  {
    img: Nvidia,
    title: 'lsaac Sim',
    desc: 'NVIDIA Isaac Sim是一个高性能、高保真度的仿真平台，它专为加速机器人的开发而设计，它使开发人员能够在基于物理的虚拟环境中设计、模拟、测试和训练基于人工智能的机器人和自主机器。'
  },
]



const Index = () => {
  const [showTip, setShowTip] = useState(false);
  const [cView, setCView] = useState(0)

  useEffect(() => {
    document.title = '模型训练与推理';
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInContainer children={
      <div className={styles.products} id="products">
        <div className={styles.compute}>
          <div className={styles.banner}>
            <img style={{ width: '100%', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={modelBanner} alt="" />
            {/* <img style={{ width: '20%', left: '5%', transform: 'translate(0%,-170%)', aspectRatio: 'auto 335/97', position: 'absolute', zIndex: 3 }} src={BanBtn} alt="" /> */}
            <div><a className={styles.btn3} href="http://8.134.32.42:20000/mirror-repository">立即使用</a></div>
            <div><a className={styles.btn4} href="/informationFilling?gotopage=info">了解更多</a></div>
          </div>


          <div className={styles2.ClickBtn}>
            <div
              className={cView === 0 ? styles2.ClickBtnItemClick : styles2.ClickBtnItemNoClick}
              onClick={() => setCView(0)}
            >
              深度学习框架
            </div>
            <div
              className={cView === 1 ? styles2.ClickBtnItemClick : styles2.ClickBtnItemNoClick}
              onClick={() => setCView(1)}
            >
              AIGC应用
            </div>
          </div>

          <div className={styles2.example}>
            {
              cView === 0 &&
              frame.map(item => {
                return (
                  <div className={styles2.items} key={item.title}>
                    <img src={item.img} alt="" />
                    <div className={styles2.text}>
                      <div className={styles2.title}>{item.title}</div>
                      <div className={styles2.desc}>{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }
            {
              cView === 1 &&
              aigc.map(item => {
                return (
                  <div className={styles2.items} key={item.title}>
                    <img src={item.img} alt="" />
                    <div className={styles2.text}>
                      <div className={styles2.title}>{item.title}</div>
                      <div className={styles2.desc}>{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>


          <div className={styles.modelWrapper}>
            <div className={styles.btn}>
              <div><a href="http://8.134.32.42:20000/mirror-repository">立即使用  →</a></div>
              {/* <div style={{ borderRadus: '0px', transform: 'translate(160%,-60%)' }}><a href="/informationFilling">咨询更多</a></div> */}
            </div>
            <div><a className={styles.btn2} href="/informationFilling?gotopage=info">了解更多</a></div>
          </div>
        </div >

      </div >
    } />

  );
};

export default Index;
