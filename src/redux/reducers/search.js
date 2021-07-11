import {
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR,
  SET_SEARCH_VALUES,
  SET_REFINE_SEARCH_VALUES,
} from "../constants/actionTypes";

const initialState = {
  showSearch: false,
  initialValues: {
    coordinates: { lat: 29.7604267, lng: -95.3698028 },
    id: "",
    location: "",
    name: "",
    type: "",
    tags:[],
  },
};

const showSearch = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SEARCH_BAR:
      return {
        ...state,
        showSearch: true,
      };
    case HIDE_SEARCH_BAR:
      return {
        ...state,
        showSearch: false,
      };
    case SET_SEARCH_VALUES:
      return {
        ...state,
        initialValues: action.payload,
      };
    case SET_REFINE_SEARCH_VALUES:
        return {
          ...state,
          initialValues: action.payload,
        };
    default:
      return state;
  }
};

export default showSearch;
