#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const srcDir = './src/app/css';
const componentsFile = path.join(srcDir, 'components.css');
const content = fs.readFileSync(componentsFile, 'utf8');

// Split by section headers
const sections = content.split(/(?=\/\* ── )/);

const groups = {
  'btns.css': sections.filter(s => s.match(/^\/\* ── (Buttons|Top Bar|Header|Desktop Nav|Theme Toggle|Mobile Nav|Mega Menu)/)),
  'cards.css': sections.filter(s => s.match(/^\/\* ── (Product Cards|Cards|Product Card specialized|Blog \/|Tag \/|News List)/)),
  'forms.css': sections.filter(s => s.match(/^\/\* ── (Forms|Search Bar|File Upload)/)),
  'footer-cta.css': sections.filter(s => s.match(/^\/\* ── (Footer|CTA Section|Floating CTA|Contact Panel Card|Inquiry Form)/)),
  'ui.css': sections.filter(s => s.match(/^\/\* ── (Badges|Breadcrumbs|Tabs|Spec Table|Feature List|Timeline|Philips Bento Grid|Service Card|Certificate Badge|Language Switcher)/)),
  'overlays.css': sections.filter(s => s.match(/^\/\* ── (Modal Popup|Lightbox|Toast|Pagination|Gallery|Product Detail Sidebar|Scroll-to-Top)/)),
  'feedback.css': sections.filter(s => s.match(/^\/\* ── (Loading States|Image Zoom|Quote Modal|Counter Animation)/)),
  'a11y.css': sections.filter(s => s.match(/^\/\* ── (Focus Styles|ARIA|Live Regions|Keyboard Nav|Motion Accessibility|Color Contrast)/)),
};

const header = `/* ============================================================
   HAMEDCO — Component Styles (modular)
   Auto-generated from components.css
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
