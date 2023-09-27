import { useEffect, useState } from "react";
import { getPagination, getSalesItems, getSummary } from "../services/api";

export interface ItemsType {
  id: string;
  merchantId: string;
  paymentNode: number;
  cnpjRoot: number;
  date: string;
  paymentType: string;
  cardBrand: string;
  authorizationCode: string;
  truncatedCardNumber: string;
  grossAmount: number;
  netAmount: number;
  terminal: string;
  administrationFee: number;
  channelCode: number;
  channel: string;
  withdrawAmount: number;
  minimumMDRAmmount: number;
  mdrTaxAmount: number;
  mdrFeeAmount: number;
  status: string;
}

export interface PaganitationType {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  numPages: number;
  lastPage: boolean;
  firstPage: boolean;
}

export interface SummaryType {
  totalQuantity: number;
  totalAmount: number;
  totalNetAmount: number;
  totalAverageAmount: number;
  initialDate: string;
  finalDate: string;
}

//currentPage poderia ser recebido aqui e usado como parametro para a function getPagination e também seria o trigger o useEffect aqui do useSales
export const useSales = () => {
  const [items, setItems] = useState<ItemsType[] | undefined>();
  const [pagination, setPagination] = useState<PaganitationType | undefined>();
  const [summary, setSummary] = useState<SummaryType | undefined>();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);

  useEffect(() => {
    setisLoading(true);
    setRequestError(false);

    getSalesItems()
      .then((salesItems) => {
        setItems(salesItems);

        return getPagination();
      })
      .then((paginationData) => {
        setPagination(paginationData);

        return getSummary();
      })
      .then((summaryData) => {
        setSummary(summaryData);
        setisLoading(false);
      })
      .catch(() => {
        setRequestError(true);
        setisLoading(false);
      });
  }, []);

  return {
    items,
    pagination,
    summary,
    isLoading,
    requestError,
    itemsQuantity: items?.length,
  };
};
