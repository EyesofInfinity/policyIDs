# PhotonPro – Premium Photography Landing Page

A modern, high‑converting landing page to sell digital products (presets, templates, courses, guides) to photographers.

## Quick start
- Open `index.html` in your browser, or serve the folder:
  - Python: `python3 -m http.server 5173` and open `http://localhost:5173`

## Customize
- Branding: Update brand name, logo, and links in `index.html` header/footer.
- Text: Edit section copy directly in `index.html`.
- Accent color: Change `--accent` in `styles.css` (currently deep teal `#0f766e`).
- Images: Replace Unsplash images with your own optimized assets. Keep `loading="lazy"` where possible.
- Analytics: Replace `G-XXXXXXX` in `index.html` with your GA4 ID.
- Schema: Update JSON‑LD in `index.html` for your products, brand, and prices.
- Email capture: Replace the form stub in `script.js` with your provider (Mailchimp, ConvertKit). Hook into the `submit` handler or paste your provider’s embed.
- Checkout: Link pricing CTAs to Stripe Checkout or your cart platform.
- Support: Swap the support button action with your live chat snippet (Intercom, Crisp, Chatra) if desired.

## SEO
- Edit `<title>` and `<meta name="description">`.
- Ensure alt text is present for all images.
- Keep `robots.txt` and `sitemap.xml` updated with your final domain.

## Performance
- Images are lazy‑loaded; keep sizes appropriate for mobile/desktop.
- Minimal JS and no heavy frameworks.

## A/B testing ideas
- Try headline, CTA text/color, pricing emphasis, testimonial order. Duplicate `index.html` and vary elements, or use your testing tool.

## Accessibility
- Semantic HTML, keyboard‑friendly accordions, focus styles, color contrast. Verify with Lighthouse/axe.

## Files
- `index.html` – page markup, meta, and schema
- `styles.css` – styling, layout, and animations
- `script.js` – interactions: fade‑in, parallax, countdown, before/after, FAQ, email capture stub
- `robots.txt` and `sitemap.xml` – basic SEO files

## Deploy
- Any static host: Netlify, Vercel (as static), GitHub Pages, S3/CloudFront.