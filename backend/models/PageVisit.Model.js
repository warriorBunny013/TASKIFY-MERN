import mongoose from 'mongoose';
// const { Schema } = mongoose;

const PageVisitSchema=new mongoose.Schema({
    counter:{
        type:Number,
        required:true
    },
    createdAt: {type: Date, default: Date.now}
    
})

export default mongoose.model("pagevisits",PageVisitSchema);