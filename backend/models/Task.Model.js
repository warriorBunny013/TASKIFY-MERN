import mongoose from 'mongoose';
// const { Schema } = mongoose;

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    desc:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    cat:{
        type:String,
        required:true,
    },
    mark:{
        type:Boolean,
        default:false,
    },
    createdAt: {type: Date, default: Date.now}
    
})

export default mongoose.model("Tasks",TaskSchema);