import React, { useState } from "react";
import { TransactionsTable } from "../../components/TransactionsTable";
import { MainTemplate } from "../../templates/MainTemplate";
import { FiltersTransactionsTable } from "../../components/FiltersTransactionsTable";
import { useMedia } from "../../hooks/useMedia";
import { VerticalTransactionsTable } from "../../components/VerticalTransactionsTable";

export interface FiltersParams {
  paymentType?: string | null;
  cardBrand?: string | null;
  status?: string | null;
  channel?: string | null;
}

export const Sales: React.FC = () => {
  const [filtersParams, setFiltersParams] = useState<FiltersParams>({});
  const { widthScreen } = useMedia();

  const handleSelectFiltersParams = (params: FiltersParams) => {
    setFiltersParams(params);
  };

  return (
    <MainTemplate>
      <FiltersTransactionsTable
        handleSelectFiltersParams={handleSelectFiltersParams}
      />
      {widthScreen > 1000 ? (
        <TransactionsTable filtersParams={filtersParams} />
      ) : (
        <VerticalTransactionsTable filtersParams={filtersParams} />
      )}
    </MainTemplate>
  );
};
