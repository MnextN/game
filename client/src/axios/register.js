import { axios } from './index';

export const registerAxios = async (fields) => {
    try {
        const data = await axios.post('register', fields, {
            withCredentials: true
        });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
