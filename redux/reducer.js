import React from "react";
import { constants } from "./constants";

const istate = {
  menuData: [
    "New Group", "New Broadcast", "Web"
  ],
};

export const menuReducer = (state = istate, action) => {
  switch (action.type) {
    case constants.CHATMENU:
      return { menuData: action.payload };
    case constants.STATUSMENU:
      return { menuData: action.payload };
    case constants.CALLMENU:
      return { menuData: action.payload };
    default:
      return { ...state };
  }
};
