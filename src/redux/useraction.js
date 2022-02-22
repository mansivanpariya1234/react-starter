import {
  CLEAR,
  DELETE,
  EDIT,
  FILTER,
  FIND,
  SAVE,
  SEARCH,
  SIGN_IN,
  SUBMIT,
  UPDATE,
} from "./actiontype";

export const setSignInUser = (state) => {
  return {
    type: SIGN_IN,
    payload: state,
  };
};

export const setUserInfo = (state) => {
  return {
    type: SUBMIT,
    payload: state,
  };
};

export const setSaveInfo = (state) => {
  return {
    type: SAVE,
    payload: state,   
  };
};

export const setClearInfo = (state) => {
  return {
    type: CLEAR,
    payload: state,
  };
};

export const setDeleteInfo = (state) => {
  return {
    type: DELETE,
    payload: state,
  };
};

export const setEditInfo = (state) => {
  return {
    type: EDIT,
    payload: state,
  };
};

export const setUpdateInfo = (state) => {
  return {
    type: UPDATE,
    payload: state,
  };
};

export const setSearchInfo = (state) => {
  return {
    type: SEARCH,
    payload: state,
  };
};

export const setFilterInfo = (state) => {
  return {
    type: FILTER,
    payload: state,
  };
};

export const setFindInfo = (state) => {
  return {
    type: FIND,
    payload: state,
  };
};
