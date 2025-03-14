import { Button, ConfigProvider, Flex, Layout, Typography } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import CPOAdvantage from '../components/index/advantage';
import CPOCarousel from '../components/index/carousel';
import CPOCooperativePartner from '../components/index/cooperativePartner';
import CPOFooter from '../components/index/footer';
import CPOHeader from '../components/index/header';
import CPOServerCard from '../components/index/ServerCard';
import CPOTechnicalArchitecture from '../components/index/technicalArchitecture';
import Consult from '../components/index/Consult';
import FooterModal from '../components/index/FooterModal'
const { Header, Content, Footer } = Layout;
import { motion } from 'motion/react';
import aaa from '../static/Frame 8@3x.png';
const { Text } = Typography;
import '../static/style.css';
const Index = () => {
  const [showFooterModal, setShowFooterModal] = useState(true)

  useEffect(() => {
    document.title = '主页';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex vertical>
      <CPOCarousel key="key1" />

      <CPOServerCard key="key5" />

      <CPOAdvantage key="key2" />
      <CPOTechnicalArchitecture key="key3" />
      <CPOCooperativePartner key="key4" />
      <Consult />
      {showFooterModal && <FooterModal close={() => { setShowFooterModal(false) }} />}
    </Flex>
  );
};
export default Index;
