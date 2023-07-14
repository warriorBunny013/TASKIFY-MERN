import CheckModel from "../models/progress.Model.js"


// Get all checks
export const getChecks = async (req, res) => {
    try{
        const checks = await CheckModel.find();
        res.status(200).json(checks);
    }catch( err){
        res.status(404).json(err)
    }
}

// Save data of the checks in the database
export const saveProgress = async (req, res) => {
    const check = req.body;
    
    const newCheck= new CheckModel(check);
    try{
        await newCheck.save();
        res.status(201).json(newCheck);
    } catch (err){
        res.status(409).json(err);     
    }
}

// Get a checks by id
export const getProgressById = async (req, res) => {
    const check=await CheckModel.findById(req.params.id)
    try{
      res.status(200).json(check)
    }catch(err){
        res.status(500).json(err)
    }
}

// Save data of updated tasks in the database
export const updateProgress= async (req, res) => {
    try{
        const checks=await CheckModel.findByIdAndUpdate(
          req.params.id,
          {$inc:{progress:1}},
          {new:true}
        )
        res.status(200).json(checks)
       }catch(err){
        // next(err)
        res.status(500).json(err)
       }
}

