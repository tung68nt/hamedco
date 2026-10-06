"use client";

import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  content: string;
}

function extractHeadings(content: string): TocItem[] {
  const headings = content.match(/##\s+(.+)|###\s+(.+)/g) || [];
  
  return headings.map((h) => {
    const isH2 = h.startsWith('##');
    const text = h.replace(/^##+\s+/, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return { id, text, level: isH2 ? 2 : 3 };
  });
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const items = extractHeadings(content);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="toc-container" aria-label="Table of contents">
      <div className="toc-header">
        <svg className="toc-header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
        <h4 className="toc-title">Nội dung bài viết</h4>
      </div>
      <ul className="toc-list">
        {items.map((item) => (
          <li key={item.id} className="toc-item">
            <a
              href={`#${item.id}`}
              className={`toc-link ${item.level === 3 ? 'toc-link-h3' : ''} ${activeId === item.id ? 'active' : ''}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
