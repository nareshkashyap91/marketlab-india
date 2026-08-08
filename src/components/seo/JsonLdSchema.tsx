import React from "react";

interface JsonLdProps {
  type: "WebSite" | "Organization" | "Article" | "FAQPage" | "BreadcrumbList";
  data: any;
}

export function JsonLdSchema({ type, data }: JsonLdProps) {
  let schema: any = {};

  if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MarketLab India",
      url: "https://marketlabindia.com",
      description: "Indian stock market education, technical analysis, options, Python algo trading, backtesting, and AI for finance.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://marketlabindia.com/tools?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  } else if (type === "Organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MarketLab India",
      url: "https://marketlabindia.com",
      logo: "https://marketlabindia.com/logo.png",
      sameAs: [
        "https://youtube.com/@marketlabindia",
        "https://twitter.com/marketlabindia",
        "https://linkedin.com/company/marketlabindia"
      ]
    };
  } else if (type === "Article") {
    schema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: data.title,
      description: data.shortAnswer,
      author: {
        "@type": "Person",
        name: data.author || "Naresh Kashyap",
        jobTitle: data.authorRole || "Chief Quantitative Analyst"
      },
      publisher: {
        "@type": "Organization",
        name: "MarketLab India",
        logo: {
          "@type": "ImageObject",
          url: "https://marketlabindia.com/logo.png"
        }
      },
      datePublished: data.publishedDate,
      dateModified: data.updatedDate
    };
  } else if (type === "FAQPage") {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq: { question: string; answer: string }) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
