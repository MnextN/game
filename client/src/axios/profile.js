import { axios } from "./index";

export const profileAxios = async (data) => {
    try {
        const response = await axios.put("register", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const profileAxios = async (data) => {
  try {
      const response = await axios.delete("register", data);
      return response;
  } catch (error) {
      console.log(error);
      throw error;
  }
};
