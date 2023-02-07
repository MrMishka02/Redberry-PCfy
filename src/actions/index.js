export const getSelectValues = (values) => {
  return {
    type: "SELECT_VALUE",
    payload: values,
  };
};

export const getInputValues = (values) => {
  return {
    type: "INPUT_VALUE",
    payload: values,
  };
};
