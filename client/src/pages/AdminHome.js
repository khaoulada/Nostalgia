import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllStadiums } from '../redux/actions/stadActions'
import { Row, Col, DatePicker } from 'antd'
import { Link, useParams } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const { RangePicker } = DatePicker;

function AdminHome() {
    const { stadiums } = useSelector(state => state.stadReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalStadiums, setTotalstadiums] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllStadiums())
    })

    useEffect(() => {
        setTotalstadiums(stadiums)
    }, [stadiums])


    return (
        <DefaultLayout>

            <Row justify='center' glutter={16}>
                <Col lg={9} sm={24}>
                <div className='textbtn'>
                <button className='btn1'><a href="/addstad">Ajouter Terrain</a></button>
            </div>
                </Col>
            </Row>

            <Row gutter={30} className='row mt-5'>

                {totalStadiums.map(stadium => {
                    return <Col lg={9} sm={24} xs={24} className='col'>

                        <div className='stad p-2 bs1 mt-3'>
                            <img src={stadium.image} className='stadimg' />

                            <div className='stad-content d-flex align-items-center justify-content-between'>
                                <div>
                                    <p>{stadium.name}</p>
                                    <p>{stadium.rentperhour} Rent Per Hour</p>
                                </div>

                                <div >
                                    <Link to={'/editstad/${stadium._id}'}>
                                        <EditOutlined className='editbtn' style={{ color: 'green', cursor: 'pointer' }} />
                                    </Link>

                                    <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
                                </div>

                            </div>
                        </div>
                    </Col>
                })}
            </Row>
        </DefaultLayout>
    )
}

export default AdminHome
