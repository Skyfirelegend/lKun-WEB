import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Typography, Menu, Space } from 'antd';
import { Link } from '@modern-js/runtime/router';

const { Text, } = Typography;
import React, { useState } from 'react';
import logo from '../../static/logo.png';

import styles from "./index.module.less";

const pathname = window.location.pathname
const CPOHeader = () => {
  // const [current, setCurrent] = useState('index');
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
        {
          label: (
            <Link prefetch="render" to="/about/ServiceConter">
              客服中心
            </Link>
          ),
          key: 'serviceConter',
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
  return (
    <Flex
      style={{ width: '100%', height: '100%' }}
      justify="space-between"
      align="center"
      className='animate__animated animate__fadeIn'
    >
      <Flex style={{ width: '100%', height: '100%' }} gap="large" justify="space-between" align="center">
        <img style={{ height: '18px' }} aria-labelledby="logo" src={logo} />
        <Menu style={{ width: '100%', height: '100%' }} mode="horizontal" items={items} />
      </Flex>

      <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Input
          style={{ width: '350px' }}
          size="large"
          placeholder="搜索"
          suffix={<SearchOutlined />}
        />
        <Flex
          justify="center"
          align="center"
          style={{
            width: 100,
            height: '100%',
          }}
        >
          <Button color="default" variant="link" href="/login">
            登录
          </Button>
        </Flex>
        <Flex
          justify="center"
          align="center"
          style={{
            width: 100,
            height: '100%',
            background: 'rgba(15, 98, 240, 1)',
          }}
        >
          <Button color="default" variant="link" href="/registry">
            <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>注册</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CPOHeader;
