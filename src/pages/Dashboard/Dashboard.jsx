import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import CardTransfer from '../../components/CardTransfer';
import { DollarOutlined } from '@ant-design/icons';
import ChartComponent from '../../components/Chart/Chart';
import LineChart from '../../components/LineChart';
import RadarChartComponent from 'components/RadarChart/RadaChart';
import TopUser from 'components/TopUsers/TopUser';

const DashboardWrapper = styled.div`
/* display: flex;
flex-direction:row; */
width: 100%;
.chart{
  margin:0 auto;
  .chart-item{
    display: flex;
    justify-content:center;
    margin:20px 0;
    background-color:#fff;
    border-radius:20px;
    padding:40px 10px;
    
  }
  .chart-item-2{
    margin-left:auto;
  }
  
}
.top-user{
    width:100%;
    .top-user-item{
      background-color:#fff;
      border-radius:20px;
      padding:20px 20px;
    }
    .top-user-item-2{
      margin-left:auto;
    }
  }
`;

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
        <Row gutter={0} className='chart'>
          

            <Col className="chart-item gutter-row" span={10}>
              <ChartComponent />
            </Col>
            <Col className="chart-item chart-item-2 gutter-row" span={13}>
              <LineChart />
            </Col>
         
        </Row>
        
      </div>
      <Row gutter={0} className='top-user'>
          

            <Col className="top-user-item gutter-row" span={16}>
              <h1>Top Users</h1>
              <TopUser/>
            </Col>
            <Col className="top-user-item top-user-item-2 gutter-row" span={7}>
             <RadarChartComponent/>
            </Col>
         
        </Row>
      {/* <div className="chart" gutter={48}>
        <Row >
          <Col className="chart-item gutter-row" span={10}>
            <ChartComponent />
          </Col>
          <Col className="chart-item gutter-row" span={14}>
            <LineChart />
          </Col>
        </Row>
      </div> */}
    </DashboardWrapper>
  );
};

export default Dashboard;
