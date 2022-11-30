// import { useSelector,useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getProductDetails } from '../../redux/actions/productActions';
// import { Box,makeStyles, Table, TableBody, TableCell,TableRow,Typography,Grid } from '@material-ui/core';
// import clsx from 'clsx';
// import { LocalOffer as Badge } from '@material-ui/icons';
// import ActionItems from './ActionItems';

// const useStyle=makeStyles(theme=>({
//     component:{
//       marginTop:55,
//       background:'#f2f2f2'
//     },
//     container:{
//     //    margin:'0 80px',
//        background:'#fff',
//        display:'flex',
//        [theme.breakpoints.down('md')]:{
//           margin:0
//        } 
//     },
//     rightContainer:{
//         marginTop:50,
//         '&>*':{
//            marginTop:10 
//         }
//     },
//     smallText:{
//         fontSize:14,
//         verticalAlign:'baseline',
//         '&>*':{
//            fontSize:14,
//            marginTop:10 
//         }
//     },
//     greyText:{
//         color:'#878787'
//     },
//     price:{
//         fontSize:20
//     },
//     badge:{
//         fontSize:14,
//         marginRight:10,
//         color:'#00CC00'
//     }
// }));

// const DetailView = ({match})=>{
//     const classes=useStyle();
//     const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
//     const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

//     const{ product }=useSelector(state=>state.getProductDetails);
     
//     const date=new Date(new Date().getTime()+(5*24*60*60*1000));
//     const dispatch=useDispatch();

//     useEffect(()=>{
//       dispatch(getProductDetails(match.params.id));
//     },[dispatch])

//     return(
//        <Box className={classes.component}> 
//        { product && Object.keys(product).length &&
//         <Grid container className={classes.container}>
//             <Grid item lg={4} md={4} sm={8} xs={12} style={{minWidth:'40%'}}>
//                   <ActionItems product={product}/>
//             </Grid>
//             <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
//               <Typography>{product.title.longTitle}</Typography>
//               <Typography className={clsx(classes.smallText,classes.greyText)}>
//                   8 Ratings & 1 Review
//                   <span><img src={fassured} style={{width:77,marginLeft:20}} alt="" /></span>
//                   </Typography>
//                   <Typography>
//                       <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
//                       <span className={classes.greyText}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
//                       <span style={{color:'#388E3C'}}>{product.price.discount} off</span>
//                   </Typography>
//                   <Typography style={{fontWeight:600,marginTop:20}}>Available Offers</Typography>
//                <Box className={classes.smallText}>
//                 <Typography><Badge className={classes.badge}/>Special Price Get extra 10% off(price inclusive of discount)</Typography>
//                 <Typography><Badge className={classes.badge}/>Bank offers 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
//                 <Typography><Badge className={classes.badge}/>Bank offer flat ₹100off on first order</Typography>
//                 <Typography><Badge className={classes.badge}/>Combo offer Buy 2items save 5%;Buy 3 or more save 10% on all products</Typography>
//                </Box> 

//                <Table>
//                   <TableBody>
//                     <TableRow className={classes.smallText}>
//                         <TableCell className={classes.greyText}>Delivery</TableCell>
//                         <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40 </TableCell>
//                     </TableRow>

//                     <TableRow className={classes.smallText}>
//                         <TableCell className={classes.greyText}>Warranty</TableCell>
//                         <TableCell>No Warranty</TableCell>
//                     </TableRow>

//                     <TableRow className={classes.smallText}>
//                         <TableCell className={classes.greyText}>Seller</TableCell>
//                         <TableCell className={classes.smallText}>
//                             <span style={{color:'#2874f0'}}>SuperComNet</span>
//                             <Typography>GST Invoice Available</Typography>
//                             <Typography>14 Days Return Policy</Typography>
//                             <Typography>View more sellers starting from ₹300</Typography>
//                         </TableCell>
//                     </TableRow>

//                     <TableRow>
//                         <TableCell colspan={2}>
//                           <img src={sellerURL} style={{width:390}} alt=""/>
//                         </TableCell>
//                     </TableRow>

//                     <TableRow className={classes.smallText}>
//                         <TableCell className={classes.greyText} >Description</TableCell>
//                         <TableCell>{product.description}</TableCell>
//                     </TableRow>
//                   </TableBody>  
//                 </Table> 
//             </Grid>  
//         </Grid>
//         }
//        </Box> 
//     )
// }

// export default DetailView;

import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { useSelector , useDispatch} from "react-redux";
import { getProductDetails } from '../../redux/actions/productActions';
import { useEffect } from "react";
import clsx from 'clsx';
import ProductDetail from './ProductDetail';
import ActionItems from "./ActionItems";

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
       // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: '0 ',
            padding: '10px'
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));

const DetailView = ({match}) => {
    const classes = useStyles();
    const {product} =  useSelector(state => state.getProductDetails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && match.params.id !== product.id)   
            dispatch(getProductDetails(match.params.id));
    }, [dispatch, product, match]);

    return(
        <Box className={classes.component}>
            {  product && Object.keys(product).length &&
                <Grid container className={classes.container}> 
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItems product={product} />
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                        8 Ratings & 1 Reviews
                        <span><img alt="" src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <ProductDetail product={product} />
                </Grid>
            </Grid>
            }
        </Box>
    );
}

export default DetailView;