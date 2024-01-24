import 'dotenv/config'
import express from 'express';
import mongoose from "mongoose";
import registerRouter from "./routes/register.route.js"
import loginRouter from './routes/login.route.js';
import loggedRouter from './routes/logged.route.js'
mongoose.connect(process.env.DB_URL).then(() => console.log('DB connected'))
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    
})

app.use('/users', registerRouter, loginRouter)
app.use('/logged', loggedRouter)
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})
