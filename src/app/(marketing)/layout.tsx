import { MobileNav } from '@/components/mobile-nav'
import { Navigation } from '@/components/navigation'
import { SiteFooter } from '@/components/site-footer'
import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { marketingConfig } from '@/config/marketing'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col justify-between overflow-x-hidden'>
      <header className='fixed inset-x-0 top-0 z-40 h-24 bg-gradient-to-bl from-emerald-500/90 via-emerald-400 to-emerald-600/95'>
        <div className='container flex items-center justify-center sm:justify-between'>
          <Navigation />
        </div>
      </header>
      <div className='mt-24'>{children}</div>
      <SiteFooter />
    </div>
  )
}
