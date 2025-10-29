# At The Turn Golf Co. — Shopify Theme Scaffold (Draft)

This repository contains a minimal Shopify theme scaffold for At The Turn Golf Co., prepared by GitHub Copilot.

What I pushed:
- layout/theme.liquid
- sections/hero.liquid
- sections/featured-products.liquid
- snippets/product-card.liquid
- assets/styles.css
- config/settings_schema.json
- shopify-products.csv (Shopify import CSV with placeholder image URLs)
- assets/PLACEHOLDERS.txt (list of image assets to add)

Next steps for you:
1. Upload your logo files and hat mockups to the repo under `assets/` (filenames below), or upload them to Shopify Admin -> Settings -> Files and paste URLs into `shopify-products.csv`.
2. In GitHub, confirm the files and open a Pull Request or merge the main branch.
3. Use Shopify CLI to preview the theme locally: `shopify theme serve` in the theme directory.
4. Import `shopify-products.csv` at Shopify Admin -> Products -> Import after replacing `REPLACE_WITH_SHOPIFY_FILE_URL` with actual File URLs.

Image filenames to add in `assets/`:
- header-hero.jpg (the header image you supplied)
- logo-badge.png
- logo-badge-white.png
- hat1.jpg ... hat12.jpg

If you want me to push images and complete the Shopify import, invite the GitHub user `copilot` as a collaborator (Write access) and also invite me as a Shopify collaborator or provide a short-lived custom app token with appropriate scopes.