import mongoose from "mongoose";

var Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: String,
    Username: String,
    Password: String,
    Contact: String,
    Email: String
});

export default userSchema;