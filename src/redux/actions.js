import actionType from "./actionType";

//DEFINE ACTIONS
const loadingAction = () => {
  return {
    type: actionType.loading
  };
};

const successAction = pics => {
  return {
    type: actionType.success,
    payload: pics
  };
};

const failureAction = error => {
  return {
    type: actionType.failure,
    payload: error
  };
};

export { loadingAction, successAction, failureAction };
