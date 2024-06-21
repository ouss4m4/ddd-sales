import mongoose, { Schema, model } from "mongoose";

// $ENV:dbpass=""; npm run dev

const dbpass = process.env.dbpass;
let db = `mongodb+srv://oussama:oussama@ddd-sales.j6ctwl2.mongodb.net/?retryWrites=true&w=majority&appName=ddd-sales`;

export const connectdb = () =>
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => console.log(err));
