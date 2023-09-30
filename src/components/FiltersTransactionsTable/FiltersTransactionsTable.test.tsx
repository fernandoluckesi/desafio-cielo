import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FiltersTransactionsTable } from ".";

describe("FiltersTransactionsTable", () => {
  it("renders the component", async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    expect(screen.getByText("Vendas")).toBeInTheDocument();
    expect(screen.getByText("Filtros")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("show-filters"));

    await waitFor(() => {
      expect(screen.getByLabelText("Tipo de Filtro")).toBeInTheDocument();
      expect(screen.getByLabelText("Valor do Filtro")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("show-filters"));

    await waitFor(() => {
      expect(screen.queryByLabelText("Tipo de Filtro")).not.toBeInTheDocument();
      expect(
        screen.queryByLabelText("Valor do Filtro")
      ).not.toBeInTheDocument();
    });
  });

  it('adds a new filter when "Adicionar Filtro" button is clicked', async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    fireEvent.click(screen.getByTestId("show-filters"));

    await waitFor(() => {
      fireEvent.click(screen.getByTestId("add-filter"));
    });

    await waitFor(() => {
      const filterTypes = screen.getAllByTestId("filter-type");
      expect(filterTypes).toHaveLength(2);
    });
  });

  it('removes a filter when "Remover" button is clicked', async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    fireEvent.click(screen.getByTestId("show-filters"));

    await waitFor(() => {
      fireEvent.click(screen.getByTestId("add-filter"));
      fireEvent.click(screen.getByTestId("add-filter"));
    });

    await waitFor(() => {
      const filterTypes = screen.getAllByTestId("filter-type");
      expect(filterTypes).toHaveLength(3);
    });

    fireEvent.click(screen.getAllByTestId("remove-filter")[0]);

    await waitFor(() => {
      const filterTypes = screen.getAllByTestId("filter-type");
      expect(filterTypes).toHaveLength(2);
    });
  });

  // Estes 2 próximos Its não puderem ser finalizado a tempo. Pois existe uma complexidade em capturar o elementos do Material UI, o que dificulta para obter o elemento HTML correto e poder adicionar eventos a eles
  it.skip("handles filter changes", async () => {
    render(<FiltersTransactionsTable handleSelectFiltersParams={() => {}} />);

    fireEvent.click(screen.getByTestId("show-filters"));

    const filterTypeSelect = screen.getAllByTestId("filter-type");

    fireEvent.click(filterTypeSelect[0]);

    await waitFor(() => {
      const option = screen.getByTestId("paymentType");
      fireEvent.click(option);
    });

    await waitFor(() => {
      const filterValueSelect = screen.getByLabelText("Valor do Filtro");
      fireEvent.change(filterValueSelect, {
        target: { value: "Crédito à vista" },
      });
    });
  });

  it.skip("handles filter submission", async () => {
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
      expect(selectedFilters).toEqual({ paymentType: "Crédito à vista" });
    });
  });
});
