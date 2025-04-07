import React, { useState, useEffect } from "react";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import chip from "../img/chip.png";
import doc from "../img/doc.png";
import settingIcon from "../img/settingIcon.png";
import frameworkPic from "../img/frameworkPic.png";
import computeBanner from '../img/computeBanner.png';
import serveBanner from '../img/serveBanner.svg'
import styles from "../index.module.less";
import FadeInContainer from '../../../components/common'
const { Text } = Typography;

import styles2 from "./index.module.less";
import TestPic1 from "./img/TestPic1.svg";
import cusmIcon from "./img/cusmIcon.svg";

import { cpo_address } from "../../../utils/address";

const serverData = [
  {
    name: ["朗坤C550智算服务器"],
    setting: [
      {
        name: "GPU",
        // type: "2*海光4 C86",
        type: "2*海光4 C86",
      },
      {
        name: "CPU",
        type: "8*曦云C550",
      },
      {
        name: "内存",
        type: "16*64G",
      },
    ],
    price: "10.42",
    costPrice: "20.84",
    price2: "7499",
    costPrice2: "14998"
  },
  {
    name: ["超微7049GP工作站"],
    setting: [
      {
        name: "GPU",
        type: "1*英伟达4080",
      },
      {
        name: "CPU",
        type: "2*Intel 8163",
      },
      {
        name: "内存",
        type: "8*32G",
      },
    ],
    price: "0.18",
    costPrice: "0.36",
    price2: "199",
    costPrice2: "398"
  },
  {
    name: ["PR4904智算服务器"],
    setting: [
      {
        name: "GPU",
        type: "8*英伟达4090",
      },
      {
        name: "CPU",
        type: "2*Intel 8468",
      },
      {
        name: "内存",
        type: "32*64G",
      },
    ],
    price: "2.64",
    costPrice: "5.28",
    price2: "1899",
    costPrice2: "3798"
  },
  {
    name: ["PR4910智算服务器"],
    setting: [
      {
        name: "GPU",
        type: "8*英伟达H100",
      },
      {
        name: "CPU",
        type: "2*Intel 8468",
      },
      {
        name: "内存",
        type: "32*64G",
      },
    ],
    price: "27.8",
    costPrice: "55.6",
    price2: "19999",
    costPrice2: "39998"
  },
];

