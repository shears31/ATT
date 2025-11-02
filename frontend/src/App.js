import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartCount] = useState(0);

  // Mock product data from the Shopify CSV
  const products = [
    { id: 1, title: 'Classic Golf Hat - Navy', price: 28.00, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop' },
    { id: 2, title: 'Premium Golf Hat - White', price: 28.00, image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=400&fit=crop' },
    { id: 3, title: 'Signature Golf Hat - Black', price: 28.00, image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop' },
    { id: 4, title: 'Golf Hat - Khaki', price: 28.00, image: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=400&h=400&fit=crop' },
    { id: 5, title: 'Performance Golf Hat - Grey', price: 28.00, image: 'https://images.unsplash.com/photo-1552446865-969e00f0cd7e?w=400&h=400&fit=crop' },
    { id: 6, title: 'Classic Golf Hat - Green', price: 28.00, image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop' },
    { id: 7, title: 'Golf Towel - White', price: 24.00, image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop' },
    { id: 8, title: 'Premium Golf Towel - Navy', price: 24.00, image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop' },
  ];

  const handleQuickAdd = (productTitle) => {
    alert(`Added "${productTitle}" to cart!`);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="logo-placeholder" style={{width: '44px', height: '44px', background: '#57B7E6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>ATT</div>
            <div>
              <div style={{fontWeight: '700', fontSize: '16px', color: '#0A4C6A'}}>At The Turn Golf Co.</div>
              <div className="tagline">Golf, Style & The Turn</div>
            </div>
          </div>
          <nav className="main-nav">
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">🔍</button>
            <button className="icon-btn" aria-label="Cart">
              🛒 {cartCount > 0 && <span>({cartCount})</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero hero-banner" aria-label="Site header">
        <div className="hero-banner__media">
          <img 
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&h=400&fit=crop" 
            alt="At The Turn Golf Co. header" 
          />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Golf. Style. The Turn.</h1>
            <p>Premium hats, towels and accessories crafted for the course and the clubhouse.</p>
            <a href="#featured" className="btn-primary">Shop New Releases</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="featured-section container">
        <h2>Featured</h2>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card" data-testid={`product-card-${product.id}`}>
              <a href="#" className="product-link">
                <img src={product.image} alt={product.title} loading="lazy" />
              </a>
              <h3>
                <a href="#">{product.title}</a>
              </h3>
              <p className="price">
                <span className="now">${product.price.toFixed(2)}</span>
              </p>
              <div className="product-cta">
                <a className="btn-secondary" href="#">View</a>
                <button 
                  className="btn-primary" 
                  onClick={() => handleQuickAdd(product.title)}
                  data-testid={`quick-add-${product.id}`}
                >
                  Quick add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-placeholder" style={{width: '44px', height: '44px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A4C6A', fontWeight: 'bold', marginBottom: '8px'}}>ATT</div>
              <p className="footer-tagline">Golf, Style & The Turn</p>
            </div>
            <div>
              <h4>Shop</h4>
              <a href="#">All Products</a><br/>
              <a href="#">Featured</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a><br/>
              <a href="#">Contact</a>
            </div>
          </div>
          <p className="copyright">© 2025 At The Turn Golf Co.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;