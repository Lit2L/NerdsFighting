'use client'

import Link from 'next/link'

export const Menu = () => {
  const menulist = [
    {
      id: 1,
      name: 'Membership',
      price: '$125 per month',
      description: 'Unlimited classes'
    },
    {
      id: 2,
      name: 'Private Sessions',
      price: '$100 per session',
      description: '1 hr private sessions'
    },

    {
      id: 3,
      name: 'Private One-On-One Sessions (monthly 4 pack)',
      description: '1 hr private sessions per week',
      price: '$350'
    },
    {
      id: 4,
      name: 'Private Group Session',
      description: '1 hr group session',
      price: '$125 per session'
    }
  ]
  return (
    <div className='h-full w-full'>
      <div className='container px-4 md:px-12'>
        <div className='mx-auto max-w-3xl space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>Menu</h2>
          <p className='leading-relaxed text-muted-foreground md:text-xl'>
            Check out what we offer and ask us about our specials!
          </p>
        </div>
        <div className='mt-12 rounded-lg border bg-background p-6 md:p-10'>
          <div className='aspect-[4/3] rounded-lg'>
            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/3 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>Membership</h3>
                <p className='text-xs sm:text-sm '>Unlimited Classes</p>
              </div>
              <p className='md:text-md w-1/3 text-end text-sm'>$125 per month</p>
            </div>
            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/3 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>Private Sessions</h3>
                <p className='text-xs sm:text-sm '>1 hr private sessions</p>
              </div>
              <p className='md:text-md w-1/3 text-end text-sm'>$100 per session</p>
            </div>
            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/3 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>
                  Private One-On-One Sessions (monthly 4 pack)
                </h3>
                <p className='text-xs sm:text-sm '>1 hr private sessions per week</p>
              </div>
              <p className='md:text-md w-1/3 text-end text-sm'>$350</p>
            </div>
            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/3 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>Private Group Session</h3>
                <p className='text-xs sm:text-sm '>1 hr group sessions</p>
              </div>
              <p className='md:text-md w-1/3 text-end text-sm'>$125 per session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
