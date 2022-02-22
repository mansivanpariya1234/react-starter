import {
  SIGN_IN,
  CLEAR,
  SUBMIT,
  DELETE,
  UPDATE,
  EDIT,
  SAVE,
  SEARCH,
  FILTER,
  FIND,
} from "./actiontype";

const initial_state = {
  userData: [],
  editData: {},
  searchData: [],
  filterData: [],
  findData: {},
};

const reducer = (state = initial_state, action) => {
  //debugger;
  //console.log(state, "=", action);
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        userData: action.payload,
        filterData: action.payload,
      };

    case SUBMIT:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };

    case SAVE:
      //debugger;
      const data = [...state.userData];
      const payload = action.payload;
      const newArr = [payload, ...data];
      return {
        ...state,
        userData: newArr,
      };

    case CLEAR:
      return {
        userData: [],
      };

    case DELETE:
      //debugger;
      const a = [...state.userData];
      const b = action.payload;
      let index = 0;
      for (let i = 0; i < a.length; i++) {
        const x = a[i];
        if (x.id === b) {
          index = i;
          break;
        }
      }
      a.splice(index, 1);
      return {
        ...state,
        userData: a,
      };

    case EDIT:
      //debugger;
      const _data = [...state.userData];
      const _payload = action.payload;
      let arr = null;
      for (let i = 0; i < _data.length; i++) {
        let a = _data[i];
        if (a.id === _payload) {
          arr = a;
          break;
        }
      }
      return {
        ...state,
        editData: arr,
      };

    case UPDATE:
      //debugger;
      let x = [...state.userData];
      let y = action.payload;
      var _index = 0;
      for (let j = 0; j < x.length; j++) {
        let temp = x[j];
        if (temp.id === y.id) {
          _index = j;
          break;
        }
      }
      x[_index] = y;
      return {
        ...state,
        userData: x,
      };

    case SEARCH:
      //debugger;
      return {
        ...state,
        searchData: action.payload,
      };

    case FILTER:
      let isData = [...state.userData];
      let isPayload = action.payload;
      let filter = isPayload
        ? isData.filter(
            (data) =>
              data.username.includes(isPayload) ||
              data.password.includes(isPayload)
          )
        : isData;
      return {
        ...state,
        filterData: filter,
      };

    case FIND:
      //debugger;
      const findState = [...state.userData];
      const findPayload = action.payload;
      let element = null;
      for (let i = 0; i < findState.length; i++) {
        let a = findState[i];
        if(a.id === parseInt(findPayload)){
          element = a;
          break;
        }
      }
      return {
        ...state,
        findData: element,
      };

    default:
      return state;
  }
};

export default reducer;
