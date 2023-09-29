import axios from "axios";
import { FiltersParams } from "../pages/Sales";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getSalesItems = async (filtersParams: FiltersParams) => {
  try {
    const reponse = await api.get(`/items`, {
      params: {
        ...filtersParams,
      },
    });

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
