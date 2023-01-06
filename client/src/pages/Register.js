import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/actions/userActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function Register() {

  const dispatch = useDispatch()

  function onFinish(values){
    dispatch(userRegister(values))
    console.log(values)
  }

  return (
    <div className='login'>

      <Row gutter={16} className='d-flex align-items-centre'>

        <Col lg={16} className='icn'>
          <img 
          data-aos='slide-left'
          data-aos-duration='1500'
          src="https://media.istockphoto.com/id/1398097353/vector/soccer-player-goalkeeper-standing-with-hands-on-hips-isolated-vector-silhouette-ink-drawing.jpg?s=612x612&w=0&k=20&c=JAL99cqdc1nwydtf3D9LJmYyq-IY34JVdFhL1f8cjZA="/>
          
        </Col>
        <Col lg={8} className='log p-5' >
          <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>

            <h1>Register</h1>
            <hr/>
            <Form.Item name='username' label='Username' rules={[{required:true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{required:true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='cpassword' label='Confirm Password' rules={[{required:true}]}>
              <Input/>
            </Form.Item>

            <button className='btn1 mt-4 mb-3'>Register</button>
            <br/>

            <Link to='/login'>Click Here To Login</Link>

          </Form>
        </Col>

      </Row>

    </div>
  )
}

export default Register
