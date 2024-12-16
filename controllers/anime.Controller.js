
import axios from 'axios';
import { config } from 'dotenv';
 

const URL = process.env.API_URI;
const id = process.env.ID;


const options = {
  headers: {
    'X-MAL-CLIENT-ID': id
  },
};
const option2 = {
  headers: {
    'X-MAL-CLIENT-ID': id
  },
  params: {
    fields: 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,rank,popularity,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,num_episodes,start_season,broadcast,source,rating,pictures,background,studios'
  }
}

 export const getAnimes = async (req, res) => {
   
  try {
      const current = await axios.get(`${URL}/ranking?ranking_type=airing`,options);
      const popular = await axios.get(`${URL}/ranking?ranking_type=bypopularity`,options);
      const upcoming = await axios.get(`${URL}/ranking?ranking_type=upcoming`,options);
      const paime = popular.data.data;
      const canime = current.data.data;
      const uanime = upcoming.data.data;
      res.render('anime/index.ejs',{popularAnimes:paime,currentAnimes:canime,upcomingAnimes:uanime});
      // res.send(paime);
    // console.log(popular.data);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};
 

export const getAnimeById = async (req, res) => {
  try {
    const details = await axios.get(`${URL}/anime/${req.params.id}/`,option2);
    const data = details.data.data;
    res.render("anime/details.ejs",{details:data});    
  }catch{
    res.status(500).json({ error: error.message });
    console.error(error);
  }
}


export const serchAnime = async (req, res) => {
  try {
       const genres = await axios.get(`${URL}/genres/anime`);
       const genreData = genres.data.data;
       const genre = genreData.find(item => item.name === req.query.genre);
       const animeType = await axios.get(`${URL}/anime?genres=${genre.mal_id}`);
       const results = animeType.data.data;
      res.render("anime/results.ejs",{results:results,genre:req.query.genre});
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
}


