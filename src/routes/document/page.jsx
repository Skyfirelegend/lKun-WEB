import { ConfigProvider, Layout, Menu } from 'antd';
import { Flex } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import banner from './img/banner.png'
import styles from './index.module.less'
import './Menu.less'
import FadeInContainer from '../../components/common'
import { Link, Outlet } from '@modern-js/runtime/router';

const { Sider, Content } = Layout

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';

import Cost from "./markdown/Cost"
import { calc } from 'antd/es/theme/internal';

const items = [
  {
    label: 'AI算力云服务',
    key: 'AICloud',
    children: [
      {
        label: '容器实例',
        key: 'contain',
        className: 'submenu1',
        children: [
          {
            label: '资源组',
            key: 'ziyuan'
          },
          {
            label: '创建容器实例',
            key: 'chuangjian'
          },
          {
            label: '访问容器实例',
            key: 'fangwen'
          },
        ]
      },
      {
        label: '常见问题',
        key: 'problem',
        className: 'submenu1',
        children: [
          {
            label: '如何进行报销材料申请',
            key: 'baoxiao'
          },
        ]
      },
      {
        label: '热门活动',
        key: 'work',
      },
      {
        label: '动态与公告',
        key: 'dongtai',
      },
      {
        label: 'AI开发',
        key: 'AIkaifa',
      },
      {
        label: 'AI资产',
        key: 'AIzichan',
      },
      {
        label: 'AI设置',
        key: 'AIsheczhi',
      },
      {
        label: 'AI资源',
        key: 'AIziyuan',
      },
      {
        label: 'AI最佳实践',
        key: 'AIshijian',
      },
      {
        label: 'HPC最佳实践',
        key: 'HPCshijian',
      },
      {
        label: '镜像帮助',
        key: 'mirrorhelp',
      },
      {
        label: '视频教程',
        key: 'videohelp',
      },
    ]
  },
  {
    label: "常用帮助",
    key: 'help',
    children: [
      {
        label: "容器案例常见问题",
        key: "containproblem",
      },
    ]
  },
  {
    label: '大模型服务',
    key: 'Model',
    children: [
      {
        label: '产品介绍',
        key: 'productintroduce',
      },
      {
        label: '模型服务介绍',
        key: 'modelservice',
      },
      {
        label: '模型调用',
        key: 'modeluse',
        children: [
          {
            label: '创建API密钥',
            key: 'createAPIkey',
            className: 'submenu2',
            children: [
              {
                label: 'API密钥',
                key: 'APIKey'
              },
            ]
          },
        ]
      },
      {
        label: '最佳实践',
        key: 'zuijiashijian',
      },
      {
        label: '调用场景',
        key: 'diaoyongchangjing',
      },
    ]
  },
  {
    label: '开发者文档',
    key: 'DeveloperDocument',
    children: [
      {
        label: 'API文档',
        key: 'APIDocument',
      },
      {
        label: 'SDK文档',
        key: 'SDKDocument',
      },
    ]
  },
  {
    label: '访问与鉴权管理',
    key: 'Manage',
    children: [
      {
        label: '账户中心',
        key: 'Account',
      },
      {
        label: 'API密钥',
        key: 'API_Manage',
      },
    ]
  },
  {
    label: '用户服务',
    key: 'UserService',
    children: [
      {
        label: '费用中心',
        key: 'Cost',
      },
      {
        label: '消息中心',
        key: 'Message',
      },
      {
        label: '工单服务',
        key: 'WorkOrder',
      },
      {
        label: '用户协议',
        key: 'Agreement',
      },
    ]
  },
]

function px_to_vw(npx) {
  return (npx / window.innerWidth) * 100
}

const Index = () => {

  const params = new URLSearchParams(window.location.search);
  const getnowpage = params.get("nowpage");

  useEffect(() => {
    document.title = '产品文档-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务s';
  })

  const divRef = useRef(null);

  const [nowheight, setHeight] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height)
        // console.log('Div height changed to:', entry.contentRect.height);
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [])

  const [nowDocu, setDocu] = useState(<div>正文，点击左侧导航栏任意一个选项查看</div>);

  const handleClick = (e) => {
    // console.log(e.key, key_docu[e.key]);
    key_docu[e.key] === undefined ? setDocu(<div>此处为空，待添加内容</div>) : setDocu(key_docu[e.key])
  };

  useEffect(() => {
    if (getnowpage != undefined) {
      setDocu(key_docu[getnowpage])
      // key_docu[getnowpage] === undefined ? setDocu(<div>此处为空，待添加内容</div>) : setDocu(key_docu[getnowpage])
    }
  }, [])

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

  const key_docu = {
    "Cost": (<Cost />)
  }



  return (
    <FadeInContainer children={

      <Layout>
        <Sider
          className={styles.draggableSidebar}
          ref={dragStateRef}
          width={width}
          style={{
            height: `${px_to_vw(nowheight) > 30 ? px_to_vw(nowheight) + 5 : 35}vw`,
          }}
        >
          <div className={styles.draggableHandle} onMouseDown={handleMouseDown}></div>
          <a href='/document' className={styles.firstitem}>产品文档</a>
          <Menu
            mode='inline'
            className='sider_menu'
            style={{ background: "rgba(234, 239, 247, 0.64)", marginTop: '4vw' }}
            onClick={handleClick}
            // expandIcon={<div className={styles.icon}></div>}
            items={items} />
        </Sider>
        <Content style={{ overflow: 'initial', zIndex: 2 }}>
          <div
            ref={divRef}
            className='markdown-body'
            style={{
              // marginTop: '2vw',
              marginBottom: '5vw',
              // marginLeft: `calc(${width}px + 2vw)`,
              marginLeft: '2vw',
              marginRight: '10vw',
            }}
          >
            {/* <ReactMarkdown
              children={md1}
              // children={mdContent}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            /> */}
            {nowDocu}
          </div>

          {/* 正文 */}
          {/* <Outlet></Outlet> */}
        </Content>
      </Layout >



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
