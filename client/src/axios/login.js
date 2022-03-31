import { axios } from "./index";

export const loginAxios = async (fields) => {
    try {
        const data = await axios.post("login", fields,{ withCredentials: true });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
