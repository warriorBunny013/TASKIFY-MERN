import axios from 'axios';
const url = 'http://localhost:8800/api';

export const getTasks= async () => {
    return await axios.get(`${url}/get`);
}

export const addTasks = async (details) => {
    return await axios.post(`${url}/save`, details);
}

export const deleteTask = async (id) => {
    return await axios.delete(`${url}/delete/${id}`);
}

export const updateTask = async (id, details) => {
    return await axios.put(`${url}/update/${id}`, details)
}