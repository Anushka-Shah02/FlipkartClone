import axios from 'axios';
import * as actionTypes from '../constants/cartConstant';
const url='http://localhost:8000';

export const addToCart=(id)=>async(dispatch)=>{
    try{
      const { data } = await axios.get(`${url}/product/${id}`);
      dispatch({type:actionTypes.ADD_TO_CART,payload:data});
    }catch(err){
        console.log('Error while calling add to cart api');
    }
}

export const removeFromCart = (id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}