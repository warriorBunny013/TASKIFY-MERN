import mongoose from 'mongoose';
// const { Schema } = mongoose;

const CheckSchema=new mongoose.Schema({
    complete:{
        type:Number,
    },
    createdAt: {type: Date, default: Date.now}
    
})

export default mongoose.model("Check",CheckSchema);