const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTES_COMPLETED":
      return action.payload;
    default:
      return state;
  }
};
