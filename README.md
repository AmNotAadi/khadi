# Khadi Beauty - Skin & Haircare Products

A beautiful, responsive e-commerce website for organic skincare products.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Product Catalog**: Soaps, D-Tan Scrubs, Night Creams, Face Oils & Serums, Lip Love, Body Lotions & Face Creams
- **Shopping Cart**: Add products to cart with localStorage persistence
- **WhatsApp Integration**: Direct checkout via WhatsApp with pre-filled messages
- **Modern UI**: Glassy cards, animations, and premium design
- **SEO Optimized**: Meta tags, favicon, and semantic HTML

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6 modules)
- **Styling**: Bootstrap 5.3.0 (CDN)
- **Fonts**: Google Fonts (Playfair Display, Inter, Cormorant Garamond)
- **Icons**: Bootstrap Icons
- **Hosting**: Cloudflare Pages (Static)

## File Structure

```
public/
├── index.html          # Homepage
├── shop.html          # Product catalog
├── cart.html          # Shopping cart
├── favicon.svg        # Website favicon
└── assets/
    ├── css/
    │   └── styles.css # Custom styles
    ├── js/
    │   ├── app.js     # Main application logic
    │   ├── cart.js    # Cart functionality
    │   ├── checkout.js # Checkout & WhatsApp integration
    │   └── products.js # Product data
    └── img/
        ├── products/  # Product images
        └── categories/ # Category images
```

## Setup for Cloudflare Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/AmNotAadi/khadi.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Connect to GitHub repository
   - Build settings:
     - Build command: (leave empty)
     - Build output directory: `public`
     - Root directory: (leave empty)

3. **Add Images**:
   - Place product images in `public/assets/img/products/`
   - Place category images in `public/assets/img/categories/`
   - See image requirements below

## Image Requirements

### Product Images (`public/assets/img/products/`)
- **Format**: PNG or JPG
- **Size**: 400x400px recommended
- **Naming**: Use exact filenames from `products.js`

### Category Images (`public/assets/img/categories/`)
- **Format**: PNG or JPG  
- **Size**: 300x200px recommended
- **Naming**: Use exact filenames from `products.js`

## Customization

- **Colors**: Edit CSS variables in `styles.css`
- **Products**: Update `products.js` for product data
- **WhatsApp**: Change phone number in `checkout.js`
- **Timer**: Update event date in `app.js` (line 136)

## Contact

WhatsApp: +91 80073 82284

---

Built with ❤️ for Khadi Beauty