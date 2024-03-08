import { atom } from "recoil";

export const tabToggleState = atom({
  key: "toggleState",
  default: 0,
});

export const openModalState = atom({
  key: "openState",
  default: false,
});
