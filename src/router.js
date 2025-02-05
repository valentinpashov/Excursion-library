import { Router } from 'express';
import homeController from './controllers/home-controller.js';
import movieController from './controllers/movie-controller.js';
import express from 'express';

const routes = Router();

routes.use(homeController);
routes.use('/movies', movieController);

const router = express.Router();

//Трие
/*router.delete("/movies/:id/delete", (req, res) => {
    const movieId = req.params.id;
    console.log(`Филмът с ID ${movieId} е изтрит!`);
    res.status(200).json({ success: true, message: `Филмът с ID ${movieId} е изтрит.` });
  });
*/

routes.get('*', (req, res) => {    
    res.render('404');
});  
 
export default routes;   