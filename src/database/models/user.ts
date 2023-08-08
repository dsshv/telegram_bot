import mongoose from "mongoose";

const Schema = mongoose.Schema;

export default (database: any) => {
    try {
        return database.model('user');
    } catch (e) {
        // Continue
    }

}