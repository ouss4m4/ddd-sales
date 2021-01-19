import mongoose, { Schema, model } from 'mongoose';

// $ENV:dbpass=""; npm run dev

const dbpass = process.env.dbpass;
let db = `mongodb+srv://bzouss:${dbpass}@sales-cluster.pjvvs.mongodb.net/salesdb?retryWrites=true&w=majority`;

export const connectdb = () =>
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
      console.log('db connected');
    })
    .catch((err) => console.log(err));
