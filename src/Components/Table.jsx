import { useContext } from "react";
import { TableContext } from "../Context/TableContext";
import "../styles.css";

export const Table = () => {
  const { state, dispatch, sortedProducts, sortSnacks } = useContext(
    TableContext
  );

  return (
    <div className="snacks-table">
      <input
        type="text"
        placeholder="Search with Products or Ingredients.."
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
      <table>
        <tbody>
          <tr>
            <th
              onClick={() => {
                dispatch({ type: "SET_ID_SORT", payload: !state.idSort });
                sortSnacks("id");
              }}
            >
              ID
            </th>
            <th
              onClick={() => {
                dispatch({ type: "SET_NAME_SORT", payload: !state.nameSort });
                sortSnacks("name");
              }}
            >
              Product Name
            </th>
            <th
              onClick={() => {
                dispatch({
                  type: "SET_WEIGHT_SORT",
                  payload: !state.weightSort
                });
                sortSnacks("weight");
              }}
            >
              Product Weight
            </th>
            <th
              onClick={() => {
                dispatch({ type: "SET_PRICE_SORT", payload: !state.priceSort });
                sortSnacks("price");
              }}
            >
              Price (INR)
            </th>
            <th
              onClick={() => {
                dispatch({
                  type: "SET_CALORIES_SORT",
                  payload: !state.caloriesSort
                });
                sortSnacks("calories");
              }}
            >
              Calories
            </th>
            <th
              onClick={() => {
                dispatch({
                  type: "SET_INGREDIENTS_SORT",
                  payload: !state.ingredientsSort
                });
                sortSnacks("ingredients");
              }}
            >
              Ingredients
            </th>
          </tr>
          {sortedProducts.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.product_name}</td>
              <td>{snack.product_weight}</td>
              <td>{snack.price}</td>
              <td>{snack.calories}</td>
              <td>{snack.ingredients.map((item) => `${item}, `)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
