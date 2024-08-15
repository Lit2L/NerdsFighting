import { Inter as FontSans, Krona_One } from 'next/font/google'
import localFont from 'next/font/local'
import megrim from 'next/font/local'
import '../styles/globals.css'
import Hydrate from '@/components/Hydrate'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { TRPCReactProvider } from '@/trpc/react'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const kronaOne = Krona_One({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-krona-one'
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '/assets/BlackOpsOne-Regular.ttf',
  variable: '--font-heading'
})

const logoFont = localFont({
  src: '/assets/Northstar3D-4D3x.otf',
  variable: '--font-logo'
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nerdsfighting.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['Beginner Kickboxing', 'Advanced Kickboxing', 'Boxing', 'Muay Thai'],
  authors: [
    {
      name: 'Nerds Fighting',
      url: 'https://nerdsfighting.com'
    }
  ],
  creator: 'lit2l',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@lit2l'
  },
  icons: {
    icon: '/Group10.png',
    shortcut: '/Group10.png',
    apple: '/Group10.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={cn(fontSans.variable, fontHeading.variable, kronaOne.variable, logoFont.variable)}
    >
      <Hydrate>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <div className=''>{children}</div>
            <Analytics />
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </TRPCReactProvider>
      </Hydrate>
    </html>
  )
}
