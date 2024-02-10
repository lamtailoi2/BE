import 'dotenv/config'
import express from 'express';
import mongoose from "mongoose";
import registerRouter from "./routes/register.route.js"
import changePasswordRouter from "./routes/changePassword.route.js"
import loginRouter from './routes/login.route.js';
import loggedRouter from './routes/logged.route.js'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import globalHandler from './utils/globalHandler.js'

mongoose.connect(process.env.DB_URL).then(() => console.log('DB connected'))
const app = express();
const port = 3001;

app.use(express.json())

app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use('/users', registerRouter, loginRouter, changePasswordRouter)
app.use('/logged', loggedRouter)
app.use(globalHandler);

// app.use(session({
//     resave: false,
//     saveUninitialized:false,
//     secret: 'ngngme',

// }))

// app.get('/', (req, res) => {
//     res.cookie('logged', false, {
//         maxAge: 10000,
//     })
//     console.log(req.cookies);
//     res.send('Hello')
// })

// app.get('/list', (req, res) => {
//     const { cart } = req.session;
//     console.log(req.session)
//     if (!cart) {
//         res.send('You dont have any cart')
//     } else {
//         res.send(cart)
//     }
    
// })

// app.post('/list/items', (req, res) => {
//     const { item, q } = req.body;
//     const cartItem = {item, q};
//     const { cart } = req.session
//     if (cart) {
//         req.session.cart.items.push(cartItem);
        
//     } else {
//         req.session.cart = {
//             items: [cartItem],
//         }
//     }
//     res.send('created')
// })



app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})
