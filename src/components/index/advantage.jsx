import { Card, Col, Flex, Row, Space, Typography } from "antd";
const { Text } = Typography;
import cardbg1 from "../../static/cardbg1.png";
import cardbg2 from "../../static/cardbg2.png";
import cardbg3 from "../../static/cardbg3.png";
import cardbg4 from "../../static/cardbg4.png";
import FadeInContainer from '../common'
import styles from "./index.module.less";
const CPOAdvantage = () => {
  return (
    <Flex vertical justify="center" align="center" >
      <FadeInContainer
        children={
          <div className={styles.textWrapper}>
            <Text style={{ fontSize: "24px" }}>
              精准调度
              {
                <Text style={{ fontSize: "24px", color: "rgba(15, 98, 240, 1)" }}>
                  每一分算力
                </Text>
              }
              ，高效助力政企每一步前行
            </Text>
          </div>
        }
      />

      <FadeInContainer
        children={
          <div className={styles.advantageWrapper}>
            <div
              className={styles.myCardWrapper}
            >
              <img src={cardbg1} alt="" />
            </div>
            <div
              className={styles.myCardWrapper}
            >
              <img src={cardbg2} alt="" />
            </div>
          </div>
        }
      />

      <FadeInContainer
        children={
          <div className={styles.advantageWrapper}>
            <div
              className={styles.myCardWrapper}
            >
              <img src={cardbg3} alt="" />
            </div>
            <div
              className={styles.myCardWrapper}
            >
              <img src={cardbg4} alt="" />
            </div>
          </div>
        }
      />


    </Flex>
  );
};

export default CPOAdvantage;
