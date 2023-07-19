import { snacks } from "../data";

export const initialState = {
  data: snacks,
  search: "",
  idSort: false,
  nameSort: false,
  weightSort: false,
  priceSort: false,
  caloriesSort: false,
  ingredientsSort: false
};

export const TableReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_ID_SORT":
      return { ...state, idSort: action.payload };
    case "SET_NAME_SORT":
      return { ...state, nameSort: action.payload };
    case "SET_WEIGHT_SORT":
      return { ...state, weightSort: action.payload };
    case "SET_PRICE_SORT":
      return { ...state, priceSort: action.payload };
    case "SET_CALORIES_SORT":
      return { ...state, caloriesSort: action.payload };
    case "SET_INGREDIENTS_SORT":
      return { ...state, ingredientsSort: action.payload };
    default:
      return state;
  }
};
