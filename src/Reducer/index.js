import {
  GET_CHARACTERS,
  GET_COMICS,
  GET_SERIES,
  GET_COMICS_CHARACTER,
  GET_COMIC_DETAIL,
} from "../Actions/actions";

export const initialState = {};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case GET_COMICS:
      return {
        ...state,
        comics: payload,
      };
    case GET_SERIES:
      return {
        ...state,
        series: payload,
      };
    case GET_COMICS_CHARACTER:
      return {
        ...state,
        comics_character: payload,
      };
    case GET_COMIC_DETAIL:
      return {
        ...state,
        comic_detail: payload,
      };
    default:
      return state;
  }
}
