'use client'

import Logo from '../Logo'
import { linkVariants, navVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: ' nav-link font-bold' }

export function Navigation() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='fixed inset-x-0 top-0 z-50 hidden h-24 w-full items-center justify-between border bg-gradient-to-bl from-emerald-600/90 via-emerald-500 to-emerald-600/90 px-6  md:flex md:justify-between '
    >
      <AnimatedLink href='/#' variants={linkVariants} className='h-20 w-28'>
        <Logo />
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-6'>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About Us
        </AnimatedLink>
        <AnimatedLink href='/#menu' variants={linkVariants}>
          Menu
        </AnimatedLink>

        <AnimatedLink href='/#schedule' variants={linkVariants}>
          Schedule
        </AnimatedLink>
        {/* <AnimatedLink href='/instructor' variants={linkVariants}>
          Instructors
        </AnimatedLink> */}

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
