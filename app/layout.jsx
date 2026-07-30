import './globals.css'
export const metadata = {
  title: 'Best CRM Software in Kerala | Manage Leads & Sales Efficiently',
  description: 'Looking for the best CRM software in Kerala? Simplify lead management, automate sales, track customers, and grow your business with an easy-to-use CRM solution. Request a free demo today.',
  verification: {
    google: '4BJ_RrzvBej9t5cPyOkvxYCQHcGE1xLNWboh_O6SepU',
  },
  openGraph: {
    title: 'Best CRM Software in Kerala | Manage Leads & Sales Efficiently',
    description: 'Looking for the best CRM software in Kerala? Simplify lead management, automate sales, track customers, and grow your business with an easy-to-use CRM solution. Request a free demo today.',
    url: 'https://crm.estgrp.in',
    siteName: 'CRM by ESTGRP',
    images: [
      {
        url: 'https://crm.estgrp.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best CRM Software in Kerala',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}