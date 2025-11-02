const { Liquid } = require('liquidjs');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const engine = new Liquid({
  root: [
    path.resolve(__dirname, 'shopify-theme/layout'),
    path.resolve(__dirname, 'shopify-theme/sections'),
    path.resolve(__dirname, 'shopify-theme/snippets')
  ],
  extname: '.liquid',
  strictFilters: false,
});

// Register schema and comment as raw tags (Shopify-specific)
engine.registerTag('schema', {
  parse: function(tagToken, remainTokens) {
    this.tokens = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream
      .on('token', (token) => {
        if (token.name === 'endschema') stream.stop();
        else this.tokens.push(token);
      })
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
    stream.start();
  },
  render: function() { return Promise.resolve(''); }
});

// Shopify-like filters
engine.registerFilter('asset_url', (v) => `/assets/${v}`);
engine.registerFilter('img_url', (v, size) => v);
engine.registerFilter('money', (v) => `$${parseFloat(v).toFixed(2)}`);
engine.registerFilter('escape', (v) => v);

// Simple helper to load a JSON data file if present
function loadData(name){
  try {
    const p = path.resolve(__dirname, 'sample-data', `${name}.json`);
    return fs.readJsonSync(p);
  } catch (err) {
    return {};
  }
}

async function renderTemplate(inputFile, outFile, locals = {}) {
  const tpl = await fs.readFile(inputFile, 'utf8');
  const html = await engine.parseAndRender(tpl, locals);
  await fs.outputFile(outFile, html, 'utf8');
  console.log('Rendered', inputFile, '→', outFile);
}

async function main(){
  const outDir = path.resolve(__dirname, 'rendered');

  // Global data
  const products = loadData('products');
  const shop = loadData('shop');
  
  const globalData = {
    shop: shop,
    collections: {
      frontpage: {
        products: products.slice(0, 8)
      }
    },
    section: {
      settings: {}
    },
    content_for_header: '',
    content_for_footer: '',
    page_title: 'At The Turn Golf Co.'
  };

  // Render the main theme layout with sections
  const layoutPath = path.join(__dirname, 'shopify-theme/layout/theme.liquid');
  
  // Create a simple home page content
  const heroSection = await fs.readFile(path.join(__dirname, 'shopify-theme/sections/hero.liquid'), 'utf8');
  const featuredSection = await fs.readFile(path.join(__dirname, 'shopify-theme/sections/featured-products.liquid'), 'utf8');
  
  const heroHtml = await engine.parseAndRender(heroSection, {
    ...globalData,
    section: { settings: { hero_image: '', hero_image_alt: 'At The Turn Golf Co.' } }
  });
  
  const featuredHtml = await engine.parseAndRender(featuredSection, {
    ...globalData,
    section: { settings: { collection: 'frontpage' } }
  });
  
  globalData.content_for_layout = heroHtml + featuredHtml;

  const outPath = path.join(outDir, 'index.html');
  await renderTemplate(layoutPath, outPath, globalData);

  // Copy assets
  await fs.copy(path.join(__dirname, 'shopify-theme/assets'), path.join(outDir, 'assets'));

  console.log('\n✅ All done! Open rendered/index.html in your browser');
  console.log('Or run: yarn serve');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
