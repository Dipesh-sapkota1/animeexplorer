import express from 'express';
import {getAnimes,  getAnimeById, serchAnime } from '../controllers/anime.Controller.js';

const router = express.Router();

router.get('/search', serchAnime);
router.get('/', getAnimes);
router.get('/:id', getAnimeById);


export default router;
