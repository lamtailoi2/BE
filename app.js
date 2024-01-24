import 'dotenv/config'
import express from 'express';
import mongoose from "mongoose";
import router1 from "./routes/register.route.js"
mongoose.connect(process.env.DB_URL).then(() => console.log('DB connected'))
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.json('Hello')
})

app.use('/users', router1)
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})
