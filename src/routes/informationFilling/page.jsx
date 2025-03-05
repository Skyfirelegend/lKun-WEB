import { useState } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import styles from './index.module.less';
import modalHeadBg from '../products/img/modalHeadBg.png'
import { Tips } from '../login/page'
import { useEffect } from 'react';
const InformationFilling = () => {
  const [showTip, setShowTip] = useState(false)

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
          <Form>
            <Form.Item>
              <Input placeholder='请输入您的姓名' className={styles.myInput} />
            </Form.Item>
            <Form.Item>
              <Input placeholder='请输入您的单位' className={styles.myInput} />
            </Form.Item>
            <Form.Item>
              <Input placeholder='请输入您的电话' className={styles.myInput} />
            </Form.Item>
            <Form.Item>
              <Input placeholder='请输入您的邮箱' className={styles.myInput} />
            </Form.Item>
            <Form.Item>
              <Button onClick={() => {
                setShowTip(true)
                setTimeout(() => {
                  setShowTip(false)
                }, 1000);
              }} type='primary' block className={styles.myButton}>提交</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default InformationFilling;
