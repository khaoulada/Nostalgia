import { message } from 'antd';
import axios from 'axios';

export const getAllStadiums=() => async dispatch =>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get("/api/stadiums/getallstadiums")
        dispatch({type: 'GET_ALL_STADIUMS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

export const addStad=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        await axios.post("/api/stadiums/addstad" , reqObj)
        
        dispatch({type: 'LOADING' , payload:false})
        message.success('New stadium added successfully')
        setTimeout(() =>{
         window.location.href='/'
        }, 500)

    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
}