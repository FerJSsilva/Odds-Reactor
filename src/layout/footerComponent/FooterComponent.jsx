import React from 'react';
import { Layout, Col, Row, Icon } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer>
    <Row>
      <Col span={8} offset={8} style={{ textAlign: 'center' }}>
        Odds Reactor ©2018 Created by FerJSsilva
      </Col>
      <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Icon type="tags" />
        <span>version 0.1</span>
      </Col>
    </Row>
  </Footer>
);

export default FooterComponent;
