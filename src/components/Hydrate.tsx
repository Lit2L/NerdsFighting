'use client'

import { SessionProvider } from 'next-auth/react'
import { useEffect, useState, type ReactNode } from 'react'

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  //Wait till Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <SessionProvider>
      {isHydrated ? (
        <body className='relative flex min-h-screen w-full max-w-full flex-col  overflow-x-hidden font-sans'>
          {children}
        </body>
      ) : (
        <body></body>
      )}
    </SessionProvider>
  )
}
