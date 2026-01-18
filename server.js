const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  isVegetarian: Boolean,
  isSpicy: Boolean,
  preparationTime: Number,
  available: { type: Boolean, default: true }
}, { timestamps: true });

const reviewSchema = new mongoose.Schema({
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  customerName: String,
  rating: Number,
  comment: String,
  wouldRecommend: Boolean
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
const Review = mongoose.model('Review', reviewSchema);

// ================== MENU ROUTES ==================
app.get('/api/menu-items', async (req, res) => {
  const items = await MenuItem.find();
  res.json({ success: true, data: items });
});

app.post('/api/menu-items', async (req, res) => {
  const item = new MenuItem(req.body);
  await item.save();
  res.json({ success: true, data: item });
});

app.delete('/api/menu-items/:id', async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});


app.get('/api/reviews', async (req, res) => {
  const reviews = await Review.find().populate('menuItemId', 'name');
  res.json({ success: true, data: reviews });
});

app.post('/api/reviews', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json({ success: true, data: review });
});

app.delete('/api/reviews/:id', async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
