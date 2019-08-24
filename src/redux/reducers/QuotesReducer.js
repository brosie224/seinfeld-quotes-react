const initialState = {
  all: [],
  filtered: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTES_COMPLETED":
      return {
        ...state,
        all: action.payload,
        filtered: []
      };
    case "RANDOM_QUOTE":
      return {
        ...state,
        filtered: state.all.filter(quote => quote.id === action.payload)
      };
    case "CHARACTER_QUOTE":
      return {
        ...state,
        filtered: state.all.filter(quote => quote.character === action.payload)
      };
    default:
      return state;
  }
};
