import {} from 'dotenv/config';
import express from 'express';
import animeRoutes from './routes/anime.Routes.js';
import cors from 'cors';

const PORT = process.env.PORT;
const app = express();


app.use(cors());    

// Set the view engine
app.set('view engine', 'ejs');

// Set the static folder
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

// Routes
app.use('/anime', animeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
