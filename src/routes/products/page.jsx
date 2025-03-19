import React, { useState } from "react";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import { Tips } from '../login/page'
import chip from "./img/chip.png";
import doc from "./img/doc.png";
import settingIcon from "./img/settingIcon.png";
import frameworkPic from "./img/frameworkPic.svg";
import computeBanner from './img/computeBanner.png';
import serveBanner from './img/serveBanner.png'
import styles from "./index.module.less";
const { Text } = Typography;

const serverData = [
  {
    name: ["朗坤C550智算服务器"],
    setting: [
      {
        name: "GPU",
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
    price: "7499",
    costPrice: "14998"
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
    price: "199",
    costPrice: "398"
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
    price: "1899",
    costPrice: "3798"
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
    price: 19999,
    costPrice: 39998
  },
];

const Index = () => {
  const key = window.location.search.split('=')[1] || '1'
  const [activite, setActivite] = useState(key);
  const [showTip, setShowTip] = useState(false);
  return (
    <div className={styles.products} id="products">
      <div className={styles.nav}>
        <Tabs
          activeKey={activite}
          items={[
            {
              key: "1",
              label: "裸金属服务器",
            },
            {
              key: "2",
              label: "集群算力调度平台",
            },
            {
              key: "3",
              label: "模型训练与推理",
            },
          ]}
          onChange={(e) => {
            setActivite(e);
          }}
        />
      </div>
      {activite === "1" && (
        <div className={styles.serverWrapper}>
          <div className={styles.banner}>
            <img src={serveBanner} alt="" />
            {/* <div className={styles.title}>裸金属服务器</div>
            <div className={styles.desc}>
              裸金属服务器（Bare
              Meta）具有安全的物理隔离和强大的计算能力，服务于深度学习、科学计算、图形可视化、视频处理多种应用场景，分钟级的交付周期将提供给您实时的业务响应能力，有效缓解计算压力，助力您的核心业务飞速成长。
            </div> */}
          </div>
          <div className={styles.content}>
            {serverData.map((item) => {
              return (
                <Card hoverable className={styles.items} key={item.name[0]}>
                  {item.name.map((str) => (
                    <div key={str} className={styles.name}>
                      {str}
                    </div>
                  ))}
                  <div className={styles.settingWrapper}>
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
                  </div>
                  <div className={styles.price}>
                    <div className={styles.label}>价格<span style={{ fontStyle: 'italic', fontWeight: '700', fontSize: '28px', color: 'rgba(255, 120, 0, 1)' }}> 低至5折！</span></div>
                    <div className={styles.value}>￥<span style={{ fontSize: '28px', color: 'rgba(255, 120, 0, 1)' }}>{item.price}</span><Text delete>{item.costPrice}</Text>/月</div>
                  </div>
                  <div className={styles.buyTime}>
                    <div className={styles.label}>购买时间</div>
                    <div className={styles.value}>
                      <Select
                        defaultValue={"1"}
                        style={{ width: 90 }}
                        variant="borderless"
                        options={[
                          { value: "1", label: "1个月", color: "" },
                          { value: "6", label: "6个月" },
                          { value: "12", label: "12个月" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className={styles.buyBtn}><a href="/informationFilling">立即购买</a></div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
      {activite === "2" && (
        <div className={styles.compute}>
          <div className={styles.banner}>
            <img src={computeBanner} alt="" />
            {/* <div className={styles.title}>集群算力调度平台</div>
            <div className={styles.desc}>
              集群算力调度管理平台（Cluster Computing Power Scheduling
              Platform），能够将集群内各个数据中心的CPU、GPU、TPU等XPU与存储、网络等资源进行统一纳管和调度，确保算力资源的高效利用和负载均衡。在统一纳管过程中，将与服务器厂商协作配合，根据数据中心上架的服务器芯片架构、品牌等实现异构兼容，使得不同类型算力资源能够被高效利用，满足多样化计算任务需求。
            </div> */}
          </div>
          <div className={styles.frameworkTitle}>
            技术架构图
          </div>
          <div className={styles.frameworkPicWrapper}>
            <img src={frameworkPic} alt="" />
          </div>
          <div className={styles.consultWrapper}>
            <div className={styles.btn}>
              <div><a href="/informationFilling">立即咨询</a></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
