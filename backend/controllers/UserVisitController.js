import UserVisitModel from "../models/UserVisit.Model.js"


// Save data of the checks in the database
export const saveUserVisits = async (req, res) => {
    const check = req.body;
    const newCheck= new UserVisitModel(check);
    try{
        await newCheck.save();
        res.status(201).json(newCheck);
    } catch (err){
        res.status(409).json(err);     
    }
}

// Get a checks by id
export const getUserVisitById = async (req, res) => {
    const check=await UserVisitModel.findById(req.params.id)
    try{
      res.status(200).json(check)
    }catch(err){
        res.status(500).json(err)
    }
}

// Save data of updated tasks in the database
export const updateUserVisit = async (req, res) => {
    try{
        const checks=await UserVisitModel.findByIdAndUpdate(
          req.params.id,
          {$inc:{counter:1}},
          {new:true}
        )
        res.status(200).json(checks)
       }catch(err){
        // next(err)
        res.status(500).json(err)
       }
}

