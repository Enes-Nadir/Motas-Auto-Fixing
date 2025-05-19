const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment'); 

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://motas-df92da3367a5.herokuapp.com', 
}));

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://enesnadir:MT31yleSt1qXBt31@cluster0.6ps4jy2.mongodb.net/comments?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
  rating: Number,
  date: { type: Date, default: Date.now },
});

// Add virtual for formatted date
commentSchema.virtual('formattedDate').get(function() {
  return moment(this.date).format('DD/MM/YYYY');
});

const Comment = mongoose.model('Comment', commentSchema);

// Ensure virtuals are included in toJSON
commentSchema.set('toJSON', { virtuals: true });

app.post('/service', async (req, res) => {
  const { name, email, feedback, rating } = req.body;
  const newComment = new Comment({ name, email, feedback, rating });
  try {
    await newComment.save();
    res.json(newComment);
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ error: 'Failed to save comment' });
  }
});

app.get('/service', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
