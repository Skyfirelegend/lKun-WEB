import { useState } from "react";
import clsx from "clsx";
import serviceHead from "./img/serviceHead.png";
import q1 from "./img/q1.png";
import q2 from "./img/q2.png";
import q3 from "./img/q3.png";
import doc from "../../products/img/doc.png";
import labelIcon from "./img/label.png";
import styles from "./index.module.less?inline";
import aboutBanner from './img/aboutBanner.png'
import FadeInContainer from '../../../components/common'
const data = [
  {
    img: q1,
    title: "任务调度延迟",
    desc: "任务调度过程中存在延迟，影响了任务的响应速度，该如何解决？",
    answer: [
      {
        title: "优化调度算法",
        desc: "选择或开发更高效的调度算法，减少调度决策的时间。",
      },
      {
        title: "预热机制",
        desc: "对于频繁启动的任务，提前准备所需的资源环境，减少启动时间。",
      },
    ],
    mouseIn: false,
  },
  {
    img: q2,
    title: "容错性不足",
    desc: "当计算节点发生故障时，任务可能无法继续执行，造成数据丢失等问题，该如何解决？",
    answer: [
      {
        title: "冗余备份",
        desc: "为重要数据和任务创建副本，确保主节点故障时可以从备节点恢复。",
      },
      {
        title: "断点续传",
        desc: "支持任务的断点续传功能，即使任务在执行过程中中断，也能从上次中断的地方分钟级重启，保障任务连续，数据完整，任务继续执行。",
      },
    ],
    mouseIn: false,
  },
  {
    img: q3,
    title: "用户权限与隐私",
    desc: "缺乏有效的用户权限管理，可能导致资源滥用或安全风险，如何确保用户隐私？",
    answer: [
      {
        title: "细粒度权限控制",
        desc: "为不同的用户提供不同的权限等级，确保他们只能访问和操作自己权限范围内的资源，保护隐私。",
      },
      {
        title: "审计日志",
        desc: "记录用户的操作行为，便于追踪和管理。",
      },
    ],
    mouseIn: false,
  },
];
const ServiceConter = () => {
  const [isMouseEnter, setMouseEnter] = useState(false);
  const [list, setList] = useState(data);
  return (
    <>
      <FadeInContainer children={
        <div className={styles.banner}>
          <img style={{ width: '100%', aspectRatio: 'auto 2160/520' }} src={aboutBanner} alt="" />
        </div>

      } />
      <FadeInContainer children={
        <div className={styles.tabs}>
          <div className={styles.serviceConter}>
            <img className={styles.headImg} src={serviceHead} alt="" />
            <div className={styles.content}>
              {list.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={clsx(
                      styles.headWrapper,
                      item.mouseIn ? styles.mouseIn : ""
                    )}
                  >
                    <div className={styles.item}>
                      <div className={clsx(styles.head, styles[`head${index + 1}`])}>
                        {item.title}
                      </div>
                      <div
                        onMouseLeave={() => {
                          data.forEach((item) => {
                            item.mouseIn = false;
                          });
                          setList([...data]);
                        }}
                        className={clsx(
                          styles.qusetionBody,
                          item.mouseIn ? styles.mouseIn : ""
                        )}
                      >
                        {item.mouseIn ? (
                          <div className={styles.answerWrapper}>
                            {item.answer.map((v, idx) => {
                              return (
                                <div key={v.title} className={styles.answerItem}>
                                  <div className={styles.title}>
                                    <img src={idx === 0 ? labelIcon : doc} alt="" />
                                    <div className={styles.text}>{v.title}</div>
                                  </div>
                                  <div className={styles.answerContent}>{v.desc}</div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className={styles.text}>{item.desc}</div>
                        )}
                        {!item.mouseIn && (
                          <div
                            onMouseEnter={() => {
                              data[index].mouseIn = true;
                              setList([...data]);
                            }}
                            className={styles.btn}
                          >
                            查看解决方案
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      } />
    </>

  );
};

export default ServiceConter;
