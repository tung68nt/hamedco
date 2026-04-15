import JsonLd from "./JsonLd";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author?: {
    name: string;
    type?: "Person" | "Organization";
  };
  datePublished?: string;
  dateModified?: string;
  image?: string;
  url: string;
  publisher?: {
    name: string;
    logo?: string;
  };
  category?: string;
  tags?: string[];
}

export default function ArticleSchema({
  headline,
  description,
  author = { name: "HAMEDCO", type: "Organization" },
  datePublished,
  dateModified,
  image,
  url,
  publisher = { name: "HAMEDCO", logo: "https://hamedco.com.vn/assets/images/logo.png" },
  category,
  tags,
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": author.type || "Person",
      "name": author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": publisher.logo ? {
        "@type": "ImageObject",
        "url": publisher.logo,
      } : undefined,
    },
    "image": image ? {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630,
    } : undefined,
    "articleSection": category,
    "keywords": tags?.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "timeRequired": undefined,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["article h1", ".article-headline"],
    },
  };

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": author.type || "Person",
      "name": author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": publisher.logo ? {
        "@type": "ImageObject",
        "url": publisher.logo,
      } : undefined,
    },
    "image": image ? {
      "@type": "ImageObject",
      "url": image,
    } : undefined,
    "articleSection": category,
    "keywords": tags?.join(", "),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      {datePublished && <JsonLd data={newsArticleSchema} />}
    </>
  );
}
