import {createStore, combineReducers} from 'redux';
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducers from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducers,
  auth: authReducer
});

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;