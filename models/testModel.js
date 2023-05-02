import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
    name : String,
    age : Number,
});

const Test = models.Test || model('Test' , testSchema);

export default Test