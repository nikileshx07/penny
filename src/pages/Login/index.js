import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Form, Row } from 'antd'

function Login() {
  const navigate =useNavigate();
  const onFinish=(values)=>{
    console.log("Received values of form:",values)
  }
  return (
    <div className='bg-primary flex items-center justify-center h-screen'>
      <div className='card w-400 p-2'>
      <div className="flex items-center justify-between">
      <h1 className='text-2xl'>PENNY-LOGIN</h1>
      </div>
      <hr/>
          <Form layout='vertical'onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={24}>
          <Form.Item label="E-Mail" name='email'>
            <input type="text"/>
          </Form.Item>
          </Col>
          <Col span={24}>
          <Form.Item label="Password" name='password'>
            <input type="password"/>
          </Form.Item>
          </Col>
        </Row>
        
          <button className='primary-contained-btn w-100' type='submit'>LOGIN</button> 
          <h1 className='text-sm underline mt-2'onClick={()=>navigate("/register")}>
        Not a member?,Click here to register
      </h1>
      </Form>
      </div>
    </div>
  )
}

export default Login;
