import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartCount] = useState(0);

  // Real product data with actual hat and towel mockups
  const products = [
    { id: 1, title: 'Camo on White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/zoqj7r1c_Camo%20on%20White.jpg', type: 'Hat' },
    { id: 2, title: 'Blue 2 on White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/nhif3hsg_Blue%202%20on%20White.jpg', type: 'Hat' },
    { id: 3, title: 'Carolina on Blue/White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/wleyt7mh_Carolina%20on%20BlueWhite.jpg', type: 'Hat' },
    { id: 4, title: 'Diego on Grey/Tan/Lite Tan', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/08ud1a25_Diego%20on%20GreyTanLiteTan.jpg', type: 'Hat' },
    { id: 5, title: 'Blue 2 on Cyan/White', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/tbhl66o1_Blue2%20on%20Cyan%20white.jpg', type: 'Hat' },
    { id: 6, title: 'Cali on White/Lite Blue/Orange', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/ht274tse_Cali%20on%20WhiteLiteBlueOrangy.jpg', type: 'Hat' },
    { id: 7, title: 'Camo on Brown/Tan', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/3c96tupo_Camo%20on%20BrownTan.jpg', type: 'Hat' },
    { id: 8, title: 'Carolina on Grey/Blue', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/zzjbm42q_Carolina%20on%20GreyBlue.jpg', type: 'Hat' },
    { id: 9, title: 'Pink on Grey/Pink', price: 28.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/apgebftr_Pink%20on%20GreyPink.jpg', type: 'Hat' },
    { id: 10, title: 'Carolina Blue Towel', price: 24.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/blbsokeu_Carolina%20Blue%20Towel.png', type: 'Towel' },
    { id: 11, title: 'Desert Towel', price: 24.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/s2sgdgox_Desert%20Towel.png', type: 'Towel' },
    { id: 12, title: 'Sunset Towel', price: 24.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/nmx4x4ks_Untitled%20Project%20%283%29.png', type: 'Towel' },
    { id: 13, title: 'OG Towel', price: 24.00, image: 'https://customer-assets.emergentagent.com/job_github-att/artifacts/8navq80a_OG%20Towel.png', type: 'Towel' },
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
            src="https://customer-assets.emergentagent.com/job_github-att/artifacts/qybvzyu2_Hubhouse.png" 
            alt="At The Turn Golf Co." 
          />
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