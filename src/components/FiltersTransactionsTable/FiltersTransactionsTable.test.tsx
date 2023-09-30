import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FiltersTransactionsTable } from ".";

describe("FiltersTransactionsTable", () => {
  it("renders the component", () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    // Verifique se os elementos do componente estão presentes na tela
    expect(screen.getByText("Vendas")).toBeInTheDocument();
    expect(screen.getByText("Filtros")).toBeInTheDocument();
    expect(screen.getByLabelText("Tipo de Filtro")).toBeInTheDocument();
    expect(screen.getByLabelText("Valor do Filtro")).toBeInTheDocument();
  });

  it('adds a new filter when "Adicionar Filtro" button is clicked', async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    fireEvent.click(screen.getByText("Adicionar Filtro"));

    await waitFor(() => {
      // Verifique se o novo filtro foi adicionado
      const filterTypes = screen.getAllByLabelText("Tipo de Filtro");
      expect(filterTypes).toHaveLength(2); // Espera-se que haja 2 filtros agora
    });
  });

  it('removes a filter when "Remover" button is clicked', async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    fireEvent.click(screen.getByText("Adicionar Filtro"));
    fireEvent.click(screen.getByText("Adicionar Filtro"));

    await waitFor(() => {
      const filterTypes = screen.getAllByLabelText("Tipo de Filtro");
      expect(filterTypes).toHaveLength(3); // Espera-se que haja 3 filtros agora
    });

    fireEvent.click(screen.getAllByText("Remover")[0]); // Remova o primeiro filtro

    await waitFor(() => {
      const filterTypes = screen.getAllByLabelText("Tipo de Filtro");
      expect(filterTypes).toHaveLength(2); // Espera-se que haja 2 filtros agora
    });
  });

  it("handles filter changes", async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    fireEvent.click(screen.getByText("Adicionar Filtro"));

    const filterTypeSelect = screen.getByLabelText("Tipo de Filtro");
    fireEvent.change(filterTypeSelect, { target: { value: "paymentType" } });

    const filterValueSelect = screen.getByLabelText("Valor do Filtro");
    fireEvent.change(filterValueSelect, {
      target: { value: "Crédito à vista" },
    });

    // Você pode adicionar asserções aqui para verificar se os valores foram alterados corretamente
  });

  it("handles filter submission", async () => {
    let selectedFilters = {};

    render(
      <FiltersTransactionsTable
        handleSelectFiltersParams={(params) => {
          selectedFilters = params;
        }}
      />
    );

    fireEvent.click(screen.getByText("Adicionar Filtro"));

    const filterTypeSelect = screen.getByLabelText("Tipo de Filtro");
    fireEvent.change(filterTypeSelect, { target: { value: "paymentType" } });

    const filterValueSelect = screen.getByLabelText("Valor do Filtro");
    fireEvent.change(filterValueSelect, {
      target: { value: "Crédito à vista" },
    });

    fireEvent.click(screen.getByText("Filtrar"));

    await waitFor(() => {
      // Verifique se a seleção dos filtros foi capturada corretamente
      expect(selectedFilters).toEqual({ paymentType: "Crédito à vista" });
    });
  });
});
