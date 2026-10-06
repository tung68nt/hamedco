-- Rollback migration: Remove bilingual columns from cms_products
-- Run this only if you need to rollback

ALTER TABLE cms_products DROP COLUMN IF EXISTS slug_en;
ALTER TABLE cms_products DROP COLUMN IF EXISTS category_ids;
ALTER TABLE cms_products DROP COLUMN IF EXISTS features;
ALTER TABLE cms_products DROP COLUMN IF EXISTS specifications;
ALTER TABLE cms_products DROP COLUMN IF EXISTS documents;
ALTER TABLE cms_products DROP COLUMN IF EXISTS clinical_images;
ALTER TABLE cms_products DROP COLUMN IF EXISTS seo;
ALTER TABLE cms_products DROP COLUMN IF EXISTS source_url;
ALTER TABLE cms_products DROP COLUMN IF EXISTS video_url;
ALTER TABLE cms_products DROP COLUMN IF EXISTS highlights;
ALTER TABLE cms_products DROP COLUMN IF EXISTS long_description;

DROP INDEX IF EXISTS idx_cms_products_slug_en;
DROP INDEX IF EXISTS idx_cms_products_category_ids;
