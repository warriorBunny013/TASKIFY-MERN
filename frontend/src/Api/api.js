import axios from 'axios';
const url = 'https://taskify-mern-backend.vercel.app/api';

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