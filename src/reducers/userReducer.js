import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SET_FILTER } from '../actions/userActions';

const initialState = {
  users: [],
  loading: false,
  error: null,
  filter: {
    name: '',
    username: '',
    email: '',
    phone: ''
  }
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
      };
    default:
      return state;
  }
};

export default usersReducer;
