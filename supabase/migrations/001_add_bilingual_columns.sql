-- Migration: Add missing columns to cms_products for bilingual support
-- Run this in Supabase Dashboard → SQL Editor

-- Add slug_en for English URL
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS slug_en TEXT;

-- Add categoryIds as array of strings (replaces deviceType and priceTier single values)
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS category_ids TEXT[];

-- Add features as JSONB for bilingual features
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '[]'::jsonb;

-- Add specifications as JSONB
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS specifications JSONB DEFAULT '[]'::jsonb;

-- Add documents as JSONB
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS documents JSONB DEFAULT '[]'::jsonb;

-- Add clinical_images as JSONB
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS clinical_images JSONB DEFAULT '[]'::jsonb;

-- Add seo as JSONB for SEO configuration
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS seo JSONB DEFAULT '{}'::jsonb;

-- Add source_url
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS source_url TEXT;

-- Add video_url
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS video_url TEXT;

-- Add highlights as JSONB
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS highlights JSONB DEFAULT '{"vi":[],"en":[]}'::jsonb;

-- Add long_description as JSONB (bilingual)
ALTER TABLE cms_products ADD COLUMN IF NOT EXISTS long_description JSONB DEFAULT '{"vi":"","en":""}'::jsonb;

-- Create index for slug_en for faster lookups
CREATE INDEX IF NOT EXISTS idx_cms_products_slug_en ON cms_products(slug_en);

-- Create index for category_ids for faster filtering
CREATE INDEX IF NOT EXISTS idx_cms_products_category_ids ON cms_products USING GIN(category_ids);

-- Comments for documentation
COMMENT ON COLUMN cms_products.slug_en IS 'English URL slug for bilingual support';
COMMENT ON COLUMN cms_products.category_ids IS 'Array of category IDs for device types and price tiers';
COMMENT ON COLUMN cms_products.features IS 'Product features with bilingual title and description';
COMMENT ON COLUMN cms_products.seo IS 'SEO configuration including title, description, slug, faq';
