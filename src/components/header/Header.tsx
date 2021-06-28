import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
// import { useSelector } from "../../redux/hooks";
// import { useDispatch } from "react-redux";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  // const language = useSelector((state) => state.language);
  // const lanuageList = useSelector((state) => state.languageList);
  // const dispatch = useDispatch();
  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>

          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => history.push("signIn")}>登陆</Button>
            <Button onClick={() => history.push("register")}>注册</Button>
          </Button.Group>
        </div>
      </div>

      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title className={styles.title} level={3}>
            React 携程网
          </Typography.Title>
        </span>
        <Input.Search
          className={styles["search-input"]}
          placeholder={"请输入旅游目的地、主题、或关键字"}
        ></Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key={4}>自由行</Menu.Item>
        <Menu.Item key={5}>私家团</Menu.Item>
        <Menu.Item key={6}>游轮</Menu.Item>
        <Menu.Item key={7}>酒店+景点</Menu.Item>
        <Menu.Item key={8}>主题游</Menu.Item>
        <Menu.Item key={9}>定制游</Menu.Item>
        <Menu.Item key={10}>游学</Menu.Item>
        <Menu.Item key={11}>签证</Menu.Item>
        <Menu.Item key={12}>企业游</Menu.Item>
        <Menu.Item key={13}>高端游</Menu.Item>
        <Menu.Item key={14}>爱玩户外</Menu.Item>
        <Menu.Item key={15}>保险</Menu.Item>
        <Menu.Item key={16}>当地玩乐</Menu.Item>
      </Menu>
    </div>
  );
};
