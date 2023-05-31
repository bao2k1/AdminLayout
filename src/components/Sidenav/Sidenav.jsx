import { Menu } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const SideNavWrapper = styled.div`
  .logo-sidebar{
    color:#fff;
    font-size:26px;
    font-weight:600;
    font-family:'Times New Roman', Times, serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:60px;
  }
`
const Sidenav = ({items}) => {
  return(

  <SideNavWrapper>
        
        <div  className="logo-sidebar">DarkB Admin</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </Menu.Item>
        ))}
        </Menu>
    </SideNavWrapper>
  )
}
export default Sidenav
