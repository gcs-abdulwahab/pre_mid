import Room from '../models/RoomModel';
import { Request , Response } from 'express';

class RoomController{
    
    
    async getAllRoom(req: Request, res: Response) {
        
        const rooms = await Room.find() 
        res.json(rooms);
    }

}
 export default RoomController
