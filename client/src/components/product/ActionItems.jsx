import { Box,Button,makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import { ShoppingCart as Cart,FlashOn as Flash } from "@material-ui/icons";
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { payUsingPaytm } from "../../service/api";
import { post } from '../../utils/paytm';

const useStyle=makeStyles(theme=>({
    leftContainer:{
       padding:'40px 0 0 80px',
       [theme.breakpoints.down('md')]:{
           padding:'20px 40px'
       }
    },
    image:{
       padding:'15px 20px ' ,
       border:'1px solid #f0f0f0',
       width:'95%'
    },
    button:{
       height:50,
       width:'46%',
       borderRadius:2
    },
    addToCart:{
        background:'#ff9f00',
        color:'#fff',
        marginRight:10
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff'
    }
}));
const ActionItems=({product})=>{
    const classes=useStyle();
    const history=useHistory();

    const dispatch=useDispatch();
    const addItemToCart = () =>{
        dispatch(addToCart(product.id));
        history.push('/cart');
    }
    const buyNow=async()=>{
      let response = await payUsingPaytm({ amount:500,email:'shahanu@gmail.com'});
      let information={
          action:'http://securegw-stage.paytm.in/order/process',
          params:response
      } 
      post(information);
    }
   return(
     <Box className={classes.leftContainer}>
         <img src={product.detailUrl} alt="" className={classes.image}/><br/>
         <Button onClick={()=>addItemToCart()} variant="contained" className={clsx(classes.button , classes.addToCart)}><Cart/>Add to Cart</Button>
         <Button variant="contained" className={clsx(classes.button,classes.buyNow)} onClick={()=>buyNow()}><Flash/>Buy Now</Button>
     </Box>
   )
}

export default ActionItems;