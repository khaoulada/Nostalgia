import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function Login() {

  const dispatch = useDispatch()

  function onFinish(values){
    dispatch(userLogin(values))
    console.log(values)
  }

  return (
    <div className='login'>

      <Row gutter={16} className='d-flex align-items-centre'>

        <Col lg={16} className='icn'>
          <img 
          data-aos='slide-right'
          data-aos-duration='1500'
          src="https://media.istockphoto.com/id/1222253813/vector/soccer-player-silhouette-volley-kick.jpg?s=612x612&w=0&k=20&c=R6BGc3MBvytuupPrm2lmAazXH6V-jDuVHv1_oy1Lg04="/>
          
        </Col>
        <Col lg={8} className='log p-5' >
          <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>

            <h1>Login</h1>
            <hr/>
            <Form.Item name='username' label='Username' rules={[{required:true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{required:true}]}>
              <Input/>
            </Form.Item>

            <button className='btn1 mt-2 mb-3'>Login</button>
            <hr/>

            <Link to='/register'>Not registred ? click here to register</Link>

          </Form>
        </Col>

      </Row>

    </div>
  )
}

export default Login
