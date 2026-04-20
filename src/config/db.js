const mongoose=require("mongoose");

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("server is conneced to DB");
    }
    catch(err){
        console.log("Error connecting to DB");
        process.exit(1); 
    }
}
module.exports=connectToDB;