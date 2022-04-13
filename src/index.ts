import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index-routes';
import gamesRoutes from './routes/games-routes';
//const express = require('express')

class Server {

    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        //Morgan se utiliza para ver las peticiones y logs de cada peticion
        this.app.use(morgan('dev'));
        this.app.use(cors());
        //Esta es una funcion que ya trae la ultima version de express, antes se hacia con bodyparser
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))

    }


    routes(): void {
        this.app.use('/',indexRoutes)
        this.app.use('/api/games',gamesRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () =>{
            console.log(`Server on port `,this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();