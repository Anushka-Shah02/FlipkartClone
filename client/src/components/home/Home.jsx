import { Box,makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSection from "./MidSection";
// import { products } from '../../constants/data';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';

const useStyle=makeStyles(theme=>({
    component:{
        padding:10,
        background:'#f2f2f2'
    },
    leftComponent:{
        width:'83%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
    },
    rightWrapper:{
       background:'#ffffff',
       padding:5,
       margin:'12px 0 0 10px',
       width:'17%',
       [theme.breakpoints.down('md')]:{
           display:'none'   
       }
    }
}));

const Home=()=>{
    const classes=useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const { products }= useSelector(state=>state.getProducts);
    const dispatch=useDispatch();

    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch])
    
   return(
       <div>
          <NavBar/>
          <Box className={classes.component}>
           <Banner/>
           <Box style={{display:'flex'}}>
               <Box className={classes.leftComponent}>
                 <Slide
                  timer={true}
                  title="Deal of the Day"
                  products={products}
                 />
               </Box>
               <Box className={classes.rightWrapper}>
                  <img src={adURL} style={{width:230}} alt=""/>  
               </Box>
           </Box>
           <MidSection/>
           <Slide 
           timer={false}
           title="Discounts for You"
           products={products}
           />
           <Slide 
           timer={false}
           title="Suggested Items"
           products={products}
           />
           <Slide 
           timer={false}
           title="Top Selections"
           products={products}
           />
           <Slide 
           timer={false}
           title="Recommended Items"
           products={products}
           />
           <Slide 
           timer={false}
           title="BestSellers"
           products={products}
           />
          </Box>
       </div>
   )
}

export default Home;