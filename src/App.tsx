import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
function App() {
  return (
    <div className={styles.App}>
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div></div>

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
      </div>
    </div>
  );
}

export default App;
