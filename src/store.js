import { create } from "zustand";

const ribbonStyleStore = (set) => ({
  githubUrl: "https://github.com/benwmx/ForkMe-Generator",
  ribbonText: "Fork me On GitHub",
  ribbonColor: "#000000",
  ribbonHoverColor: "#7A9ADA",
  textColor: "#fff",
  textHoverColor: "#fff",
  linesColor: "#fff",
  breakPoint: 800,
  alignment: "right",
  verticalPosition: "fixed", // or Sticky aka fixed
  shadowColor: { r: 0, g: 0, b: 0, a: 0.8 },
  shadowHorizontalOffset: 4,
  shadowVerticalOffset: 4,
  shadowBlurRadius: 10,
  shadowSpreadRadius: 0,

  setGithubUrl: (url) => {
    set({ githubUrl: url });
  },
  setRibbonText: (text) => {
    set({ ribbonText: text });
  },
  setRibbonColor: (color) => {
    set({ ribbonColor: color });
  },
  setRibbonHoverColor: (color) => {
    set({ ribbonHoverColor: color });
  },
  setTextColor: (color) => {
    set({ textColor: color });
  },
  setTextHoverColor: (color) => {
    set({ textHoverColor: color });
  },
  setLinesColor: (color) => {
    set({ linesColor: color });
  },
  setBreakPoint: (point) => {
    set({ breakPoint: point });
  },
  setAlignment: (alignment) => {
    set({ alignment: alignment });
  },
  setVerticalPosition: (position) => {
    set({ verticalPosition: position });
  },
  setShadowColor: (color) => {
    set({ shadowColor: color });
  },
  setShadowHorizontalOffset: (offset) => {
    set({ shadowHorizontalOffset: offset });
  },
  setShadowVerticalOffset: (offset) => {
    set({ shadowVerticalOffset: offset });
  },
  setShadowBlurRadius: (radius) => {
    set({ shadowBlurRadius: radius });
  },
  setShadowSpreadRadius: (spread) => {
    set({ shadowSpreadRadius: spread });
  },
});

export const useRibbonStyleStore = create(ribbonStyleStore);
