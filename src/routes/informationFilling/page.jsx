import { useState } from 'react'
import { Modal, Form, Input, Button, message } from 'antd'
import styles from './index.module.less';
import modalHeadBg from '../products/img/modalHeadBg.png'
import { useEffect, useRef } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import successIcon from "./img/success.png";
import failIcon from "./img/fail.svg";

import { apiPath } from "../../utils/api";
import { InformationRequest } from "../../utils/request"

export const SuccessTips = ({ text }) => {
  return (
    <div className={styles.tip}>
      <img src={successIcon} alt="" />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export const FailTips = ({ text }) => {
  return (
    <div className={styles.tip}>
      <img src={failIcon} alt="" />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

const InformationFilling = () => {
  const [showTip, setShowTip] = useState(false)
  const [showFailTip, setShowFailTip] = useState(false)
  const formRef = useRef()

  const onFinish = async (values) => {
    console.log(values)
    formRef.current.resetFields();
    try {
      const response = await InformationRequest(apiPath.Contact, values)
      if (response.error) {
        setShowFailTip(true)
        setTimeout(() => {
          setShowFailTip(false)
        }, 1000);
        return false;
      }
      console.log(response)
      message.success(response.data.message)
      setShowTip(true)
      setTimeout(() => {
        setShowTip(false)
      }, 1000);
    } catch (error) {
      console.error('Network error:', error);
      setShowFailTip(true)
      setTimeout(() => {
        setShowFailTip(false)
      }, 1000);
    }
  }

  const MOBILE_REGEX = /^1[3-9]\d{9}$/;
  const TEL_REGEX = /^(0\d{2,3}[- ]?)?\d{7,8}$/;

  const phoneRules = [
    {
      validator(_, value) {
        if (!value) {
          return Promise.resolve();
        }

        const isMobile = MOBILE_REGEX.test(value);
        const isTel = TEL_REGEX.test(value);

        if (isMobile || isTel) {
          return Promise.resolve();
        }

        return Promise.reject('请输入正确的手机或固话格式！');
      },
    },
  ];


  useEffect(() => {
    document.title = '信息收集-朗科算力调度平台-粤港澳大湾区韶关集群一站式算力调度服务';
  }, []);

  return (
    <div className={styles.informationFilling}>
      <div className={styles.content}>
        <div className={styles.informationFillingModalTitle}>
          <img src={modalHeadBg} alt="" />
        </div>
        <div className={styles.modalContent}>
          {showTip && <SuccessTips text='提交成功' />}
          {showFailTip && <FailTips text='提交失败 请检查网络是否错误' />}
          <Form ref={formRef} onFinish={onFinish} validateTrigger="onBlur">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: '请确认您的姓名是否已经输入！'
                }
              ]}
            >
              <Input placeholder='请输入您的姓名' className={styles.myInput} />
            </Form.Item>
            <Form.Item
              name="company"
              rules={[
                {
                  required: true,
                  message: '请确认您的单位是否已经输入！'
                }
              ]}
            >
              <Input placeholder='请输入您的单位' className={styles.myInput} />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: '请确认您的电话是否已经输入！'
                },
                ...phoneRules
                // {
                //   pattern: /^1[3-9]\d{9}$/,
                //   message: '请输入正确的手机号格式！'
                // },
              ]}
            >
              <Input placeholder='请输入您的电话' className={styles.myInput} />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: '请确认您的邮箱是否已经输入！'
                },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
                  message: '请输入正确的邮箱格式！'
                }
              ]}
            >
              <Input placeholder='请输入您的邮箱' className={styles.myInput} />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: '请确认您的需求是否已经输入！'
                }
              ]}
            >
              {/* <Input placeholder='请输入您的需求' className={styles.myInput} /> */}
              <Input.TextArea showCount='true' style={{ resize: 'none' }} maxLength="300" placeholder='请输入您的需求' rows={3} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit"
                type='primary' block className={styles.myButton}>提交</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div >
  )
}
export default InformationFilling;
