#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const srcDir = './src/app/css';
const pagesFile = path.join(srcDir, 'pages.css');
const content = fs.readFileSync(pagesFile, 'utf8');

const sections = content.split(/(?=\/\* ── )/);

const groups = {
  'home.css': sections.filter(s => s.match(/^\/\* ── (Plus-sign pattern|Hero Carousel|Stats Counter|Intro Tagline|Philips Feature Card|Testimonial|Client Groups|Hospital Grid|Case Studies|Partners CTA|Certification)/)),
  'about.css': sections.filter(s => s.match(/^\/\* ── (About Page Redesign|Leadership Message|History Timeline)/)),
  'product.css': sections.filter(s => s.match(/^\/\* ── (Product Detail|Products Listing|Product Info Sidebar)/)),
  'contact.css': sections.filter(s => s.match(/^\/\* ── (Contact Page|Map Embed)/)),
  'career.css': sections.filter(s => s.match(/^\/\* ── (Career|Perks|Job Listing)/)),
  'blog.css': sections.filter(s => s.match(/^\/\* ── (Blog Cover|Blog Article|Blog Filter)/)),
  'gallery.css': sections.filter(s => s.match(/^\/\* ── (Gallery Main|Project Masonry)/)),
  'process.css': sections.filter(s => s.match(/^\/\* ── (Process Section|Why Choose Us)/)),
  'testimonials.css': sections.filter(s => s.match(/^\/\* ── (Testimonials)/)),
  'shared.css': sections.filter(s => s.match(/^\/\* ── (Page Hero|Quote Request|Partner Detail|Focus Styles Responsive)/)),
  'responsive.css': sections.filter(s => s.match(/^\/\* ── Responsive/)),
};

const header = `/* ============================================================
   HAMEDCO — Page Styles (modular)
   Auto-generated from pages.css
   ============================================================ */

`;

for (const [filename, parts] of Object.entries(groups)) {
  if (parts.length > 0) {
    const fileContent = header + parts.join('\n');
    fs.writeFileSync(path.join(srcDir, filename), fileContent);
    console.log(`Created ${filename} (${parts.length} sections)`);
  }
}

console.log('Done!');
