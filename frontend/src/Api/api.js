import axios from 'axios';
axios.defaults.withCredentials=true;
const url = 'https://taskify-uditi-das-backend.onrender.com/api';


export const getTasks= async () => {
    return await axios.get(`${url}/get`).catch((err)=>console.log(err));
}

export const addTasks = async (details) => {
    return await axios.post(`${url}/save`, details).catch((err)=>console.log(err));
}

export const deleteTask = async (id) => {
    return await axios.delete(`${url}/delete/${id}`).catch((err)=>console.log(err));
}

export const updateTask = async (id, details) => {
    return await axios.put(`${url}/update/${id}`, details).catch((err)=>console.log(err))
}
export const updateCheck = async (details) => {
    return await axios.put(`${url}/check/update/64903837a86bc7b825ee68cd`, details).catch((err)=>console.log(err))
}
export const getCheckById = async (details) => {
    return await axios.get(`${url}/checks/get/64903837a86bc7b825ee68cd`, details).catch((err)=>console.log(err))
}
export const getVisitspageById = async (details) => {
    return await axios.get(`${url}/getvisitpage/649041460ae438aebb9eaa35`, details).catch((err)=>console.log(err))
}

export const updateVisits = async (details) => {
    return await axios.put(`${url}/visit/updatepage/649041460ae438aebb9eaa35`, details).catch((err)=>console.log(err))
}
export const getOverviewVisitspageById = async (details) => {
    return await axios.get(`${url}/getpagevisit/649041460ae438aebb9eaa35`, details).catch((err)=>console.log(err))
}
export const updateOverviewVisits = async (details) => {
    return await axios.put(`${url}/pageupdate/649060fc5e985dde6ad0e2ce`, details).catch((err)=>console.log(err))
}
export const getTasksVisitspageById = async (details) => {
    return await axios.get(`${url}/gettasksvisit/64906fb98b6864ef7d7b1a2d`, details).catch((err)=>console.log(err))
}
export const updateTasksVisits = async (details) => {
    return await axios.put(`${url}/tasksupdate/64906fb98b6864ef7d7b1a2d`, details).catch((err)=>console.log(err))
}
export const getUserVisitspageById = async (details) => {
    return await axios.get(`${url}/getuservisit/6490702199b4a9d820551077`, details).catch((err)=>console.log(err))
}
export const updateUserVisits = async (details) => {
    return await axios.put(`${url}/userupdate/6490702199b4a9d820551077`, details).catch((err)=>console.log(err))
}
export const getProgressById = async (details) => {
    return await axios.get(`${url}/progress/649095f9ad5d6b95e92c61b7`, details).catch((err)=>console.log(err))
}
export const updateProgress = async (details) => {
    return await axios.put(`${url}/progress/649095f9ad5d6b95e92c61b7`, details).catch((err)=>console.log(err))
}