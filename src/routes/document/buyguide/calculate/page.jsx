import qrcode1 from './img/qrcode1.png'
import qrcode2 from './img/qrcode2.png'
import aboutBanner from './img/aboutBanner.png'
import styles from "./index.module.less";
import FadeInContainer from '../../../../components/common'
import React, { useState, useEffect } from "react";

const Index = () => {
    useEffect(() => {
        document.title = '产品文档';
        window.scrollTo(0, 0);
    }, []);

    return (
        <FadeInContainer children={
            <div>
                你是？？？？
            </div>
        } />
    );
};
export default Index;

