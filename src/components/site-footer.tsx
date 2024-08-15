import Logo from './Logo'
import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { cn } from '@/lib/utils'
import * as React from 'react'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex h-20 w-full items-center justify-between bg-emerald-950/70'>
        <ThemeToggleButton />
        <div className='flex h-28 w-28 flex-col items-center justify-center'>
          <span className='h-28 w-28 translate-y-5'>
            <Logo />
          </span>
        </div>
      </div>
    </footer>
  )
}
