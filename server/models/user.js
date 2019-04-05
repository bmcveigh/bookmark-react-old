import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: 'String', required: true },
  email: { type: 'String', required: true },
  pass: { type: 'String', required: true },
  created: { type: 'Number', required: true },
  lastLogin: { type: 'Number', required: true },
  isAdmin: { type: 'Number', required: true },
  status: { type: 'Number', required: true },
  membershipType: { type: 'String', required: true },
  paymentMethodType: { type: 'String', required: true },
  preferences: { type: 'Object', required: true },
  bookmarkSpaces: { type: 'Array', required: true },
});

export default mongoose.model('User', userSchema);
