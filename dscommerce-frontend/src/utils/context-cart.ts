import { createContext } from "react";

export type ContextCartCountType = {
  contextCartCount: number;
  setContextCartCount: (contextCartCount: number) => void;
};

export const ContextCartCount = createContext<ContextCartCountType>({
  contextCartCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setContextCartCount: () => { },
});
