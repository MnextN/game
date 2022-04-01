import { axios } from './index';

export const logoutAxios = async () => {
    const data = await axios.get('game', { withCredentials: true });
    return data;
};
