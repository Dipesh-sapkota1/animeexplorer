import express from 'express';
import {getAnimes,  getAnimeById, searchByGenre , searchByName, searchToResult} from '../controllers/anime.Controller.js';

const router = express.Router();


router.get('/', getAnimes);
router.get('/search', searchByGenre); 
router.post('/results', searchToResult); 
router.get('/name', searchByName); 
router.get('/:id', getAnimeById);


export default router;
