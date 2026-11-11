
import { createContext, useReducer } from "react";
import { gameReducer } from "../reducer/gameReducer";

export const GameContext = createContext(null);

const initialState = {
  tubes: [
    ["red", "blue", "green", "red"],
    ["blue", "green", "red", "blue"],
    ["green", "red", "blue", "green"],
    [],
    []
  ],
  selectedTube: null,
  tubeCapacity: 4,
  moves: 0,
  status: "playing"
};

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(
    gameReducer,
    initialState
  );

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
