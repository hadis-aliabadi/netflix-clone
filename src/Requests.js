const key = "557d16593fa3f8658693069987a8cd3b";

const requests = {
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRate:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    trending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    horror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`
}

export default requests;