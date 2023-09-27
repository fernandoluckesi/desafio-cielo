import React from "react";
import { TransactionsTable } from "../../components/TransactionsTable";
import { MainTemplate } from "../../templates/MainTemplate";
import { FiltersTransactionsTable } from "../../components/FiltersTransactionsTable";

export const Sales: React.FC = () => {
  return (
    <MainTemplate>
      <FiltersTransactionsTable />
      <TransactionsTable />
    </MainTemplate>
  );
};
