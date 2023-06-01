import { create } from "zustand";

const ribbonStyleStore = (set) => ({
  githubUrl: "https://github.com",
  ribbonColor: "#000000",
  ribbonHoverColor: "#c11",
  textColor: "#fff",
  textHoverColor: "#fff",
  linesColor: "#fff",
  breakPoint: 800,
  alignment: "right",
  verticalPostion: "top",
  shadowColor: { r: 75, g: 75, b: 150, a: 1 },
  shadowHorizontalLength: 0,
  shadowVerticalLength: 0,
  blurRadius: 0,
  spreadRadius: 0,

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
    set({ alignment });
  },
  setVerticalPosition: (position) => {
    set({ verticalPosition: position });
  },
  setShadowColor: (color) => {
    set({ shadowColor: color });
  },
  setShadowHorizontalLength: (length) => {
    set({ shadowHorizontalLength: length });
  },
  setShadowVerticalLength: (length) => {
    set({ shadowVerticalLength: length });
  },
  setBlurRadius: (radius) => {
    set({ blurRadius: radius });
  },
  setSpreadRadius: (spread) => {
    set({ spreadRadius: spread });
  },
});

export const useRibbonStyleStore = create(ribbonStyleStore);
