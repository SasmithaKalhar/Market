import {
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR,
  SET_SEARCH_VALUES,
  SET_REFINE_SEARCH_VALUES,
} from "../constants/actionTypes";

// export const showSearch = (id) => ({ type: "SHOW", payload: id });
// export const hideSearch = (id) => ({ type: "HIDE", payload: id });

export const showSearch = () => ({ type: SHOW_SEARCH_BAR });
export const hideSearch = () => ({ type: HIDE_SEARCH_BAR });
export const setSearch = (payload) => ({ type: SET_SEARCH_VALUES, payload });
export const setRefineSearch = (payload) => ({ type: SET_REFINE_SEARCH_VALUES, payload });
// export const hideSearch = () => ({ type: HIDE_SEARCH_BAR });
