import React from 'react';
import { Layout, Col, Row, Icon } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ backgroundColor: '#FAFAFA' }}>
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
        Odds Reactor ©2018 Created by FerJSsilva
        <br/>
        version 0.1
      </Col>
    </Row>
  </Footer>
);

export default FooterComponent;
