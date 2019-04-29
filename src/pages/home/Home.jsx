import React from 'react';
import { Card, Col, Row } from 'antd';

const Home = () => (
  <div>
    <Row gutter={16}>
      <Col span={24}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={6}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title="Card title"
          className="margin-bottom-16"
          bordered={false}
        >
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

export default Home;
