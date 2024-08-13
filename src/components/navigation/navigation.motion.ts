import type { Variants } from 'framer-motion'

export const navVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.8
    }
  }
}

export const linkVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
