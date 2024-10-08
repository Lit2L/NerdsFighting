'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'

export const FlipWords = ({
  words,
  duration = 3000,
  className
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState(words[0] ?? '') // Ensure a fallback value
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const startAnimation = useCallback(() => {
    const currentIndex = words.indexOf(currentWord)
    const nextIndex = (currentIndex + 1) % words.length
    const word = words[nextIndex] ?? words[0] ?? ''
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation()
      }, duration)
      return () => clearTimeout(timeout)
    }
  }, [isAnimating, duration, startAnimation])

  if (words.length === 0) {
    return null // Don't render anything if there are no words
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 0.3,
          y: 0
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 6
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 3,
          position: 'absolute'
        }}
        className={cn(
          'relative z-10 inline-block rounded-full px-2 text-left text-3xl font-bold text-black ',
          className
        )}
        key={currentWord}
      >
        {currentWord.split('').map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.08,
              duration: 0.4
            }}
            className='inline-block bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 bg-clip-text text-3xl font-bold text-transparent '
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
