import React, { useState } from "react";
import { Tabs, Card, Select, Modal, Form, Input, Button, Typography } from "antd";
import styles from "./index.module.less";
import FadeInContainer from '../../../components/common';
import chip from "./img/chip.png";
import doc from "./img/doc.png";
import settingIcon from "./img/settingIcon.png";
import servercardBg from "./img/serverBg.png"

import Banner from "./img/banner.png"

import { cpo_address } from "../../../utils/address";

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

const CPOServerCard = () => {
    const [showTip, setShowTip] = useState(false);
    return (
        <FadeInContainer children={
            <div className={styles.banner}>
                <img style={{ width: '100%', aspectRatio: 'auto 2160/520', position: 'relative', zIndex: 2 }} src={Banner} alt="" />
                <div><a className={styles.btn1} href={`${cpo_address}/models`}>立即体验</a></div>
            </div>

            // <div className={styles.serverWrapper}>
            //     {/* <img src={servercardBg} style={{ width: '100%', zIndex: 2 }}></img> */}
            //     <div className={styles.content}>
            //         {serverData.map((item) => {
            //             return (
            //                 <Card hoverable className={styles.items} key={item.name[0]}>
            //                     {item.name.map((str) => (
            //                         <div key={str} className={styles.name}>
            //                             {str}
            //                         </div>
            //                     ))}
            //                     <div className={styles.settingWrapper}>
            //                         {item.setting.map((el, index) => (
            //                             <div key={el.type} className={styles.settingItemWrapper}>
            //                                 <div className={styles.settingItem}>
            //                                     <div className={styles.name}>
            //                                         <img src={index === 2 ? doc : chip} alt="" />
            //                                         <div className={styles.nameText}>{el.name}</div>
            //                                     </div>
            //                                     <div className={styles.type}>{el.type}</div>
            //                                 </div>
            //                                 {index != 2 && <div className={styles.line}></div>}
            //                             </div>
            //                         ))}
            //                     </div>
            //                     <div className={styles.price}>
            //                         <div className={styles.label}>价格<span style={{ fontStyle: 'italic', fontWeight: '700', fontSize: '28px', color: 'rgba(255, 120, 0, 1)' }}> 低至5折！</span></div>
            //                         <div className={styles.value}>￥<span style={{ fontSize: '28px', color: 'rgba(255, 120, 0, 1)', fontWeight: '600' }}>{item.price}</span><Text delete>{item.costPrice}</Text>/月</div>
            //                     </div>
            //                     <div className={styles.buyTime}>
            //                         <div className={styles.label}>购买时间</div>
            //                         <div className={styles.value}>
            //                             <Select
            //                                 defaultValue={"1"}
            //                                 style={{ width: 90 }}
            //                                 variant="borderless"
            //                                 options={[
            //                                     { value: "1", label: "1个月", color: "" },
            //                                     { value: "6", label: "6个月" },
            //                                     { value: "12", label: "12个月" },
            //                                 ]}
            //                             />
            //                         </div>
            //                     </div>
            //                     <div className={styles.buyBtn}><a href="http://8.134.32.42:20000/cloud">立即购买</a></div>
            //                 </Card>
            //             );
            //         })}
            //     </div>
            // </div >
        } />

    );
};

export default CPOServerCard;
