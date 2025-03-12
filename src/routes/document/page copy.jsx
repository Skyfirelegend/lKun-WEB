import { ConfigProvider, Layout, Menu } from 'antd';
import { Flex } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import banner from './img/banner.png'
import styles from './index.module.less'
import FadeInContainer from '../../components/common'
import { Link } from '@modern-js/runtime/router';


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
          <Link prefetch="render" to="/products/server">
            弹性AI算力资源
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

  const [width, setWidth] = useState(200); // 初始宽度

  console.log(width)
  const draggerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  // 更新宽度
  const updateWidth = (newWidth) => {
    // setWidth(newWidth);
    if (newWidth > 50) { // 最小宽度限制
      setWidth(newWidth);
    }
  };

  // 鼠标按下事件处理
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // 鼠标移动事件处理
  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const diffX = e.clientX - startXRef.current;
      updateWidth(width + diffX);
      startXRef.current = e.clientX; // 更新起始位置为当前位置，防止跳跃式移动
    }
  };

  // 鼠标释放事件处理
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };


  return (
    <FadeInContainer children={
      <Flex>
        {/* <Menu
          style={{ width: '15%', background: '#FAFAFA' }}
          items={items}
        />
        5151515 */}
        <div className={styles.draggableSidebar} ref={draggerRef} style={{ width: `${width}px` }}>
          <div className={styles.draggableHandle} onMouseDown={handleMouseDown}></div>
          <Menu mode='inline' items={items} />
        </div>
        4748484
      </Flex>

      // <div>
      //   待添加内容
      // </div>



    } />
  );
};




export default Index;
