import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import { CalendarHeart, Pencil } from 'lucide-react'
import Link from 'next/link'

export function AnimatedMembersButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/nerdsfighting'
        className={cn(
          'group w-40 scale-100 rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className='flex items-center justify-center px-3 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <CalendarHeart className='mr-2 size-4 scale-x-[-.9] text-blue-300 transition-transform ease-in-out group-hover:translate-x-2' />
          <span className='font-sans text-xs font-semibold capitalize tracking-tighter'>Book</span>

          <Pencil className='ml-3 size-3 text-yellow-600 transition-transform ease-in-out group-hover:-translate-x-2' />
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
