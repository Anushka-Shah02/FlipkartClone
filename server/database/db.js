import mongoose from 'mongoose';

const Connection=async(username,password)=>{
    // const URL=`mongodb+srv://${username}:${password}@ecommerceweb.0liev.mongodb.net/FLIPKARTAPP?retryWrites=true&w=majority`;

    const URL=`mongodb+srv://anushka02:hNzWlJzdYYgzvdGs@ecommerceweb.0liev.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ 
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false 
        });
        console.log('Connection Successfull');
    }catch(err){
        console.log('Connection failed',err.message);
    }
}

export default Connection;
