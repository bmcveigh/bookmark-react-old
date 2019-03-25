import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: 'String', required: true },
  email: { type: 'String', required: true },
  pass: { type: 'String', required: true },
});

export default mongoose.model('User', userSchema);