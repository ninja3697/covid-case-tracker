const mergeStatReducer = (prevState, updatedProp) => ({
  ...prevState,
  ...updatedProp
});

export default mergeStatReducer;
