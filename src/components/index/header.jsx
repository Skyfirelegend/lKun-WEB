import { SearchOutlined, FileUnknownOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Typography, Menu, Space, AutoComplete, Dropdown } from 'antd';
import { Link } from '@modern-js/runtime/router';

const { Text, } = Typography;
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../static/logo.svg';

import styles from "./index.module.less";

import { cpo_address } from "../../utils/address";

import UserPanel from "./userpanel";

const pathname = window.location.pathname


const CPOHeader = () => {
  // const [current, setCurrent] = useState('index');

  const params = new URLSearchParams(window.location.search);
  const getkey = params.get("gotopage");
  const [showUserPanel, setUserPanel] = useState(false);

  // const locationRef = useRef(location)
  // locationRef.current = location

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
        <a href={`${cpo_address}/doc`}>
          产品文档
        </a>
        // <Link prefetch="render" to="/document">
        //   产品文档
        // </Link>
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

  const nametokey = {
    '/': 'index',
    '/products/server': 'server',
    '/products/dispatch': 'dispatch',
    '/products/model': 'model',
    '/products/cloud': 'cloud',
    '/example': 'example',
    '/document': 'document',
    '/about/Introduce': 'introduce',
    '/about/ContactUs': 'contactUs',
    '/informationFilling': 'info',
  }

  const itemList = ['index', 'products', 'server', 'dispatch', 'model', 'cloud', 'example', 'document', 'about', 'introduce', 'contactUs']

  const [selectedKey, setSelectedKey] = useState('index');

  const page_list = ['首页', '弹性AI算力资源-产品与服务', '算力调度平台-产品与服务', '模型训练与推理-产品与服务', '专属定制云-产品与服务', '客户案例', '产品文档', '公司介绍-关于我们', '联系我们-关于我们', '信息收集']

  const page_link = {
    '首页': '/',
    '弹性AI算力资源-产品与服务': '/products/server',
    '算力调度平台-产品与服务': '/products/dispatch',
    '模型训练与推理-产品与服务': '/products/model',
    '专属定制云-产品与服务': '/products/cloud',
    '客户案例': '/example',
    '产品文档': `${cpo_address}/doc`,
    '公司介绍-关于我们': '/about/Introduce',
    '联系我们-关于我们': '/about/ContactUs',
    '信息收集': '/informationFilling',
  }

  const drop_items = [
    {
      label: <UserPanel onClose={() => setUserPanel(false)} />,
      key: '1',
    }
  ]

  const handleClick = (e) => {
    setSelectedKey(e.key);
  };

  const imgClick = () => {
    setSelectedKey('index');
  };


  useEffect(() => {
    // console.log(pathname)
    // console.log(location.pathname)
    // console.log(locationRef.current.pathname)
    window.onpopstate = function (e: PopStateEvent) {
      setSelectedKey(nametokey[location.pathname]);
    };
    const savedKey = localStorage.getItem('selectedMenuKey');
    localStorage.removeItem('selectedMenuKey');
    if (savedKey) {
      if (savedKey === nametokey[pathname]) {
        setSelectedKey(savedKey);
      }
      else {
        setSelectedKey(nametokey[pathname]);
      }
    }
    if (itemList.includes(getkey)) {
      setSelectedKey(getkey)
    }
    if (getkey === "info") {
      setSelectedKey("info")
    }
    return (() => {
      window.onpopstate = null;
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedMenuKey', selectedKey);
  }, [selectedKey]); // 依赖selectedKey，所以每次selectedKey变化时都会执行这个effect

  const [options, setOptions] = useState([])


  const searchOut = (values) => {
    const regex = new RegExp(`(${values})`, 'u');
    const searchArray = page_list.filter(item => regex.test(item));
    // console.log(searchArray)

    const searchResult = searchArray.map(item => {
      let need_values = values
      const escaped = need_values.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const split_item = item.split(new RegExp(`(${escaped})`)).filter(part => part != "")
      // console.log(split_item)
      return {
        value: item,
        label: (
          <div className={styles.searchResult}
            onClick={() => {
              window.open(page_link[item], '_self')
            }}
          >
            {
              split_item.map(item2 => {
                // console.log(values)
                return (
                  <div className={item2 === values ? styles.hightLight : styles.noneHightLight}>
                    {item2}
                  </div>
                )
              })
            }
          </div>
        )
      }
    })

    // console.log(searchResult)

    return searchResult
  }


  const onChange = (value) => {
    // console.log('onChange:', value);
    setOptions(value ? searchOut(value) : []);
    // console.log(options)
  };

  return (
    <Flex
      style={{ width: '100%', height: '100%' }}
      justify="space-between"
      align="center"
      className='animate__animated animate__fadeIn'
    >
      <Flex style={{ width: '100%', height: '100%' }} gap="large" justify="space-between" align="center">
        {/* <img style={{ height: '18px' }} aria-labelledby="logo" src={logo} /> */}
        <a onClick={imgClick} style={{ display: 'flex', alignItems: 'center' }} href="/"><img style={{ height: '1.167vw' }} aria-labelledby="logo" src={logo} /></a>


        {/* <Menu onClick={handleClick} style={{ width: '100%', height: '100%' }} mode="horizontal" items={items} /> */}

        <Menu onClick={handleClick} style={{ width: '100%', height: '100%' }} mode="horizontal" items={items} selectedKeys={[selectedKey]} />
      </Flex>

      <Flex justify="center" align="center" style={{ height: '100%' }}>

        <AutoComplete
          style={{
            width: '22.8vw',
          }}
          options={options}
          onChange={onChange}
          popupClassName={styles.searchpopup}
          notFoundContent={
            <div
              className={styles.noneStyle}
            >
              <FileUnknownOutlined
                className={styles.img}
              />
              <div
                className={styles.text}
              >
                搜索内容为空
              </div>
            </div>
          }
        >
          <Input
            style={{ width: '22.8vw' }}
            // style={{ width: '350px' }}
            size="large"
            placeholder="搜索"
            suffix={<SearchOutlined />}
          />
        </AutoComplete>

        {/* <Input
          style={{ width: '22.8vw' }}
          // style={{ width: '350px' }}
          size="large"
          placeholder="搜索"
          suffix={<SearchOutlined />}
        /> */}
        <Flex
          justify="center"
          align="center"
          style={{
            // width: '6.5vw',
            // width: '22%',
            width: 100,
            // height: '100%',
          }}
        >

          <Button color="default" variant="link" href={`${cpo_address}/login`}
            style={{
              // fontSize: '14px',
              fontSize: '100%',
              // fontSize: '0.93vw',
            }}
          >
            登录
          </Button>

          {/* <Button color="default" variant="link" href={`${cpo_address}/fast-entrence`}
            style={{
              // fontSize: '14px',
              fontSize: '100%',
              // fontSize: '0.93vw',
            }}
          >
            调度系统
          </Button> */}

        </Flex>


        <Flex
          justify="center"
          align="center"
          style={{
            width: 100,
            // width: '6.5vw',
            // width: '22%',
            height: '100%',
            background: 'rgba(15, 98, 240, 1)',
          }}
        >

          <Button color="default" variant="link" href={`${cpo_address}/register`}
          >
            <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>注册</Text>
          </Button>

          {/* <Dropdown
            overlayClassName={styles.dropDown}
            menu={{
              drop_items,
            }}
          >
            <span>
              2
            </span>
          </Dropdown> */}

        </Flex>
      </Flex>
    </Flex >
  );
};

export default CPOHeader;
