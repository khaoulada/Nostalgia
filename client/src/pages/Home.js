import React , {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllStadiums } from '../redux/actions/stadActions'
import { Row , Col , Divider , DatePicker } from 'antd'
import { Link, useParams } from 'react-router-dom';
import moment from 'moment'

const { RangePicker } = DatePicker;

function Home() {
  const {stadiums} = useSelector(state=>state.stadReducer)
  const {loading} = useSelector(state=>state.alertsReducer)
  const [totalStadiums , setTotalstadiums] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStadiums())
  })

  useEffect(() => {
    setTotalstadiums(stadiums)
  },[stadiums])

  function setFilter(values){

    var selectedFrom = moment(values[0] , 'MM DD YYYY HH:mm')
    var selectedTo = moment(values[1] , 'MM DD YYYY HH:mm')
    var temp=[]

    for(var stadium of totalStadiums){
      if(stadium.bookedTimeSlots.length==0){
        temp.push(stadium)
      }
      else{
        for(var booking of stadium.bookedTimeSlots){
          if(selectedFrom.isBetween(booking.from , booking.to) || 
          selectedFrom.isBetween(booking.from , booking.to) || 
          moment(booking.from).isBetween(selectedFrom , selectedTo))
          {

          }
          else{
            temp.push(stadium)
          }
        }
      }
    }

    setTotalstadiums(temp)

  }

 

  return (
    <DefaultLayout>

      <Row className='mt-3' justify='center'>
      <Col lg={20} sm={24} className='d-flex justify-content-left'>
      <RangePicker showTime={{format:'HH:mm'}} format='MM DD YYYY HH:mm' onChange={setFilter} />
      </Col>
      </Row>

      <Row gutter={30} className='row mt-5'>

        {totalStadiums.map(stadium=>{
          return <Col lg={9} sm={24} xs={24} className='col'>

            <div className='stad p-2 bs1 mt-3'>
              <img src={stadium.image} className='stadimg'/>

              <div className='stad-content d-flex align-items-center justify-content-between'>
                <div>
                  <p>{stadium.name}</p>
                  <p>{stadium.rentperhour} Rent Per Hour</p>
                </div>

                <div>
                  <Link to={'/bookingstadium'} className='btn1 mt-2'>
                    Book Now
                  </Link>
                </div>

              </div>
            </div>
          </Col>
        })}
      </Row>
    </DefaultLayout>
  )
}

export default Home
