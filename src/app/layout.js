import './globals.css'
import localFont from 'next/font/local'
import AppWrapper from '@/components/app-components/AppWrapper'

const helveticaNowDisplay = localFont({
  src: [
    {
      path: '../../public/font/HelveticaNowDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/HelveticaNowDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/HelveticaNowDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/HelveticaNowDisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-main',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'dhk | architects, urban designers, interior designers',
    template: '%s | dhk',
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
  metadataBase: new URL('https://dhk.ae'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'dhk | architects, urban designers, interior designers',
    description:
      "We create exceptional environments that enhance the human experience. dhk is a design-led studio of architects, urban designers and interior designers. Established in 1998, we're part of 10N, a collective created by Egis.",
    url: 'https://dhk.ae',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${helveticaNowDisplay.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme') || 'dark'
                  document.documentElement.dataset.theme = theme
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className="relative w-dvw h-full bg-bg text-text font-main lowercase selection:bg-main selection:text-bg scroll-smooth antialiased md:subpixel-antialiased">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
