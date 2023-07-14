import express from "express";
import {getTasks,saveTask,updateTask, deleteTask} from "../controllers/TaskController.js"
import { getChecks,saveChecks,updateCheck,getCheckById} from "../controllers/CheckController.js";
import { getVisitById, saveVisits,updateVisit } from "../controllers/VisitController.js";
import { getPageVisitById, savePageVisits,updatePageVisit } from "../controllers/PageVisitController.js";
import { getTasksVisitById,saveTasksVisits,updateTasksVisit } from "../controllers/TasksVisitController.js";
import { getUserVisitById,saveUserVisits,updateUserVisit } from "../controllers/UserVisitController.js";
import { getProgressById,saveProgress,updateProgress } from "../controllers/ProgressController.js";

const router=express.Router();

router.get("/get",getTasks);
router.post("/save",saveTask);
router.put("/update/:id",updateTask);
router.delete("/delete/:id",deleteTask);
// router.get("/check/get",getChecks)
// router.post("/check/save",saveChecks)
//check
router.put("/check/update/:id",updateCheck)
router.get("/checks/get/:id",getCheckById)
//progress
router.post("/progress",saveProgress)
router.put("/progress/:id",updateProgress)
router.get("/progress/:id",getProgressById)


router.post("/savepage",saveVisits)
router.get("/getvisitpage/:id",getVisitById)
router.put("/visit/updatepage/:id",updateVisit)

//overview
router.post("/savepagevisits",savePageVisits)
router.get("/getpagevisit/:id",getPageVisitById)
router.put("/pageupdate/:id",updatePageVisit)
//tasks page
router.post("/tasksvisitssave",saveTasksVisits)
router.get("/gettasksvisit/:id",getTasksVisitById)
router.put("/tasksupdate/:id",updateTasksVisit)
//users page
router.post("/uservisitssave",saveUserVisits)
router.get("/getuservisit/:id",getUserVisitById)
router.put("/userupdate/:id",updateUserVisit)

export default router;