import React, { useEffect, useState } from "react";
import {
  LoadingContainer,
  MainContainer,
  NavigationTable,
  Pagination,
  RequestErrorMsg,
  TableItem,
  TotalQuantityInfo,
} from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useSales } from "../../hooks/useSales";
import { CircularProgress } from "@mui/material";
import { FiltersParams } from "../../pages/Sales";
import { theme } from "../../global/styles/theme";
import { Formatter } from "../../utils/formatters";

interface VerticalTransactionsTableProps {
  filtersParams: FiltersParams;
}

export const VerticalTransactionsTable: React.FC<
  VerticalTransactionsTableProps
> = ({ filtersParams }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { items, itemsQuantity, pagination, summary, isLoading, requestError } =
    useSales(filtersParams);

  useEffect(() => {
    if (pagination?.pageNumber) {
      setCurrentPage(pagination?.pageNumber);
    }
  }, []);

  const handleChangePage = (buttonType: string) => {
    switch (buttonType) {
      case "first":
        setCurrentPage(1);
        break;
      case "prev":
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        break;
      case "next":
        if (currentPage < 65) {
          setCurrentPage(currentPage + 1);
        }
        break;
      case "last":
        if (pagination?.numPages) {
          setCurrentPage(pagination?.numPages);
        }
        break;
      default:
        break;
    }
  };

  if (requestError) {
    return <RequestErrorMsg>Dados não encontrados</RequestErrorMsg>;
  }

  if (items?.length === 0) {
    return (
      <RequestErrorMsg>
        Nenhum dado corresponde a esse(s) filtro(s)
      </RequestErrorMsg>
    );
  }

  return (
    <MainContainer>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <>
          {items &&
            items.map((row) => (
              <TableItem>
                <TableContainer
                  component={Paper}
                  sx={{
                    backgroundColor: theme.colors.primary.brancoCielo,
                  }}
                >
                  <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableBody sx={{ marginBottom: "32px" }}>
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>ID</TableCell>
                        <TableCell component="th" scope="row" align="right">
                          {row.id}
                        </TableCell>
                      </TableRow>

                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Tipo de Pagamento</TableCell>
                        <TableCell align="right">{row.paymentType}</TableCell>
                      </TableRow>
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Bandeira do cartão</TableCell>
                        <TableCell align="right">{row.cardBrand}</TableCell>
                      </TableRow>

                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Valor bruto</TableCell>
                        <TableCell align="right">
                          {Formatter.prettyCurrency(row.grossAmount)}
                        </TableCell>
                      </TableRow>

                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Valor líquido</TableCell>
                        <TableCell align="right">
                          {Formatter.prettyCurrency(row.netAmount)}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Canal</TableCell>

                        <TableCell align="right">{row.channel}</TableCell>
                      </TableRow>
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Status</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                      </TableRow>
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Data</TableCell>
                        <TableCell align="right">
                          {Formatter.prettyDate(new Date(row.date))}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableItem>
            ))}
          <NavigationTable>
            <TotalQuantityInfo>
              Mostrando {itemsQuantity} de {summary?.totalQuantity} resultados
            </TotalQuantityInfo>
            <Pagination>
              <button
                disabled={pagination?.firstPage || currentPage === 1}
                onClick={() => handleChangePage("first")}
                className="btn-nav-page"
              >
                <FirstPageIcon />
              </button>
              <button
                disabled={pagination?.firstPage || currentPage === 1}
                className="btn-nav-page"
                onClick={() => handleChangePage("prev")}
              >
                <KeyboardArrowLeftIcon />
              </button>
              <p className="current-page">
                {currentPage} de {pagination?.numPages}
              </p>
              <button
                disabled={
                  pagination?.lastPage || currentPage === pagination?.numPages
                }
                className="btn-nav-page"
                onClick={() => handleChangePage("next")}
              >
                <KeyboardArrowRightIcon />
              </button>
              <button
                disabled={
                  pagination?.lastPage || currentPage === pagination?.numPages
                }
                className="btn-nav-page"
                onClick={() => handleChangePage("last")}
              >
                <LastPageIcon />
              </button>
            </Pagination>
          </NavigationTable>
        </>
      )}
    </MainContainer>
  );
};
