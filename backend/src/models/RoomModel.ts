import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    door: { type: String, require: true },
    window: {type: Number, require: true},
    
    
});
const Room = mongoose.model('Room', RoomSchema);
export default Room;
