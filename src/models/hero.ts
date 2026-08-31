import mongoose from 'mongoose';
const { Schema } = mongoose;

const heroSchema = new Schema({
  hero_name: { type: String, required: true },
  civil_name: { type: String, required: true },
  story: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  
});

export default mongoose.model('Hero', heroSchema);