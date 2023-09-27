import React, { useState } from "react";
import { MainContainer } from "./styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const filterOptions = {
  paymentType: ["Crédito à vista", "Crédito parcelado", "Débito"],
  cardBrand: ["Hipercard", "Visa", "Mastercard", "Elo"],
  status: ["Aprovada", "Pendente", "Negada"],
  channel: ["Máquina", "Ecommerce", "Super Link / Digitada"],
};

const filterLabels = {
  paymentType: "Tipo de Pagamento",
  cardBrand: "Bandeira do Cartão",
  status: "Status",
  channel: "Canal",
};

export const FiltersTransactionsTable: React.FC = () => {
  const [filters, setFilters] = useState([{ type: "", value: "" }]);

  const addFilter = () => {
    setFilters([...filters, { type: "", value: "" }]);
  };

  const removeFilter = (index) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(index, 1);
    setFilters(updatedFilters);
  };

  const handleChangeFilterType = (index, event) => {
    const updatedFilters = [...filters];
    updatedFilters[index].type = event.target.value;
    updatedFilters[index].value = "";
    setFilters(updatedFilters);
  };

  const handleChangeFilterValue = (index, event) => {
    const updatedFilters = [...filters];
    updatedFilters[index].value = event.target.value;
    setFilters(updatedFilters);
  };

  const handleFilter = () => {
    const params = {};
    filters.forEach((filter) => {
      if (filter.type && filter.value) {
        params[filter.type] = filter.value;
      }
    });
    console.log(params);
  };

  return (
    <MainContainer>
      {filters.map((filter, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
          <FormControl style={{ marginRight: "10px" }}>
            <InputLabel id={`filter-type-label-${index}`}>
              Tipo de Filtro
            </InputLabel>
            <Select
              labelId={`filter-type-label-${index}`}
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

          {filter.type && (
            <FormControl style={{ marginRight: "10px" }}>
              <InputLabel id={`filter-value-label-${index}`}>
                Valor do Filtro
              </InputLabel>
              <Select
                labelId={`filter-value-label-${index}`}
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
          )}

          {index > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFilter(index)}
            >
              Remover Filtro
            </Button>
          )}
        </div>
      ))}

      <Button variant="contained" color="primary" onClick={addFilter}>
        Adicionar Filtro
      </Button>
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Filtrar
      </Button>
    </MainContainer>
  );
};
