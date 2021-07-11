import {
  SHOW_HEADER,
  HIDE_HEADER,
} from "../constants/actionTypes";

const initialState = {
  showHeader: true,
};

const showHeader = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      return {
        ...state,
        showHeader: true,
      };
    case HIDE_HEADER:
      return {
        ...state,
        showHeader: false,
      };
    default:
      return state;
  }
};

export default showHeader;
