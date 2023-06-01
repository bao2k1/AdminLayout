import React, { useState } from 'react'
import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import { Button, Table } from 'antd';
import Excel from 'components/Excel';
import styled from 'styled-components';
const primaryButtonStyle = { backgroundColor: '#1890ff' };
const dangerButtonStyle = { backgroundColor: '#ff4d4f' };
const customButtonStyle = { backgroundColor: '#fadb14', color: '#000000' };

const ProductsTable=styled.div`
    .custom-row {
      height: 70px; /* Set the desired height for the rows */
    }
    .btn-users {
      width: 70px;
      height:40px;
      margin-right:10px;
      
    }
    .btn-export{
      width: 120px;
            height:40px;
            margin-right:10px;
            border:none;
            background-color:green;
            color:white;
    }
    .top-table-users {
      width: 100%;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
  `
const Products = () => {
    const columns = [
        {
          title: 'ID',
          width: 100,
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
        },
        {
          title: 'Name',
          width: 150,
          dataIndex: 'title',
          key: 'title',
          fixed: 'left',
        },
       
        
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          width: 150,
        },
      
       
        {
          title: 'Discount',
          dataIndex: 'discountPercentage',
          key: 'discountPercentage',
          width: 150,
        },
        
        
        {
          title: 'Status',
          dataIndex: 'address',
          key: '4',
          width: 150,
          render: (status) => {
            if (status === "1") {
              return 'Online';
            } else if (status === "2") {
              return 'Offline';
            } else {
              return "Offline"; // Handle other cases if needed
            }
          },
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 200,
          render: (_, user) => (
            
            <div>
            <Button  className=' btn-delete btn-users' type="primary" danger
            id={user.id}
            
           
            >Xóa</Button>
            <Button className='btn-users'
           style={customButtonStyle}
          >Sửa</Button>
      
            </div>
            
          
          ),
        },
      ];
      
      // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
   const {  products } = productList;
      
// console.log(products)
  
useEffect(() => {
  dispatch(listProduct());
  // setData(products || []);
}, [dispatch]);
  

  return (
    <ProductsTable>
    <div className="top-table-users">

<h1>Products List</h1>
<div className="btn-add">
{/* <Excel
  fileName="export-user"
  data={[
    {
      columns: [
        {
          title: "User Id",
          dataIndex: "id",
          width: 5,
        },
        {
          title: "Name",
          dataIndex: "name",
          width: 20,
        },
        {
          title: "Email",
          dataIndex: "email",
          width: 50,
        },
      ],
      data: data,
      tabName: "info",
    },
    {
      columns: [
        {
          title: "Role",
          dataIndex: "role",
          width: 30,
        },
        {
          title: "Phone",
          dataIndex: "phone",
          width: 30,
        },
      ],
      data: data,
      tabName: "contact",
    },
  ]}
>
  <Button className='btn-export'>Export users</Button>
</Excel> */}
 <Button  className='btn-users' type="primary" style={primaryButtonStyle}>Thêm</Button>
</div>
</div>
      <Table
  columns={columns}
  dataSource={products}
  columnWidth={40}
  rowClassName={() => 'custom-row'}
  scroll={{
  x: 1500,
  y:400,
}}
/>
    </ProductsTable>
  )
}
export default Products
