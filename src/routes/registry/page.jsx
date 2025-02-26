import { useState } from "react";
import { Tabs, Form, Input, Checkbox } from "antd";
import clsx from "clsx";
import {Tips} from '../login/page'
import logo from "../login/img/logo.png";
import styles from "./index.module.less";

const LoginForm = ({ activite }) => {
  const [isCheck, setCheck] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [time,setTime] = useState(0);
  const [showTip, setTip] = useState(false);
  const obj = {
    1: {
      accountPlaceholder: "请输入邮箱地址",
      passwordPlaceholder: "请输入密码",
    },
    2: {
      accountPlaceholder: "请输入您的手机号",
      codePlaceholder: "请输入验证码",
      passwordPlaceholder: "请输入密码",
    },
  };
  return (
    <div className={styles.formWrapper}>
      {showTip &&  <Tips text={'注册成功'} />}
      <Form>
        <Form.Item>
          <Input
            onChange={(e) => {
              setAccount(e.target.value);
            }}
            className={styles.myInput}
            placeholder={obj[activite]["accountPlaceholder"]}
          />
        </Form.Item>
        {activite === "2" && (
          <Form.Item>
            <div className={styles.inputBox}>
              <Input
                className={styles.myInput}
                placeholder={obj[activite]["codePlaceholder"]}
              />
              <div
                className={clsx(styles.code, time && styles.disabled)}
                onClick={() => {
                  if (time > 0) {
                    return;
                  }
                  let v = 60;
                  let timer = setInterval(() => {
                    if (v >= 0) {
                      setTime(v--);
                    }
                    if (v === -1) {
                      clearInterval(timer);
                    }
                  }, 1000);
                }}
              >
                {time > 0 ? `重新发送(${time})` : "获取验证码"}
              </div>
            </div>
          </Form.Item>
        )}
        <Form.Item className={styles.myItem}>
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={styles.myInput}
            placeholder={obj[activite]["passwordPlaceholder"]}
          />
        </Form.Item>

        <Form.Item className={styles.btnBox}>
          <div
            className={styles.btn}
            onClick={() => {
              console.log(account, password, isCheck);
              setTip(true);
              setTimeout(() => {
                setTip(false);
              }, 1000);
            }}
          >
            注册
          </div>
        </Form.Item>
      </Form>
      <div className={styles.agreement}>
        <Checkbox
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
        >
          <span>我已阅读并同意 服务协议、隐私声明和账号协议</span>
        </Checkbox>
      </div>
    </div>
  );
};
const Login = () => {
  const [activite, setAcitvite] = useState("1");

  return (
    <div className={styles.login}>
      <div>
        <div className={styles.loginWrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.tabs}>
            <Tabs
              activeKey={activite}
              items={[
                {
                  key: "1",
                  label: "邮箱注册",
                  children: <LoginForm activite={activite} />,
                },
                {
                  key: "2",
                  label: "手机号注册",
                  children: <LoginForm activite={activite} />,
                },
              ]}
              onChange={(e) => {
                setAcitvite(e);
              }}
              indicator={{
                size: (origin) => origin - 16,
                align: "center",
              }}
            />
          </div>
          <div className={styles.loginFooter}><a href="/login">已有帐号，立即登录</a></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
