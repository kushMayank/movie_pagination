import xmlhttp from "../../apicaller";

export function callfetchPopularMovieList(page, cb) {
  console.log("page ", page);
  xmlhttp(
    `https://api.themoviedb.org/3/discover/movie?api_key=8b6244b21db3f5c31e6cdd3b5bada209&sort_by=popularity.desc&page=${page}`,
    response => {
      cb(response);
    }
  );
}
export function callfetchSearchMovieList(query, cb) {
  xmlhttp(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8b6244b21db3f5c31e6cdd3b5bada209&language=en-US&page=1&include_adult=false`,
    response => {
      cb(response);
    }
  );
}
