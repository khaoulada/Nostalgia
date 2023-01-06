import { message } from 'antd';
import axios from 'axios';

export const bookStad=(reqObj) => async dispatch =>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        await axios.post("/api/bookings/bookStad" , reqObj)
        
        dispatch({type: 'LOADING' , payload:false})
        message.success('Stadium booked successfuly')
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
        message.error('Something went wrong , please try later')
    }

};

export const getAllBookings=() => async dispatch =>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get("/api/bookings/getallbookings")
        dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}