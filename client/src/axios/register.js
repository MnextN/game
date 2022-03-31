import { axios } from "./index";
export const registerAxios = async (fields) => {
    try {
        const data = await axios.post("register", fields);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};