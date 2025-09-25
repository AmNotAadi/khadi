const CART_KEY = 'khadi_cart_v1';

export function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(product, qty = 1) {
  const cart = loadCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, title: product.title, img: product.img, qty });
  }
  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = loadCart().filter(i => i.id !== productId);
  saveCart(cart);
}

export function updateQty(productId, qty) {
  const cart = loadCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

export function getTotals() {
  const cart = loadCart();
  return { subtotal: 0, shipping: 0, total: 0, count: cart.reduce((n,i)=>n+i.qty,0) };
}

