import { create } from "zustand";

const ribbonStyleStore = (set) => ({
  githubUrl: "https://github.com",
  ribbonColor: "#000000",
  ribbonHoverColor: "#3AA0D7",
  textColor: "#fff",
  textHoverColor: "#000",
  linesColor: "#fff",
  breakPoint: 800,
  alignment: "left",
  verticalPosition: "fixed", // or Sticky aka fixed
  shadowColor: { r: 75, g: 75, b: 150, a: 1 },
  shadowHorizontalOffset: 10,
  shadowVerticalOffset: 20,
  shadowBlurRadius: 12,
  shadowSpreadRadius: 11,

  setGithuUrl: (url) => {
    set({ githubUrl: url });
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
