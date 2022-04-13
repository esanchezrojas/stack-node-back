import { Request, Response } from 'express';
import pool from '../database'

class GamesController {

    public async list(req: Request, res: Response) {

        const games = await pool.query('SELECT * FROM games');

        // res.json('list a games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {

        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);

        if(games.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({'message': "The games doesn't exists"})
        console.log(games)
        
        }

    

    public async create(req: Request, res: Response):Promise<void> {

        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
        res.json({ message: 'Game Saved' });
    }

    public update(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
        res.json({ text: 'updating a game ' + [id] });
    }

    public async delete(req: Request, res: Response):Promise<void> {

        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?',[id]);
        res.json({ message: 'delete a game ' + req.params.id });
    }


}


export const gamesController = new GamesController();