import React, { useState } from "react";
import {
  FilterRow,
  FiltersContent,
  Header,
  MainContainer,
  ManagerRows,
  TriggersBtns,
  TriggersFilter,
} from "./styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FiltersParams } from "../../pages/Sales";
import { ButtonDefault } from "../ButtonDefault";
import { theme } from "../../global/styles/theme";

interface Filter {
  type: string;
  value: string;
}

const filterOptions: { [key: string]: string[] } = {
  paymentType: ["Crédito à vista", "Crédito parcelado", "Débito"],
  cardBrand: ["Hipercard", "Visa", "Mastercard", "Elo"],
  status: ["Aprovada", "Pendente", "Negada"],
  channel: ["Máquina", "Ecommerce", "Super Link / Digitada"],
};

const filterLabels: { [key: string]: string } = {
  paymentType: "Tipo de Pagamento",
  cardBrand: "Bandeira do Cartão",
  status: "Status",
  channel: "Canal",
};

interface FiltersTransactionsTableProps {
  handleSelectFiltersParams: (params: FiltersParams) => void;
}

export const FiltersTransactionsTable: React.FC<
  FiltersTransactionsTableProps
> = ({ handleSelectFiltersParams }) => {
  const [filters, setFilters] = useState<Filter[]>([{ type: "", value: "" }]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const addFilter = () => {
    setFilters([...filters, { type: "", value: "" }]);
  };

  const removeFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(index, 1);
    setFilters(updatedFilters);
  };

  const handleChangeFilterType = (
    index: number,
    event: SelectChangeEvent<unknown>
  ) => {
    const updatedFilters = [...filters];
    updatedFilters[index].type = event.target.value as string;
    updatedFilters[index].value = "";
    setFilters(updatedFilters);
  };

  const handleChangeFilterValue = (
    index: number,
    event: SelectChangeEvent<unknown>
  ) => {
    const updatedFilters = [...filters];
    updatedFilters[index].value = event.target.value as string;
    setFilters(updatedFilters);
  };

  const clearFilters = () => {
    setFilters([{ type: "", value: "" }]);
    setStartDate("");
    setEndDate("");
    let params = {};
    handleSelectFiltersParams(params);
  };

  const handleFilter = () => {
    let params = {};

    filters.forEach((filter) => {
      if (filter.value) {
        params = { ...params, [filter.type]: filter.value };
      }
    });

    //Esse trecho de código adicionaria um intervalo de datas para poder fazer o filtro. Mas o json-server não suporta esse tipo de filtro de intervalos por data
    // if (startDate) {
    //   params.startDate = startDate;
    // }
    // if (endDate) {
    //   params.endDate = endDate;
    // }

    handleSelectFiltersParams(params);
  };

  return (
    <MainContainer>
      <Header>
        <h1 className="page-title">Vendas</h1>
        <button className="show-filters" onClick={handleShowFilter}>
          <FilterListIcon /> Filtros
        </button>
      </Header>
      {showFilter && (
        <FiltersContent>
          <TriggersFilter>
            <TriggersBtns>
              <ButtonDefault
                backgroundColor={theme.colors.primary.entardecer}
                color={theme.colors.primary.brancoCielo}
                onClick={handleFilter}
                text="Filtrar"
              />

              <ButtonDefault
                backgroundColor={theme.colors.primary.chuva}
                color={theme.colors.primary.brancoCielo}
                onClick={clearFilters}
                text="Limpar Filtros"
              />
            </TriggersBtns>
            <ManagerRows>
              {filters.map((filter, index) => (
                <FilterRow key={index}>
                  <FormControl>
                    <InputLabel id={`filter-type-select-${index}`}>
                      Tipo de Filtro
                    </InputLabel>
                    <Select
                      id={`filter-type-select`}
                      name={`filter-type-select-${index}`}
                      label="Tipo de Filtro"
                      labelId={`filter-type-select-${index}`}
                      value={filter.type}
                      onChange={(e) => handleChangeFilterType(index, e)}
                    >
                      <MenuItem value="">Selecione</MenuItem>
                      {Object.keys(filterOptions).map((option) => (
                        <MenuItem
                          key={option}
                          value={option}
                          disabled={filters.some(
                            (f, i) => i !== index && f.type === option
                          )}
                        >
                          {filterLabels[option]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {filter.type ? (
                    <FormControl>
                      <InputLabel id={`filter-value-select-${index}`}>
                        Valor do Filtro
                      </InputLabel>
                      <Select
                        name={`filter-value-select-${index}`}
                        id={`filter-value-select`}
                        label="Valor do Filtro"
                        labelId={`filter-value-select-${index}`}
                        value={filter.value}
                        onChange={(e) => handleChangeFilterValue(index, e)}
                      >
                        <MenuItem value="">Selecione</MenuItem>
                        {filterOptions[filter.type].map((value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <FormControl disabled>
                      <InputLabel id={`filter-value-select-disabled-${index}`}>
                        Valor do Filtro
                      </InputLabel>
                      <Select
                        name={`filter-value-select-disabled-${index}`}
                        id={`filter-value-select-disabled`}
                        label="Valor do Filtro"
                        labelId={`filter-value-select-disabled-${index}`}
                        value={""}
                      />
                    </FormControl>
                  )}

                  {index > 0 && (
                    <button
                      className="remove-row-btn"
                      onClick={() => removeFilter(index)}
                    >
                      <DeleteOutlineIcon color="warning" />
                    </button>
                  )}
                </FilterRow>
              ))}
            </ManagerRows>
          </TriggersFilter>
          <ButtonDefault
            backgroundColor={theme.colors.primary.entardecer}
            color={theme.colors.primary.brancoCielo}
            onClick={addFilter}
            disabled={Object.keys(filterOptions).length === filters.length}
            text="Adicionar Filtro"
          />

          {/*
          Esses seriam os inputs de intervalo de datas para poder
          fazer o filtro. Mas o json-server não suporta esse tipo de filtro de
          intervalos por data. Não foi adicionado estilização pois seria um trabalho não necessário. Mas estão aqui para demosntrar que seriam uma implementação válida
          <TextField
            type="date"
            label="Data Inicial"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginRight: "10px" }}
          />

          <TextField
            type="date"
            label="Data Final"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginRight: "10px" }}
          /> */}
        </FiltersContent>
      )}
    </MainContainer>
  );
};
