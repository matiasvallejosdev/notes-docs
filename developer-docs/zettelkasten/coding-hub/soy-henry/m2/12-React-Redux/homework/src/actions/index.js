export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

const API_KEY = "d8b1960";

export function getMovies(titulo) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`
    );
    const payload = await response.json();
    dispatch({ type: GET_MOVIES, payload });
  };
}
export function getMovieDetail(id) {
    return async function (dispatch) {
        if(id){
            try{

                const response = await fetch(
                    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
                    );
                    
                    const payload = await response.json();
                    if(payload.Response === "False"){
                        dispatch({ type: GET_MOVIE_DETAIL, payload: null });
                    } else{
                        dispatch({ type: GET_MOVIE_DETAIL, payload });
                    }
                } catch{
                    dispatch({ type: GET_MOVIE_DETAIL, payload: null });
                }
            } else{
                dispatch({ type: GET_MOVIE_DETAIL});
            }
      };
}
export function addMovieFavorite(movie) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: movie,
  };
}
export function removeMovieFavorite(id) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id,
  };
}
