import React from "react";
import { TransactionsTable } from "../../components/TransactionsTable";
import { MainTemplate } from "../../templates/MainTemplate";

export const Sales: React.FC = () => {
  return (
    <MainTemplate>
      <TransactionsTable />
    </MainTemplate>
  );
};
