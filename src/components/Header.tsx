import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
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
          >
            语言
          </Dropdown.Button>

          <Button.Group className={styles["button-group"]}>
            <button>登陆</button>
            <button>注册</button>
          </Button.Group>
        </div>
      </div>

      <Layout.Header className={styles["main-header"]}>
        <img src={logo} className={styles["App-logo"]} />
        <Typography.Title className={styles.title} level={3}>
          React 旅游网
        </Typography.Title>
        <Input.Search
          className={styles["search-input"]}
          placeholder={"请输入旅游目的地、主题、或关键字"}
        ></Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"}>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
      </Menu>
    </div>
  );
};
