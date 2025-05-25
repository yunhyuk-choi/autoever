import axios from "axios";

export const getCategory = async (tab: string) => {
  const { data } = await axios.get(`/api/category?tab=${tab}`);

  return data;
};
