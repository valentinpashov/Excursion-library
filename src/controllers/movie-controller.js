import { Router } from "express";
import movieService from "../services/movie-service.js";
import movie from "../movie.js";

const movieController = Router();

movieController.get('/search', (req, res) => {
  const filter = req.query;
  const movies = movieService.getAll(filter);

  res.render('search', { movies, filter });
});

movieController.get('/create', (req, res) => {
  res.render('create');
});

movieController.post('/create', (req, res) => {
  const newMovie = req.body;

  movieService.create(newMovie);

  res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
  const movieId = req.params.movieId;
  const movie = movieService.findOne(movieId);

  res.render('details', { movie });
});

movieController.delete("/:movieId/delete", (req, res) => {
  const movieId = req.params.movieId; 
  movieService.delete(movieId);
  res.redirect('/');
});

/*
// Update
movieController.put("/:movieId/update", (req, res) => {
  const movieId = req.params.movieId; 
  const movie = req.body;
  movieService.update(movieId, movie);
  res.redirect('/');
});
*/

export default movieController;
