import Component from '@/components/pages/WorkflowRedesign';

export const metadata = {
  title: 'Business CRM System in Calicut | Lumeo CRM',
  description: 'Looking for a reliable CRM system for your Calicut business? Lumeo offers a powerful business CRM system to automate workflows, sync data, and scale without chaos.',
  keywords: ['business crm system in calicut', 'crm system'],
  alternates: {
    canonical: 'https://crm.estgrp.in/workflow-redesign',
  },
  openGraph: {
    title: 'Business CRM System in Calicut | Lumeo CRM',
    description: 'Automate workflows with the business CRM system built for Calicut agencies.',
    url: 'https://crm.estgrp.in/workflow-redesign',
    siteName: 'CRM by ESTGRP',
    images: [
      {
        url: 'https://crm.estgrp.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Business CRM System in Calicut',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Component />;
}