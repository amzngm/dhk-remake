import './globals.css'
import localFont from 'next/font/local'
import AppWrapper from '@/components/app-components/AppWrapper'

const helveticaNowDisplay = localFont({
  src: [
    {
      path: '../../public/font/helveticaNowDisplay/HelveticaNowDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/helveticaNowDisplay/HelveticaNowDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/helveticaNowDisplay/HelveticaNowDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/helveticaNowDisplay/HelveticaNowDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'dhk | architects, urban designers, interior designers',
    template: '%s',
  },
  description:
    "We create exceptional environments that enhance the human experience. dhk is a design-led studio of architects, urban designers and interior designers delivering buildings, public spaces and interiors that are contextually sensitive, environmentally responsible and technically resilient. Established in 1998, we're part of 10N, a collective created by Egis.",
  keywords: [
    'dhk',
    'architects',
    'urban designers',
    'interior designers',
    'architecture',
    'design studio',
    'dubai',
    'abudhabi',
    'uae',
    '10N collective',
    'Egis',
  ],
  authors: [{ name: 'dhk' }],
  creator: 'dhk',
  publisher: 'dhk',
  metadataBase: new URL('https://dhk-remake.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'dhk | architects, urban designers, interior designers',
    description:
      "We create exceptional environments that enhance the human experience. dhk is a design-led studio of architects, urban designers and interior designers. Established in 1998, we're part of 10N, a collective created by Egis.",
    url: 'https://dhk-remake.vercel.app/',
    siteName: 'dhk',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dhk | architects, urban designers, interior designers',
    description:
      'We create exceptional environments that enhance the human experience. dhk - architects, urban designers, interior designers. Part of 10N by Egis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/images/logos/main-logo.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${helveticaNowDisplay.className}`}>
      <body className="relative w-dvw h-full overflow-x-hidden bg-bg selection:bg-selectColor/50 text-text subpixel-antialiased lowercase scroll-smooth">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
