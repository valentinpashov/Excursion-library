import { v4 as uuid } from "uuid";
import movies from "../movie.js";

export default {
  getAll(filter = {}) {
    let result = movies;

    if (filter.search) {
      result = result.filter((movie) =>
        movie.place.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    if (filter.price) {
      result = result.filter(
        (movie) => movie.price.toLowerCase() === filter.price.toLowerCase()
      );
    }
    if (filter.year) {
      result = result.filter((movie) => movie.year === filter.year);
    }

    return result;
  },

  findOne(movieId) {
    const result = movies.find((movie) => movie.id === movieId);

    return result;
  },

  create(movieData) {
    const newId = uuid();

    movies.push({
      id: newId,
      ...movieData,
      rating: Number(movieData.rating),
    });

    return newId;
  },

  /*delete(movieId){
    let result = movies;
    for(let i =0; i< movies.length; i++){
      if(movies[i].id === movieId){
        movies.splice(i,1);
      }
    }

  }
    */
};
