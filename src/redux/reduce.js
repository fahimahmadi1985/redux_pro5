import actionType from "./actionType";
//DEFINE INITIAL STATE
const initialState = {
  pics: [],
  error: "",
  loading: false
};

//DEFINE REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.loading:
      return { loading: true };
    case actionType.success:
      return (state = { loading: false, pics: action.payload });
    case actionType.failure:
      return (state = { loading: false, error: action.payload });
    default:
      return state;
  }
};

export default reducer;
