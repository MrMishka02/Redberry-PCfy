const selectReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECT_VALUE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default selectReducer;
