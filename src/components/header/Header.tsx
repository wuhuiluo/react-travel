import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import {
  addLanguageCreator,
  changeLanguageCreator,
} from "../../redux/language/languageActions";
import { userSlice } from "../../redux/user/slice";
interface JwtPayload extends DefaultJwtPayload {
  username: string;
}

export const Header: React.FC = () => {
  const history = useHistory();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const jwt = useSelector((s) => s.user.token);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt);
      setUsername(token.username);
    }
  }, [jwt]);

  const menuClickHandler = (e) => {
    if (e.key === "new") {
      // store订阅处理函数
      // const action = {
      //   type: "add_language",
      //   payload: { name: "新语言", code: "new_lang" },
      // };
      // const action = addLanguageCreator("新语言", "new_lang");
      // store.dispatch(action);
      // this.props.addLanguage("新语言", "new_language");
      dispatch(addLanguageCreator("新语言", "new_language"));
    } else {
      // const action = {
      //   type: "change_language",
      //   payload: e.key,
      // };
      // const action = changeLanguageCreator(e.key);
      // store.dispatch(action);
      // this.props.changeLanguage(e.key);
      dispatch(changeLanguageCreator(e.key));
    }
  };

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
    history.push("/");
    window.location.reload(false);
  };
  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map((l) => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                })}
                <Menu.Item key={"new"}>
                  {t("header.add_new_language")}
                </Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>

          {jwt ? (
            <Button.Group className={styles["button-group"]}>
              <span>
                {t("header.welcome")}
                <Typography.Text>{username}</Typography.Text>
              </span>
              <Button onClick={() => history.push("/shoppingCart")}>
                {t("header.shoppingCart")}
              </Button>
              <Button onClick={onLogOut}>{t("header.signOut")}</Button>
            </Button.Group>
          ) : (
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => history.push("/signIn")}>
                {t("header.signin")}
              </Button>
              <Button onClick={() => history.push("/register")}>
                {t("header.register")}
              </Button>
            </Button.Group>
          )}
        </div>
      </div>

      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title className={styles.title} level={3}>
            {t("header.title")}
          </Typography.Title>
        </span>
        <Input.Search
          className={styles["search-input"]}
          placeholder={"请输入旅游目的地、主题、或关键字"}
          onSearch={(keywords) => {
            history.push(`/search/${keywords}`);
          }}
        ></Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
        <Menu.Item key={2}>{t("header.weekend")}</Menu.Item>
        <Menu.Item key={3}>{t("header.group")}</Menu.Item>
        <Menu.Item key={4}>{t("header.backpack")}</Menu.Item>
        <Menu.Item key={5}>{t("header.private")}</Menu.Item>
        <Menu.Item key={6}>{t("header.cruise")}</Menu.Item>
        <Menu.Item key={7}>{t("header.hotel")}</Menu.Item>
        <Menu.Item key={8}>{t("header.theme")}</Menu.Item>
        <Menu.Item key={9}>{t("header.custom")}</Menu.Item>
        <Menu.Item key={10}>{t("header.study")}</Menu.Item>
        <Menu.Item key={11}>{t("header.visa")}</Menu.Item>
        <Menu.Item key={12}>{t("header.enterprise")}</Menu.Item>
        <Menu.Item key={13}>{t("header.high_end")}</Menu.Item>
        <Menu.Item key={14}>{t("header.outdoor")}</Menu.Item>
        <Menu.Item key={15}>{t("header.insurance")}</Menu.Item>
        <Menu.Item key={16}>{t("header.local")}</Menu.Item>
      </Menu>
    </div>
  );
};
