import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing'
}

export default function PricingPage() {
  return (
    <section className='container flex w-full max-w-5xl flex-col gap-6 py-8 md:max-w-5xl md:py-12 lg:py-24'>
      <div className='mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Nerds Kickboxing Club
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Easy customer management for your membership
        </p>
      </div>
      <div className='grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>Nerds Kickboxing Club Members Get:</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Icons.check className='mr-2 size-4' /> All Experience Levels Welcome
            </li>
            <li className='flex items-center'>
              <Icons.check className='mr-2 size-4' /> Beginner Friendly
            </li>

            <li className='flex items-center'>
              <Icons.check className='mr-2 size-4' /> Learn Technique & Skill
            </li>
            <li className='flex items-center'>
              <Icons.check className='mr-2 size-4' /> Full-body workout
            </li>
            <li className='flex items-center'>
              <Icons.check className='mr-2 size-4' /> Boxing Gloves & Hand Wraps Provided. (Loaners
              Available)
            </li>
            <li className='flex items-center'>
              <Icons.check className='mr-2 size-4' /> Team Support for your goals
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <div>
            <h4 className='text-7xl font-bold'>$119</h4>
            <p className='text-sm font-medium text-muted-foreground'>Billed Monthly</p>
          </div>
          <Link href='/login' className={cn(buttonVariants({ size: 'lg' }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className='mx-auto flex w-full max-w-[58rem] flex-col gap-4'>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7'>
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  )
}
