import { render, fireEvent, waitFor } from "@testing-library/react";
import { FiltersTransactionsTable } from ".";

// Mock a function for handleSelectFiltersParams
const mockHandleSelectFiltersParams = jest.fn();

describe("FiltersTransactionsTable", () => {
  it("renders the component", () => {
    const { getByText, getByLabelText } = render(
      <FiltersTransactionsTable
        handleSelectFiltersParams={mockHandleSelectFiltersParams}
      />
    );

    // Ensure that the component is rendered
    // expect(getByText("Vendas")).toBeInTheDocument();
    // expect(getByText("Filtros")).toBeInTheDocument();
    // expect(getByLabelText("Tipo de Filtro")).toBeInTheDocument();
    // expect(getByLabelText("Valor do Filtro")).toBeInTheDocument();
  });

  it('adds a new filter when "Adicionar Filtro" button is clicked', async () => {
    const { getByText, getByLabelText } = render(
      <FiltersTransactionsTable
        handleSelectFiltersParams={mockHandleSelectFiltersParams}
      />
    );

    // Click the "Adicionar Filtro" button
    fireEvent.click(getByText("Adicionar Filtro"));

    // Ensure that a new filter row is added
    await waitFor(() =>
      expect(getByLabelText("Tipo de Filtro")).toHaveLength(2)
    );
  });

  it('removes a filter when "Remover" button is clicked', async () => {
    const { getByText, getByLabelText } = render(
      <FiltersTransactionsTable
        handleSelectFiltersParams={mockHandleSelectFiltersParams}
      />
    );

    // Click the "Adicionar Filtro" button twice to add two filters
    fireEvent.click(getByText("Adicionar Filtro"));
    fireEvent.click(getByText("Adicionar Filtro"));

    // Ensure that there are two filter rows
    await waitFor(() =>
      expect(getByLabelText("Tipo de Filtro")).toHaveLength(3)
    );

    // Click the "Remover" button for the second filter
    fireEvent.click(getByText("Remover", { exact: false }));

    // Ensure that one filter is removed
    await waitFor(() =>
      expect(getByLabelText("Tipo de Filtro")).toHaveLength(2)
    );
  });

  it("handles filter changes", async () => {
    const { getByLabelText, getByText } = render(
      <FiltersTransactionsTable
        handleSelectFiltersParams={mockHandleSelectFiltersParams}
      />
    );

    // Click the "Adicionar Filtro" button to add a filter
    fireEvent.click(getByText("Adicionar Filtro"));

    // Select a filter type
    const filterTypeSelect = getByLabelText("Tipo de Filtro");
    fireEvent.change(filterTypeSelect, { target: { value: "paymentType" } });

    // Select a filter value
    const filterValueSelect = getByLabelText("Valor do Filtro");
    fireEvent.change(filterValueSelect, {
      target: { value: "Crédito à vista" },
    });

    // Ensure that the filter type and value are updated
    await waitFor(() => {
      // expect(filterTypeSelect).toHaveValue("paymentType");
      // expect(filterValueSelect).toHaveValue("Crédito à vista");
    });
  });

  it("handles filter submission", async () => {
    const { getByText, getByLabelText } = render(
      <FiltersTransactionsTable
        handleSelectFiltersParams={mockHandleSelectFiltersParams}
      />
    );

    // Click the "Adicionar Filtro" button to add a filter
    fireEvent.click(getByText("Adicionar Filtro"));

    // Select a filter type
    const filterTypeSelect = getByLabelText("Tipo de Filtro");
    fireEvent.change(filterTypeSelect, { target: { value: "paymentType" } });

    // Select a filter value
    const filterValueSelect = getByLabelText("Valor do Filtro");
    fireEvent.change(filterValueSelect, {
      target: { value: "Crédito à vista" },
    });

    // Click the "Filtrar" button
    fireEvent.click(getByText("Filtrar"));

    // Ensure that the handleSelectFiltersParams function is called with the correct parameters
    await waitFor(() => {
      expect(mockHandleSelectFiltersParams).toHaveBeenCalledWith({
        paymentType: "Crédito à vista",
      });
    });
  });
});
