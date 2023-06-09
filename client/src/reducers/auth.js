import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("reducer ", type, payload);
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case ACCOUNT_DELETED:
    case AUTH_ERROR:
    case LOGOUT:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;

// import { REGISTER_FAIL,REGISTER_SUCCESS,
//     USER_LOADED,AUTH_ERROR,
//     LOGIN_SUCCESS,LOGIN_FAIL,
//     LOGOUT

// } from "../actions/types"

// const initialstate={
//     token:localStorage.getItem('token'),
//     isAuthenticated:null,
//     loading:true,
//     user:null
// }

// export default function(state=initialstate,action){
//     const {type,payload}= action;

//     switch(type){
//         case USER_LOADED:
//             return {
//               ...state,
//               isAuthenticated: true,
//               loading: false,
//               user: payload
//             };
//         case REGISTER_SUCCESS:
//         case LOGIN_SUCCESS:

//             localStorage.setItem('token',payload.token);
//             return {
//                 ...state,
//                 ...payload,
//                 isAuthenticated:true,
//                 loading:false
//             }
//         case REGISTER_FAIL:
//             case AUTH_ERROR:
//             case LOGIN_FAIL:
//             case LOGOUT:
//             console.log("reached the failure");
//             localStorage.removeItem('token');
//             return {
//                 ...state,
//                 token:null,
//                 isAuthenticated:false,
//                 loading:false
//             }

//             default:
//                 return state;
//     }

// }
