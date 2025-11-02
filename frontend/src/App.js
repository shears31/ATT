import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartCount] = useState(0);

  // Real product data with actual hat mockups
  const products = [
    { id: 1, title: 'Camo on White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/zoqj7r1c_Camo%20on%20White.jpg' },
    { id: 2, title: 'Blue 2 on White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/nhif3hsg_Blue%202%20on%20White.jpg' },
    { id: 3, title: 'Carolina on Blue/White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/wleyt7mh_Carolina%20on%20BlueWhite.jpg' },
    { id: 4, title: 'Diego on Grey/Tan/Lite Tan', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/08ud1a25_Diego%20on%20GreyTanLiteTan.jpg' },
    { id: 5, title: 'Camo on White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/zoqj7r1c_Camo%20on%20White.jpg' },
    { id: 6, title: 'Blue 2 on White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/nhif3hsg_Blue%202%20on%20White.jpg' },
    { id: 7, title: 'Carolina on Blue/White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/wleyt7mh_Carolina%20on%20BlueWhite.jpg' },
    { id: 8, title: 'Diego on Grey/Tan/Lite Tan', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/08ud1a25_Diego%20on%20GreyTanLiteTan.jpg' },
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
            <img src="https://customer-assets.emergentagent.com/job_github-att/artifacts/6b0fcpbl_At%20The%20Turn%20Carolina.png" alt="At The Turn Golf Co." style={{height: '50px', width: 'auto'}} />
            <div>
              <div style={{fontWeight: '700', fontSize: '16px', color: '#fff'}}>At The Turn Golf Co.</div>
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
            src="https://customer-assets.emergentagent.com/job_github-att/artifacts/yf04q665_Untitled%20design%20%282%29.png" 
            alt="At The Turn Golf Co. header" 
          />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <img 
              src="https://customer-assets.emergentagent.com/job_github-att/artifacts/o6xal3zb_Untitled%20design%20%282%29.png" 
              alt="At The Turn Logo" 
              style={{maxWidth: '200px', height: 'auto', marginBottom: '20px'}}
            />
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
              <img src="https://customer-assets.emergentagent.com/job_github-att/artifacts/6b0fcpbl_At%20The%20Turn%20Carolina.png" alt="At The Turn Golf Co." style={{height: '50px', width: 'auto', marginBottom: '8px'}} />
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