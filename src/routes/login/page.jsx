import { useState } from "react";
import { Tabs, Form, Input, Checkbox } from "antd";
import clsx from "clsx";
import logo from "./img/logo.png";
import successIcon from "./img/success.png";
import styles from "./index.module.less";

export const Tips = ({text}) => {
  return (
    <div className={styles.tip}>
      <img src={successIcon} alt="" />
      <div className={styles.text}>{text}</div>
    </div>
  );
};
const LoginForm = ({ activite }) => {
  const [isCheck, setCheck] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showTip, setTip] = useState(false);
  const [time,setTime] = useState(0);
  const obj ={
    '1':{
      accountPlaceholder:'请输入用户名',
      passwordPlaceholder:'请输入密码'
    },
    '2':{
       accountPlaceholder:'请输入您的手机号',
        passwordPlaceholder:'请输入验证码'
    }
  }

  return (
    <div className={styles.formWrapper}>
     {showTip &&  <Tips text={'登录成功'} />}
      <Form>
        <Form.Item>
          <Input
            onChange={(e) => {
              setAccount(e.target.value);
            }}
            className={styles.myInput}
            placeholder={obj[activite]['accountPlaceholder']}
          />
        </Form.Item>
        <Form.Item className={styles.myItem}>
          {activite === '1' &&<Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={styles.myInput}
            placeholder={obj[activite]['passwordPlaceholder']}
          />}
          {activite==='2'&&<div className={styles.inputBox}>
            <Input className={styles.myInput} placeholder={obj[activite]['passwordPlaceholder']}/>
            <div className={clsx(styles.code, time && styles.disabled)} onClick={()=>{
              if(time>0){
                return
              }
              let v = 60;
              let timer = setInterval(() => {
                if(v>=0){
                  setTime(v--)
                }
                if(v===-1){
                  clearInterval(timer)
                }


              }, 1000);
            }}>
              {time>0?`重新发送(${time})`:'获取验证码'}
            </div>
          </div>}
        </Form.Item>
        <Form.Item>
          <div className={styles.fogetPd}>忘记密码</div>
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
            登录
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
      <div className={styles.wChartLogin}>微信登录</div>
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
                  label: "帐号密码登录",
                  children: <LoginForm activite={activite} />,
                },
                {
                  key: "2",
                  label: "手机号登录",
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
          <div className={styles.loginFooter}><a href="/registry">没有帐号，点击注册</a></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
