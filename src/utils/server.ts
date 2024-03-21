import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { errorHandler, notFoundHandler } from '../modules/company/middlewares/errorHandlers';
import UserRoutes from '../modules/company/routes/userRoute'
// import fixtureRoute from '../routes/fixtureRoute';

function createServer() {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));

    // use middlewares
    app.use(cors({
        origin: 'http://localhost:4200'
    }));
    app.use(morgan('tiny'));
    app.use(bodyParser.json());

    //Home page
    app.get('/', (req, res) => {
        res.send('Welcome to My User Management App”!');
    });


    // use routes
    app.use('/user', UserRoutes);
    // app.use('/fixture', fixtureRoute);


    // handle 404 errors
    app.use(notFoundHandler);

    // handle errors
    app.use(errorHandler);


    return app;
}

export default createServer;