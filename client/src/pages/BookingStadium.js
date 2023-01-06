import { Row, Col, Divider, DatePicker } from 'antd'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { bookStad } from '../redux/actions/bookingActions'

const { RangePicker } = DatePicker;

function BookingStadium() {

  const dispatch = useDispatch()
  const [stadium, setstadium] = useState({})
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [totalHours, setTotalHours] = useState(0)

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format('MM DD YYYY HH:mm'))
    setTo(moment(values[1]).format('MM DD YYYY HH:mm'))

    setTotalHours(values[1].diff(values[0], 'hours'))
  }

  function bookNow() {
    const reqObj = {
      user: JSON.parse(localStorage.getItem('user'))._id,
      stadium: stadium._id,
      totalHours,
      bookedTimeSlots: {
        from,
        to
      }
    }
    dispatch(bookStad(reqObj))
  }


  return (
    <DefaultLayout>
      <Row justify='centre' className='d-flx align-items-center' style={{ minHeight: '90vh' }}>
        <Col lg={10} sm={24} xs={24}>
          <img src='https://media.foot-national.com/18/2022/07/photo_article/787455/310897/1200-L-anglet-une-7e-recrue-annonce-par-le-club.jpg' className='stadimg2 bs1' />
        </Col>

        <Col lg={10} sm={24} xs={24}>
          <Divider type='horizontal'>Informations sur le terrain</Divider>
          <div style={{ textAlign: 'right' }}>
            <h3 className='nom'>Master Foot Marrakech</h3>
            <p>Master Foot est un club de football nouvelle génération doté de 5 terrains Foot 5 et 3 terrains Foot 7.Situés à 10 minutes du centre ville de Marrakech,nous offrons un cadre de jeu authentique face aux montagnes de l Atlas.Nos installations incluent des vestiaires sécurisés, un café-snack pour vous restaurer entre les heures de matchs, une infirmerie et un parking sécurisé.</p>
            <p>Prix de location par heure : 50 DH</p>
            <p>Capacité : 7</p>
            <p>Téléphone : +212 675 438 789</p>
          </div>

          <Divider type='horizontal'>Sélécter le nombre d'heure</Divider>
          <RangePicker showTime={{ format: 'HH:mm' }} format='MM DD YYYY HH:mm' onChange={selectTimeSlots} />

          <div style={{ textAlign: 'right' }}>
            <p>total d'heures : <b>{totalHours}</b></p>
            <p>Prix de location par heure : <b>50 DH</b></p>
            <h3>Total : {totalHours * 50} DH</h3>


            <button className='btn1' onClick={bookNow}>Réserver</button>


          </div>

        </Col>
      </Row>

    </DefaultLayout>
  )

}

export default BookingStadium
