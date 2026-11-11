
export function gameReducer(state, action) {
  switch (action.type) {
    case "SELECT_TUBE":
      return {
        ...state,
        selectedTube: action.payload
      };

    case "RESET_GAME":
      return action.payload;

    default:
      return state;
  }
}
