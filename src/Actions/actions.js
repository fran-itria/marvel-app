export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_COMICS = "GET_COMICS";
export const GET_SERIES = "GET_SERIES";
export const GET_COMICS_CHARACTER = "GET_COMICS_CHARACTERS";
export const GET_COMIC_DETAIL = "GET_COMIC_DETAIL";

const apiKey = "313a39a119decf6f158366ccf87a612b";

export function getCharacters() {
  return async function (dispatch) {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`
    );
    const payload = await response.json();
    return dispatch({ type: GET_CHARACTERS, payload });
  };
}

export function getComics() {
  return async function (dispatch) {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?apikey=${apiKey}`
    );
    const payload = await response.json();
    return dispatch({ type: GET_COMICS, payload });
  };
}

export function getSeries() {
  return async function (dispatch) {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/series?apikey=${apiKey}`
    );
    const payload = await response.json();
    return dispatch({ type: GET_SERIES, payload });
  };
}

export function getComicsCharacter(id) {
  return async function (dispatch) {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${apiKey}`
    );
    const payload = await response.json();
    return dispatch({ type: GET_COMICS_CHARACTER, payload });
  };
}

export function getComicDetail(id) {
  return async function (dispatch) {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${apiKey}`
    );
    const payload = await response.json();
    return dispatch({ type: GET_COMIC_DETAIL, payload });
  };
}