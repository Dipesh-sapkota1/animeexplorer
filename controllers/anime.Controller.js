
import axios from 'axios';

const URL = process.env.API_URI;


 export const getAnimes = async (req, res) => {
  try {
       const popular = await axios.get(`${URL}/top/anime?filter=bypopularity`);
       const current = await axios.get(`${URL}/top/anime?filter=airing`);
       const upcoming = await axios.get(`${URL}/top/anime?filter=upcoming`);
      const paime = popular.data.data;
      const canime = current.data.data;
      const uanime = upcoming.data.data;
      res.render('anime/index.ejs',{popularAnimes:paime,currentAnimes:canime,upcomingAnimes:uanime});
    
    
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};
 

export const getAnimeById = async (req, res) => {
  try {
    const details = await axios.get(`${URL}/anime/${req.params.id}/full`);
    const pictures = await axios.get(`${URL}/anime/${req.params.id}/pictures`);
    const data = details.data.data;
    const pics = pictures.data.data;
    res.render('anime/details.ejs',{animeDetails:data,pictures:pics});
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


