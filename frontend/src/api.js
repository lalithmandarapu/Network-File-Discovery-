import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const fetchComputers = async () => {
    const res = await axios.get(`${API_URL}/computers`);
    return res.data;
};

export const registerComputer = async (computerData) => {
    await axios.post(`${API_URL}/register`, computerData);
};

export const fetchLogs = async () => {
    const res = await axios.get(`${API_URL}/logs`);
    return res.data;
};
