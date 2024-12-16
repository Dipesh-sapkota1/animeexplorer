import {} from 'dotenv/config';
import express from 'express';
import router from './routes/anime.Routes.js';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(cors());    

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// Set the static folder
app.use(express.static("public"));


 

// Routes
app.use('/anime', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
