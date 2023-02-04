const selectReducer = (state = "", action) => {
  switch (action.type) {
    case "Select_Value":
      return (state = action.payload);
    default:
      return state;
  }
};

export default selectReducer;
