import React from "react";
import styles from "./ShoppingCart.module.css";
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col, Affix } from "antd";
export const ShoppingCartPage = () => {
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}></div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}></div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
