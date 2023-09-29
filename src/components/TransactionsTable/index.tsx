import React, { useEffect, useState } from "react";
import {
  LoadingContainer,
  MainContainer,
  NavigationTable,
  Pagination,
  RequestErrorMsg,
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

interface TransactionsTableProps {
  filtersParams: FiltersParams;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  filtersParams,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { items, itemsQuantity, pagination, summary, isLoading, requestError } =
    useSales(filtersParams);

  // * Aqui seria uma versão em que o json tivesse outras páginas para renderizar. Resolvi não inserir essa lógica para que os botões de navegação da tabela altere o número da página, mesmo que não traga dados novos
  // const { items, itemsQuantity, pagination, summary, isLoading, requestError } =
  // useSales(currentPage);

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
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: theme.colors.primary.brancoCielo }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tipo de Pagamento</TableCell>
                <TableCell>Bandeira do cartão</TableCell>
                <TableCell>Valor bruto</TableCell>
                <TableCell>Valor líquido</TableCell>
                <TableCell>Canal</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items &&
                items.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.paymentType}</TableCell>
                    <TableCell>{row.cardBrand}</TableCell>
                    <TableCell>
                      {Formatter.prettyCurrency(row.grossAmount)}
                    </TableCell>
                    <TableCell>
                      {Formatter.prettyCurrency(row.netAmount)}
                    </TableCell>
                    <TableCell>{row.channel}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      {Formatter.prettyDate(new Date(row.date))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
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
        </TableContainer>
      )}
    </MainContainer>
  );
};
