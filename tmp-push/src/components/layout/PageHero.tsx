"use client";

import Link from "next/link";
import { useLocale } from "../LocaleProvider";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  image?: string;
}

export default function PageHero({ title, description, breadcrumbs, image }: PageHeroProps) {
  const { t } = useLocale();

  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero-bg">
          <img src={image} alt={title} />
          <div className="overlay" />
        </div>
      )}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-item">{t("Trang chủ", "Home")}</Link>
          {breadcrumbs.map((bc, i) => (
            <span key={i}>
              <span className="breadcrumb-separator">/</span>
              {bc.href ? (
                <Link href={bc.href} className="breadcrumb-item">{bc.label}</Link>
              ) : (
                <span className="breadcrumb-current">{bc.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="page-hero-content fade-in-up">
          <h1 className="display-md">{title}</h1>
          {description && <p className="body-lg">{description}</p>}
        </div>
      </div>
    </section>
  );
}
