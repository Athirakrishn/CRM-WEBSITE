import Component from '@/components/pages/ROICalculator';

export const metadata = {
  title: 'ROI Calculator | Best CRM Software — Lumeo',
  description: 'See how much your agency can save with the best CRM software available. Lumeo is one of the best CRM platforms in Calicut, helping teams cut costs and grow faster.',
  keywords: ['best crm platforms in calicut', 'best crm software'],
  alternates: {
    canonical: 'https://crm.estgrp.in/roi-calculator',
  },
  openGraph: {
    title: 'ROI Calculator | Best CRM Software — Lumeo',
    description: 'Calculate your savings with the best CRM software for agencies.',
    url: 'https://crm.estgrp.in/roi-calculator',
    siteName: 'CRM by ESTGRP',
    images: [
      {
        url: 'https://crm.estgrp.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best CRM Software ROI Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Component />;
}