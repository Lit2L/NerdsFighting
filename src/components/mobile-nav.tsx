'use client'

import Logo from './Logo'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

import { AnimatePresence, motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useScrollspy } from 'use-scrollspy'

const navVariants: Variants = {
  hidden: {
    x: '100%',
    transition: {
      duration: 0.2,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: 'afterChildren'
    }
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: 'beforeChildren',
      staggerChildren: 0.05
    }
  }
}

const linkVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'circOut'
    }
  }
}

const MotionLink = motion(Link)

export function MobileNav() {
  const navRef = useRef<HTMLElement>(null)
  const navToggleRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((open) => !open)


  useScrollspy({
    ids: ['intro', 'projects', 'about', 'contact'],
    hrefs: ['/#intro', '/#projects', '/#about', '/#contact'],
    offset: 'topCenter',
    activeClass: 'active-nav-link'
  })

  const pathname = usePathname()

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible'
  }, [isOpen])

  return (
    <>
      <Link href='/#' className='fixed left-2 top-6 z-30 h-20 md:hidden'>
        <Logo />
      </Link>

      <button
        ref={navToggleRef}
        type='button'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={toggle}
        className='text-dark-900 fixed right-4 top-8 z-30 mix-blend-difference hover:opacity-60 dark:text-white md:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-8 w-8'
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.path
                key='close'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                exit={{ pathOffset: 1 }}
                transition={{ duration: 1, ease: 'circOut' }}
                strokeLinecap='square'
                strokeWidth={1.5}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <motion.path
                key='open'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                exit={{ pathOffset: 1 }}
                transition={{ duration: 1, ease: 'circOut' }}
                strokeLinecap='square'
                strokeWidth={1.5}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </AnimatePresence>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            variants={navVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='bg-dark-100 dark:bg-dark-700 fixed inset-y-0 right-0 z-20 flex h-full w-11/12 flex-col flex-wrap items-start justify-center gap-y-14 px-12 transition-colors md:hidden'
          >
            <motion.div variants={linkVariants}>
              <ThemeToggleButton />
            </motion.div>
            <MotionLink href='/#schedule' variants={linkVariants} className='mobile-nav-link'>
              Introduction
            </MotionLink>

            <MotionLink href='/#about' variants={linkVariants} className='mobile-nav-link'>
              About
            </MotionLink>
            <MotionLink href='/#contact' variants={linkVariants} className='mobile-nav-link'>
              Contact
            </MotionLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
