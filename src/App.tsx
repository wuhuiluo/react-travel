import React from "react";
import styles from "./App.module.css";
import { Header, Footer, Carousel, SideMenu } from "./components";
import { Row, Col, Typography } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div>
              <SideMenu />
            </div>
          </Col>
          <Col span={18}>
            <div>
              <Carousel />
            </div>
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          slideImage={slideImage}
          products={productList1}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
