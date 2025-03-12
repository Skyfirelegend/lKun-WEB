import styles from "./index.module.less";
import clsx from "clsx";
import { Drawer } from 'antd'
const FooterModal = ({ close }) => {
  return (
    <div className={clsx(styles.footerModal, 'animate__animated  animate__fadeIn')}>
      <div className={styles.wrapper}>
        <div className={styles.item} onClick={() => {
          window.open('/informationFilling?gotopage=info', '_self')
        }}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32" family
              fill="none"
            >
              <path
                d="M8.9414 8.93762C8.97434 8.41059 9.41139 8 9.93945 8H22.0605C22.5886 8 23.0257 8.41059 23.0586 8.93762L23.9336 22.9376C23.9696 23.5133 23.5124 24 22.9355 24H9.06445C8.48763 24 8.03042 23.5133 8.0664 22.9376L8.9414 8.93762Z"
                stroke="#333333"
              />
              <path
                d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12"
                stroke="#0F62F0"
              />
            </svg>
          </div>
          <div className={styles.text}>我要卖算力</div>
        </div>
        <div className={styles.item} onClick={() => {
          window.open('/products/server?gotopage=server', '_self')
        }}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M26.5 8L22.905 8C22.3913 8 21.9611 8.38929 21.91 8.9005L21.0901 17.0995C21.0389 17.6107 20.6088 18 20.095 18L9.74406 18C9.30245 18 8.91313 17.7103 8.78623 17.2873L6.38623 9.28735C6.19375 8.64573 6.6742 8 7.34406 8L15.5 8"
                stroke="#333333"
              />
              <path
                d="M12 12.5L13.2929 13.7929C13.6834 14.1834 14.3166 14.1834 14.7071 13.7929L17.5 11"
                stroke="#0F62F0"
              />
              <circle cx="9" cy="22" r="2" fill="#333333" />
              <circle cx="21" cy="22" r="2" fill="#333333" />
            </svg>
          </div>
          <div className={styles.text}>我要买算力</div>
        </div>
        <div className={styles.item} onClick={() => {
          window.open('/informationFilling?gotopage=info', '_self')
        }}>
          <div className={styles.text}>算力券补贴</div>
        </div>
      </div>
      <div className={styles.close} onClick={() => { close() }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default FooterModal;
