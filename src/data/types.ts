export interface LocalizedString {
  vi: string;
  en: string;
}

export interface ProductFeature {
  title: LocalizedString;
  desc: LocalizedString;
  image?: string;
}

export interface ProductSpecification {
  label: LocalizedString;
  value: LocalizedString;
}

export interface ProductDocument {
  label: string;
  url: string;
}

export interface ProductClinicalImage {
  url: string;
  caption: string;
}

export interface ProductSEO {
  title?: string;
  description?: string;
  slug?: string;
  canonical?: string;
  metaRobots?: string;
  faq?: Array<{ question: string; answer: string }>;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: LocalizedString;
  deviceType: 'sieu-am' | 'ct' | 'mri' | 'x-quang';
  priceTier: 'di-dong' | 'pho-thong' | 'tam-trung' | 'cao-cap';
  brand: string;
  description: LocalizedString;
  longDescription: LocalizedString;
  images: string[];
  thumbnail: string;
  sourceUrl?: string;
  videoUrl?: string;
  highlights: LocalizedString;
  features: ProductFeature[];
  specifications: ProductSpecification[];
  documents?: ProductDocument[];
  clinicalImages?: ProductClinicalImage[];
  seo?: ProductSEO;
}