const Index = () => {
  const [showClick1, setClick1] = useState(true);
  const [showClick2, setClick2] = useState(1);

  useEffect(() => {
    document.title = '弹性AI算力资源-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInContainer children={
      <div className={styles.products} id="products">
        <div className={styles.serverWrapper}>
          <div className={styles.banner}>
            <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} className={styles.loadPicture} draggable="false" src={serveBanner} alt="" />
            {/* <div className={styles.title}>裸金属服务器</div>
            <div className={styles.desc}>
              裸金属服务器（Bare
              Meta）具有安全的物理隔离和强大的计算能力，服务于深度学习、科学计算、图形可视化、视频处理多种应用场景，分钟级的交付周期将提供给您实时的业务响应能力，有效缓解计算压力，助力您的核心业务飞速成长。
            </div> */}
          </div>

          <div className={styles2.BtnAera}>
            <div className={styles2.Area1}>
              <div className={styles2.Text1}>
                区域
              </div>
              <div className={showClick1 ? styles2.btn1Click : styles2.btn1} onClick={() => setClick1(!showClick1)}>
                华南二区
              </div>
            </div>

            <div className={styles2.Area2}>
              <div className={styles2.Text2}>
                计费模式
              </div>
              <div className={showClick2 === 1 ? styles2.btn2Click : styles2.btn2} onClick={() => setClick2(1)}>
                按需计费
              </div>
              <div className={showClick2 === 2 ? styles2.btn3Click : styles2.btn3} onClick={() => setClick2(2)}>
                包年包月
              </div>
            </div>

            <div className={styles2.Area3}>
              <div className={styles2.Text1}>
                包年包月计费更优惠，适合中长期稳定的IT需求。
              </div>
              <a className={styles2.cusmDesc} href={`${cpo_address}/doc?id=22`} target="_blank">
                <div className={styles2.Text2}>
                  计费说明
                </div>
                <img src={cusmIcon}></img>
              </a>
            </div>

          </div>

          <div className={styles.content}>
            {serverData.map((item) => {
              return (
                <Card hoverable className={styles.items} key={item.name[0]}>
                  <div className={styles.settingWrapper}>
                    {item.name.map((str) => (
                      <div key={str} className={styles.name2}>
                        {str}
                      </div>
                    ))}
                    {item.setting.map((el, index) => (
                      <div key={el.type} className={styles.settingItemWrapper}>
                        <div className={styles.settingItem}>
                          <div className={styles.name}>
                            <img src={index === 2 ? doc : chip} alt="" />
                            <div className={styles.nameText}>{el.name}</div>
                          </div>
                          <div className={styles.type}>{el.type}</div>
                        </div>
                        {index != 2 && <div className={styles.line}></div>}
                      </div>
                    ))}
                    <div className={styles.line2}></div>
                    <div className={styles.price}>
                      {/* <div className={styles.label}>价格<span style={{ fontStyle: 'italic', fontWeight: '700', fontSize: '28px', color: 'rgba(255, 120, 0, 1)' }}> 低至5折！</span></div> */}
                      {/* <div className={styles.value}>￥<span style={{ fontSize: '28px', color: 'rgba(255, 120, 0, 1)', fontWeight: '600' }}>{item.price}</span><Text delete>{item.costPrice}</Text>/时</div> */}

                      {
                        showClick2 === 1 &&
                        <div className={styles.value}>
                          ￥
                          <span style={{ fontSize: '1.82vw', color: 'rgba(255, 120, 0, 1)', fontWeight: '600' }}>
                            {item.price}
                          </span>
                          <Text delete style={{ fontSize: '0.9vw' }}>
                            {/* <Text delete> */}
                            {item.costPrice}
                          </Text>
                          /时
                        </div>
                      }

                      {
                        showClick2 === 2 &&
                        <div>
                          <div className={styles.value} style={{ transform: 'translate(-80%,-100%)' }}>
                            ￥
                            <span style={{ fontSize: '1.82vw', color: 'rgba(255, 120, 0, 1)', fontWeight: '600' }}>
                              {item.price2}
                            </span>
                            <Text delete style={{ fontSize: '0.9vw' }}>
                              {/* <Text delete> */}
                              {item.costPrice2}
                            </Text>
                            /月
                          </div>

                          <div
                            style={{ transform: 'translate(-65%,-0.2vw)', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <span
                              style={{ fontSize: '0.93vw', width: '100%', }}
                            >
                              购买时长
                            </span>
                            <Select
                              defaultValue={"1"}
                              // popupClassName={styles.select}
                              style={{ width: '100%', height: '2vw' }}
                              variant="borderless"
                              // variant="underlined"
                              options={[
                                { value: "1", label: <span style={{ fontSize: '0.93vw' }}>1个月</span> },
                                { value: "3", label: <span style={{ fontSize: '0.93vw' }}>3个月</span> },
                                { value: "6", label: <span style={{ fontSize: '0.93vw' }}>6个月</span> },
                                { value: "12", label: <span style={{ fontSize: '0.93vw' }}>12个月</span> },
                              ]}
                              dropdownStyle={{
                                width: '7vw',
                              }}
                            />
                          </div>

                        </div>

                      }
                      <div className={styles.buyBtn}><a href={`${cpo_address}/cloud`}>立即购买</a></div>
                    </div>
                  </div>

                </Card>
              );
            })}
          </div>

        </div>
        <div className={styles.serverBtn}>
          <div className={styles.btn}>
            <div><a href={`${cpo_address}/cloud`}>立即使用  →</a></div>
          </div>
          <div><a className={styles.btn2} href="/informationFilling?gotopage=info">了解更多</a></div>
        </div>
      </div >
    } />

  );
};

export default Index;
