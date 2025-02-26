import React, { useState } from 'react';
import { Tabs } from 'antd'
import { Outlet } from '@modern-js/runtime/router';
import aboutBanner from './img/aboutBanner.png'
import styles from './index.module.less'
import FadeInContainer from '../../components/common'
const Index = () => {


  return (
    <FadeInContainer children={
      <div className={styles.about}>
        <Outlet />

      </div>
    } />

  )
}

export default Index;
