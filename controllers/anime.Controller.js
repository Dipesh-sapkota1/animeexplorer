
import axios from 'axios';
import { config } from 'dotenv';
import { urlencoded } from 'express';

// Load environment variables
config();

const URL = process.env.API_URI;
const id = process.env.ID;


 
const option = {
  headers: {
    'X-MAL-CLIENT-ID': id
  },
  params: {
    fields:'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics'  }
}

 // Get multiple anime rankings
export const getAnimes = async (req, res) => {
  try {
   
    const [current, popular, upcoming] = await Promise.all([
      axios.get(`${URL}/ranking?ranking_type=airing`, option),
      axios.get(`${URL}/ranking?ranking_type=bypopularity`, option),
      axios.get(`${URL}/ranking?ranking_type=upcoming`, option)
    ]);

    const canime = current.data.data;
    const panime = popular.data.data;
    const uanime = upcoming.data.data;
          
    res.render('anime/index.ejs', { popularAnimes: panime, currentAnimes: canime, upcomingAnimes: uanime });   
      
  } catch (error) {
    console.error('Error in getAnimes:', error);
    res.status(500).json({ error: error.message });
  };
 
}
export const getAnimeById = async (req, res) => {

  try {

    const response = await axios.get(`${URL}/${req.params.id}`,option); 
    const data = response.data;
    res.render("anime/details.ejs",{details:data}); 
  } catch (error) {
    console.error('Error in getAnimes:', error);
    res.status(500).json({ error: error.message });
  }
}



export const searchByGenre = async (req, res) => {
  const genre = req.query.genre;
  try {
       const allAnime = await axios.get(`${URL}/ranking?ranking_type=all&limit=200`,option);
       const data = allAnime.data.data;
        const curGenre = data.filter(anime => 
          anime.node.genres.some(item => item.name === genre)
        );
      res.render("anime/results.ejs",{results:curGenre,genre:genre});
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
}
export const searchByName = async (req, res) => {
  const name = req.query.query;
  try {
       const allAnime = await axios.get(`${URL}?q=${name}&limit=10`,option);  
       const data = allAnime.data.data;
       res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
}




export const searchToResult = async (req, res) => {
  const name = req.body.search;

  try {
    const allAnime = await axios.get(`${URL}?q=${name}&limit=100`,option);  
       const data = allAnime.data.data;
      res.render("anime/results.ejs",{results:data,genre:name});
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
}