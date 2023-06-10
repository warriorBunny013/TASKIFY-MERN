import TaskModel from "../models/Task.Model.js"


// Get all tasks
export const getTasks = async (req, res) => {
    try{
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    }catch( err){
        res.status(404).json(err)
    }
}

// Save data of the task in the database
export const saveTask = async (req, res) => {
    const task = req.body;
    
    const newTask = new TaskModel(task);
    try{
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err){
        res.status(409).json(err);     
    }
}

// Get a tasks by id
export const getTaskById = async (req, res) => {
    const task=await TaskModel.findById(req.params.id)
    try{
      res.status(200).json(task)
    }catch(err){
        res.status(500).json(err)
    }
}

// Save data of updated tasks in the database
export const updateTask = async (req, res) => {
    try{
        const tasks=await TaskModel.findByIdAndUpdate(
          req.params.id,
          {$set:req.body},
          {new:true}
        )
        res.status(200).json(tasks)
       }catch(err){
        // next(err)
        res.status(500).json(err)
       }
}

// deleting data of tasks from the database
export const deleteTask = async (req, res) => {
   try{
      await TaskModel.findByIdAndDelete(req.params.id);
      res.status(200).json("task has been deleted");
    }catch(err){
    res.status(500).json(err)
}
}