import React from "react";
import { Header, Footer } from "../../components";
import styles from "./MainLayout.module.css";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
