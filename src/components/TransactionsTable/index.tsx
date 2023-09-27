import React, { useState } from "react";
import { MainContainer } from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "../../mocks/transictionsTable";

export const TransactionsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    console.log(event);
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0); // Reset para a primeira página ao alterar a quantidade de itens por página
  };

  // Cálculos para determinar quais itens exibir com base na página atual e itens por página
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedItems = rows.slice(startIndex, endIndex);

  return (
    <MainContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tipo de Pagamento</TableCell>
              <TableCell>Bandeira do cartão</TableCell>
              <TableCell>Valor bruto</TableCell>
              <TableCell>Valor líquido</TableCell>
              <TableCell>Valor da taxa mdr</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.paymentType}</TableCell>
                <TableCell>{row.cardBrand}</TableCell>
                <TableCell>{row.grossAmount}</TableCell>
                <TableCell>{row.netAmount}</TableCell>
                <TableCell>{row.mdrFeeAmount}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};
