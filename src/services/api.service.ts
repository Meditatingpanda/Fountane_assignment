import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
class MoviesService {
     /**
     * Get all posts
     * @returns list of movies
     */
    getAllMovies() {
        return axios.get(`${url}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
    }
     
    /**
     * Get movie by id
     * @param id 
     * @returns movie
     */
    searchMovies(query: string) {
        return axios.get(`${url}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`);
    }


}

const moviesServiceInstance = new MoviesService();

export default moviesServiceInstance;


