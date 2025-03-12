import { ConfigProvider, Layout, Menu } from 'antd';
import { Flex } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import banner from './img/banner.png'
import styles from './index.module.less'
import FadeInContainer from '../../components/common'
import { Link, Outlet } from '@modern-js/runtime/router';

const { Sider, Content } = Layout

const items = [
  {
    label: (
      <Link prefetch="render" to="/">
        首页
      </Link>
    ),
    key: 'index',
  },
  {
    label: '产品与服务',
    key: 'products',
    children: [
      {
        label: (
          <Link prefetch="render" to="/document/buyguide/calculate">
            {/* <div> */}
            弹性AI算力资源
            {/* </div> */}

          </Link>
        ),
        key: 'server',
      },
      {
        label: (
          <Link prefetch="render" to="/products/dispatch">
            算力调度平台
          </Link>
        ),
        key: 'dispatch',
      },
      {
        label: (
          <Link prefetch="render" to="/products/model">
            模型训练与推理
          </Link>
        ),
        key: 'model',
      },
      {
        label: (
          <Link prefetch="render" to="/products/cloud">
            专属定制云
          </Link>
        ),
        key: 'cloud',
      },
    ]
  },
  {
    label: (
      <Link prefetch="render" to="/example">
        客户案例
      </Link>
    ),
    key: 'example',
  },
  {
    label: (
      <Link prefetch="render" to="/document">
        产品文档
      </Link>
    ),
    key: 'document',
  },
  {
    label: '关于我们',
    key: 'about',
    children: [
      {
        label: (
          <Link prefetch="render" to="/about/Introduce">
            公司介绍
          </Link>
        ),
        key: 'introduce',
      },
      // {
      //   label: (
      //     <Link prefetch="render" to="/about/ServiceConter">
      //       客服中心
      //     </Link>
      //   ),
      //   key: 'serviceConter',
      // },
      {
        label: (
          <Link prefetch="render" to="/about/ContactUs">
            联系我们
          </Link>
        ),
        key: 'contactUs',
      },
    ]
  },
]



const Index = () => {

  useEffect(() => {
    document.title = '产品文档';
    window.scrollTo(0, 0);

  }, []);

  const [width, setWidth] = useState(200);
  const dragStateRef = useRef({
    dragging: false,
    startX: 0,
    startWidth: 200
  });

  const handleMouseDown = (e) => {
    dragStateRef.current = {
      dragging: true,
      startX: e.clientX,
      startWidth: width
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    e.preventDefault(); // 防止文本选中
  };

  const handleMouseMove = (e) => {
    if (!dragStateRef.current.dragging) return;

    const delta = e.clientX - dragStateRef.current.startX;
    const newWidth = Math.max(150, Math.min(400, dragStateRef.current.startWidth + delta));

    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    dragStateRef.current.dragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };


  return (
    <FadeInContainer children={

      <Layout>
        <Sider className={styles.draggableSidebar} ref={dragStateRef} width={width}>
          <div className={styles.draggableHandle} onMouseDown={handleMouseDown}></div>
          <Menu mode='inline' style={{ background: "#FAFAFA" }} items={items} />
        </Sider>
        <Content>
          正文
          {/* <Outlet></Outlet> */}
        </Content>
      </Layout>



      // <Flex>
      //   {/* <Menu
      //     style={{ width: '15%', background: '#FAFAFA' }}
      //     items={items}
      //   />
      //   5151515 */}
      //   <div className={styles.draggableSidebar} ref={dragStateRef} style={{ width: `${width}px` }}>
      //     <div className={styles.draggableHandle} onMouseDown={handleMouseDown}></div>
      //     <Menu mode='inline' style={{ background: "#FAFAFA" }} items={items} />
      //   </div>
      //   {/* 正文 */}
      // </Flex>
    } />
  );
};



export default Index;
