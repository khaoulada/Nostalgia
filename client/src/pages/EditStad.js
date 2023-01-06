import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Col, Row, Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { addStad } from '../redux/actions/stadActions'

function EditStad() {

    const dispatch = useDispatch()

    function onFinish(values){
        values.bookedTimeSlots=[]
        dispatch(addStad(values))
        console.log(values)
    }

  return (
    <DefaultLayout>
      
      <Row justify='center mt-5'>
        <Col lg={12} sm={24}>
            <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                <h3>Modifier Terrain</h3>
                <h3/>
                <Form.Item name='name' label='Nom du Terrain' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='image' label='Image URL' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='rentperhour' label='Prix par heure' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='capacity' label='Capacité' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='phonenumber' label='Numéro de téléphone ' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <div className='textbtn'>
                <button className='btn1'>Modifier Terrain</button>
                </div>
                
            </Form>
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default EditStad
