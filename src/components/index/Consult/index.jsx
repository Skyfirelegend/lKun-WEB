import { Button } from 'antd';
import FadeInContainer from '../../common';
import styles from './index.module.less'
const Consult = () => {
  return (
    <FadeInContainer
      children={
        <div className={styles.consult}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>根据您集群内数据中心的服务器芯片架构、品牌厂商等情况 为您开展算力调度前的适配工作</div>
          </div>
          <div className={styles.btnWrapper}><Button className={styles.btn} onClick={() => { window.open('/products/dispatch?gotopage=dispatch', '_self') }}>点击了解</Button></div>
        </div>
      }
    />
  )

}

export default Consult;
