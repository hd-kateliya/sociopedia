import axios from 'axios';

export const getDataAPI = async (url, token) => {
    try {
        const res = await axios.get(`/api/${url}`, {
            headers: { Authorization: token }
        });
        return res;
    } catch (error) {
        console.error("Error fetching data from: ", url, error.response.data);
        throw error.response.data; // this will pass the error information to your Redux or component for handling
    }
}

export const postDataAPI = async (url, post, token) => {
    try {
        const res = await axios.post(`/api/${url}`, post, {
            headers: { Authorization: token }
        });
        return res;
    } catch (error) {
        console.error("Error posting data to: ", url, error.response.data);
        throw error.response.data;
    }
}

export const putDataAPI = async (url, post, token) => {
    try {
        const res = await axios.put(`/api/${url}`, post, {
            headers: { Authorization: token }
        });
        return res;
    } catch (error) {
        console.error("Error updating data at: ", url, error.response.data);
        throw error.response.data;
    }
}

export const patchDataAPI = async (url, post, token) => {
    try {
        const res = await axios.patch(`/api/${url}`, post, {
            headers: { Authorization: token }
        });
        return res;
    } catch (error) {
        console.error("Error patching data at: ", url, error.response.data);
        throw error.response.data;
    }
}

export const deleteDataAPI = async (url, token) => {
    try {
        const res = await axios.delete(`/api/${url}`, {
            headers: { Authorization: token }
        });
        return res;
    } catch (error) {
        console.error("Error deleting data from: ", url, error.response.data);
        throw error.response.data;
    }
}
