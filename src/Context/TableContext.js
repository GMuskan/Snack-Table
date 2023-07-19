import { createContext, useReducer } from "react";
import { initialState, TableReducer } from "../Reducer/TableReducer";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TableReducer, initialState);
  const searchedSnacks =
    state?.search !== ""
      ? state?.data?.filter(
          (snack) =>
            snack.product_name
              ?.trim()
              ?.toLowerCase()
              ?.includes(state?.search) ||
            snack.ingredients.find((item) =>
              item?.trim()?.toLowerCase()?.includes(state?.search)
            )
        )
      : state?.data;

  let sortedProducts = searchedSnacks;

  const sortSnacks = (sortBy) => {
    if (sortBy === "id") {
      sortedProducts = searchedSnacks.sort((a, b) =>
        state?.idSort ? a.id - b.id : b.id - a.id
      );
    }
    if (sortBy === "name") {
      sortedProducts = searchedSnacks.sort((a, b) =>
        state?.nameSort
          ? a.product_name.localeCompare(b.product_name)
          : b.product_name.localeCompare(a.product_name)
      );
    }

    if (sortBy === "ingredients") {
      sortedProducts = searchedSnacks.sort((a, b) =>
        state?.ingredientsSort
          ? a.ingredients[0].localeCompare(b.ingredients[0])
          : b.ingredients[0].localeCompare(a.ingredients[0])
      );
    }

    if (sortBy === "price") {
      sortedProducts = searchedSnacks.sort((a, b) =>
        state?.priceSort ? a.price - b.price : b.price - a.price
      );
    }

    if (sortBy === "weight") {
      sortedProducts = searchedSnacks.sort((a, b) =>
        state?.weightSort
          ? Number(a.product_weight.slice(0, 2)) -
            Number(b.product_weight.slice(0, 2))
          : Number(b.product_weight.slice(0, 2)) -
            Number(a.product_weight.slice(0, 2))
      );
    }

    if (sortBy === "calories") {
      sortedProducts = searchedSnacks.sort((a, b) =>
        state?.caloriesSort ? a.calories - b.calories : b.calories - a.calories
      );
    }
  };

  return (
    <TableContext.Provider
      value={{
        state,
        dispatch,
        searchedSnacks,
        sortedProducts,
        sortSnacks
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
