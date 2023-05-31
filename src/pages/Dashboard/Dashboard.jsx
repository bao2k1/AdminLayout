import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import CardTransfer from '../../components/CardTransfer';
import { DollarOutlined } from '@ant-design/icons';
import ChartComponent from '../../components/Chart/Chart';
import LineChart from '../../components/LineChart';

const DashboardWrapper = styled.div``;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="top-dash">
        <Row gutter={24}>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
        </Row>
      </div>
      <div className="chart">
        <Row>
          <Col className="gutter-row" span={10}>
            <ChartComponent />
          </Col>
          <Col className="gutter-row" span={14}>
            <LineChart />
          </Col>
        </Row>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
