import React from "react";
import {CombinedState, Store} from "redux";
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from "./redux/store";
import store from "./redux/redux-store";
import App from "./App";

const StoreContext = React
  .createContext<Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes> | null>
  (null);

type ProviderPropsType = {
  store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
  children: React.ReactNode;
}
export const Provider = (props: ProviderPropsType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
      </StoreContext.Provider>
  )
}

export default StoreContext;