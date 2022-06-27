import { createContext } from "react";

export const GameContext = createContext({
  handsPlayed: 0,
  usePrizes: true,
  winningScore: 500,
});
