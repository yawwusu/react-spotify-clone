export const initialState = {
  user: null,
  token:
    "BQD5r4GW5k11Mp5nXdHi2TRi01n_MsUehCAuSMZ9KvIRVXa3WsgRJNthLV655yRzAnlogokCDqQTapELMkcPnNNc1IWJLf_RlMp6pfXcf_0d5EhRHyeWYl9rxyfiP22ugJkczRalTzNbhM2RQq5K5cjlkPJSEytMl_wOIMz_RrPamN1gdWdO", //null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
