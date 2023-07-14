import mongoose from 'mongoose';
// const { Schema } = mongoose;

const ProgressSchema=new mongoose.Schema({
    progress:{
        type:Number,
    },
    createdAt: {type: Date, default: Date.now}
    
})

export default mongoose.model("progress",ProgressSchema);