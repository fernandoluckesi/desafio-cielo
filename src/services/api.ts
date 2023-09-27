import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getSalesItems = async () => {
  try {
    const reponse = await api.get(
      `/items?grossAmount_gte=&grossAmount_lte=999999999999`,
      {
        params: {
          status: "Aprovada",
        },
      }
    );

    const items = reponse.data;
    return items;
  } catch (error) {
    throw error;
  }
};

export const getPagination = async () => {
  try {
    const reponse = await api.get(`/pagination`);

    const items = reponse.data;
    return items;
  } catch (error) {
    throw error;
  }
};

export const getSummary = async () => {
  try {
    const reponse = await api.get(`/summary`);

    const items = reponse.data;
    return items;
  } catch (error) {
    throw error;
  }
};
