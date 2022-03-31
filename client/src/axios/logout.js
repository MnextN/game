import { axios } from "./index";

export const logoutAxios = async () => {
    const data = await axios.get("logout",{ withCredentials: true });
    return data
};
