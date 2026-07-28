export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://lumeo.estgrp.in';
  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/sandbox`, lastModified: new Date() },
    { url: `${baseUrl}/workflow-redesign`, lastModified: new Date() },
    { url: `${baseUrl}/case-studies`, lastModified: new Date() },
    { url: `${baseUrl}/roi-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/comparison`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
