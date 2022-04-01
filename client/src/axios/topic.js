import { axios } from './index';

export const topicAxios = async () => {
    const data = await axios.get('topic', { withCredentials: true });
    return data;
};
