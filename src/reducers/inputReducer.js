const inputReducer = (state = "", action) => {
  switch (action.type) {
    case "Input_Value":
      return (state = action.payload);
    default:
      return state;
  }
};

export default inputReducer;
