import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { cn } from '@/lib/utils'
import * as React from 'react'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container  flex h-28 w-full items-center justify-between bg-emerald-700/70 from-emerald-950 via-emerald-700 to-emerald-800 px-12 transition-colors dark:bg-gradient-to-br'>
        <div className='flex h-5/6 w-1/4 '>
          <ThemeToggleButton />
        </div>
        <div className='flex h-full flex-col justify-evenly font-serif text-sm'>
          <p className='text-md border-y py-1 font-logo text-white'>Nerds Fighting</p>
          {/* <p className='text-start  text-xs'>714-759-4294</p> */}
          <p className='border-y py-1 text-start text-xs'>
            8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
          </p>
        </div>
      </div>
    </footer>
  )
}
