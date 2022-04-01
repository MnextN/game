import { axios } from './index';

export const profileEditAxios = async (data) => {
    try {
        const response = await axios.put('register', data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const profileDeleteAxios = async (data) => {
    try {
        const response = await axios.delete('register', data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
