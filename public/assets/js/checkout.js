import { loadCart, getTotals } from './cart.js';

export function buildWhatsAppMessage(customer) {
  const items = loadCart();
  const lines = [];
  lines.push('*New Order / Price Inquiry - Khadi Skin Care*');
  lines.push('');
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`Address: ${customer.address}`);
  lines.push('');
  lines.push('*Items:*');
  items.forEach(i => lines.push(`- ${i.title} x${i.qty}`));
  lines.push('');
  lines.push('_Please confirm current prices and total._');
  return lines.join('\n');
}

export function openWhatsAppWithOrder(customer, businessNumber) {
  const message = buildWhatsAppMessage(customer);
  const encoded = encodeURIComponent(message);
  const phoneDigits = (businessNumber || '').replace(/\D/g, '');
  const url = `https://wa.me/${phoneDigits}?text=${encoded}`;
  window.open(url, '_blank');
}

export async function saveOrder(customer) {
  const items = loadCart();
  const totals = getTotals();
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer, items, totals })
    });
    if (!res.ok) throw new Error('Failed to save order');
    return await res.json();
  } catch (e) {
    // swallow to not block checkout; log for debugging
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
}

