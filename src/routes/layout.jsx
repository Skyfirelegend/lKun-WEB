import React from 'react';
import { Flex, ConfigProvider, Layout } from 'antd';
import { Outlet } from '@modern-js/runtime/router';
import 'animate.css'
import CPOFooter from '../components/index/footer';
import CPOHeader from '../components/index/header';
import './index.css';
import './layout.css';
const { Header, Content, Footer } = Layout;

export default function GLayout() {
  const dealShowPage = () => {
    return ['/login', '/registry'].includes(location.pathname);
  }
  return (
    <ConfigProvider
      theme={{


        token: {
          colorBgContainer: 'rgba(255, 255, 255, 0)',
          borderRadiusLG: 0,
          fontFamily: 'MyCustomFont',
          fontFamilyCode: 'MyCustomFont',
        },
        components: {
          Layout: {
            headerBg: '#fff',
            bodyBg: '#fff',
            footerBg: '#EAF2FF',
          },
          Table: {
            headerBg: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgba(255, 255, 255, 0)',
            headerSplitColor: 'rgba(255, 255, 255, 0)',
          },
          Select: {
            optionActiveBg: '#ffffff',
            optionSelectedBg: '#ffffff',
            optionSelectedColor: 'rgba(15, 98, 240, 1)'
          }
        },
      }}
    >
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 38,
            paddingRight: 0,
            top: 0,
            position: 'sticky',
            zIndex: 1
          }}
        >
          <CPOHeader />
        </Header>
        <Flex vertical gap={0} style={{ height: '100%' }} >
          <Content style={{ height: '100%' }}>

            <Outlet />
          </Content>
          {!dealShowPage() && <Footer>
            <CPOFooter />
          </Footer>}
        </Flex>
      </Layout>
    </ConfigProvider >
  )


}
