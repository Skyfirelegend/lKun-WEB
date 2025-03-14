import { useState } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import styles from './index.module.less';
import modalHeadBg from '../products/img/modalHeadBg.png'
import { Tips } from '../login/page'
import { useEffect } from 'react';

import { UseDispatch, useDispatch } from 'react-redux';



const InformationFilling = () => {
  const [showTip, setShowTip] = useState(false)

  const onFinish = (values) => {
    // const dispatch = useDispatch()
    setShowTip(true)
    setTimeout(() => {
      setShowTip(false)
    }, 1000);
    console.log(values)
  }

  useEffect(() => {
    document.title = '信息收集';
  }, []);

  return (
    <div className={styles.informationFilling}>
      <div className={styles.content}>
        <div className={styles.informationFillingModalTitle}>
          <img src={modalHeadBg} alt="" />
        </div>
        <div className={styles.modalContent}>
          {showTip && <Tips text='提交成功' />}
          <Form onFinish={onFinish} validateTrigger="onBlur">
            <Form.Item
              name="username"
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
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '请输入正确的手机号格式！'
                },
                // {
                //   pattern: /^ (0\d{2, 3}[- ]?)?\d{7, 8}([-#]\d{1, 6})?$/,
                //   message: '请输入正确的固话格式！'
                // }
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
              name="advice"
              rules={[
                {
                  required: true,
                  message: '请确认您的需求是否已经输入！'
                }
              ]}
            >
              <Input placeholder='请输入您的需求' className={styles.myInput} />
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
