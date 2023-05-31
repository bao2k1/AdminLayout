import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme ,Row,Col} from 'antd';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HeaderComponent from '../components/Header';
import Footer from '../components/Footer/Footer';
import Dashboard from '../pages/Dashboard';
import Tables from '../pages/Tables';
import Sidenav from "../components/Sidenav";
import Users, { AddUser, UpdateUser } from 'pages/Users';
const { Header, Content, Sider } = Layout;
const labels=[
  "DashBoard",
  "Tables",
  "Billing",
  "Users",
  "Profile",
  "SignIn",
  "SignUp"
]
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
  link: `/${labels[index].toLowerCase().replace(" ", "-")}`, // Generate the link based on the label
}));
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
function MainLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          
        }}
        // width={200}
      >
         <Sidenav items={items}/>
       
      </Sider>
    
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          height:"100px"
        }}
      >
        <HeaderComponent/>
      </Header>
      <Content
        style={{
          margin: '24px 20px 0',
          overflow: 'initial',
        }}
      >
       
         <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/inventory" element={<Dashboard />}></Route>
            <Route path="/orders" element={<Dashboard />}></Route>
            <Route path="/tables" element={<Tables />}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/users/add" element={<AddUser/>}></Route>
            <Route path="/users/update/:id" element={<UpdateUser  />} />


          </Routes>
      </Content>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
      <Footer/>
    </Layout>
  </Layout>
      );

  
}

export default MainLayout;
