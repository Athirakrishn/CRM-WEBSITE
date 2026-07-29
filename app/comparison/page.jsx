import Component from '@/components/pages/Comparison';

export const metadata = {
  title: 'Top CRM Software | Customer Relationship Management Software — Lumeo',
  description: 'Lumeo is a top CRM software offering complete customer relationship management software for Indian startups and SMEs, with affordable, budget-friendly subscription plans.',
  keywords: ['top crm software', 'customer relationship management software'],
  alternates: {
    canonical: 'https://crm.estgrp.in/comparison',
  },
  openGraph: {
    title: 'Top CRM Software — Lumeo',
    description: 'Affordable customer relationship management software for Indian SMEs.',
    url: 'https://crm.estgrp.in/comparison',
    siteName: 'CRM by ESTGRP',
    images: [
      {
        url: 'https://crm.estgrp.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Top CRM Software - Lumeo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Component />;
}