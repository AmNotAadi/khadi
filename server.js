import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple file-based order store (in-memory cache + write-through)
const ordersFile = path.join(__dirname, 'orders.json');
let orders = [];
try {
  if (fs.existsSync(ordersFile)) {
    const raw = fs.readFileSync(ordersFile, 'utf-8');
    orders = JSON.parse(raw || '[]');
  }
} catch {}

function persistOrders() {
  try {
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), 'utf-8');
  } catch {}
}

// API to save order
app.post('/api/orders', (req, res) => {
  const { customer, items, totals } = req.body || {};
  if (!customer || !items || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Invalid order payload' });
  }
  const id = 'ord_' + Date.now();
  const createdAt = new Date().toISOString();
  const order = { id, createdAt, customer, items, totals };
  orders.push(order);
  persistOrders();
  res.json({ id, createdAt });
});

// Serve static site
app.use(express.static(path.join(__dirname, 'public')));
// Serve vendor assets (e.g., Bootstrap) locally to avoid CDN issues
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

// SPA-style fallbacks for top-level pages
app.get(['/','/shop','/cart'], (req, res) => {
  const page = req.path === '/shop' ? 'shop.html' : req.path === '/cart' ? 'cart.html' : 'index.html';
  res.sendFile(path.join(__dirname, 'public', page));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Khadi Skin Care site running on http://localhost:${PORT}`);
});


