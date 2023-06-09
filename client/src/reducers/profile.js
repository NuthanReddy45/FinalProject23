import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
} from "../actions/types";

const initialState = {
  profile: null,
  orgs: [],
  emps: [],
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        orgs: payload,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
      };
    case GET_REPOS:
      return {
        ...state,
        emps: payload,
        loading: false,
      };
    case NO_REPOS:
      return {
        ...state,
        emps: [],
        loading: false,
      };
    default:
      return state;
  }
}

export default profileReducer;
