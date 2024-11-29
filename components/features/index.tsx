'use client'
import React, { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import { IconCoffee, IconDeviceLaptop, IconRocket } from '@tabler/icons-react'
import Image from 'next/image'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  content: React.ReactNode
}

const features: Feature[] = [
  // ... (keep the existing features array as is)
]

export function FeaturesSection() {
  // ... (keep the existing FeaturesSection component as is)
}

interface StickyScrollProps {
  content: Feature[]
}

export const StickyScroll: React.FC<StickyScrollProps> = ({ content }) => {
  return (
    <div className='py-4 md:py-20'>
      <motion.div className='hidden lg:flex h-full flex-col max-w-5xl mx-auto justify-between relative p-10 '>
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className='flex lg:hidden flex-col max-w-5xl mx-auto justify-between relative p-10 '>
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}

interface ScrollContentProps {
  item: Feature
  index: number
}

export const ScrollContent: React.FC<ScrollContentProps> = ({
  item,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250])
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0]
  )

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0]
  )

  return (
    <motion.div
      ref={ref}
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className='my-20  relative grid grid-cols-2 gap-8'>
      <div className='w-full '>
        <motion.div
          style={{
            y: translate,
            opacity: index === 0 ? opacityContent : 1,
          }}
          className=''>
          <div>{item.icon}</div>
          <motion.h2 className='max-w-md mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white'>
            {item.title}
          </motion.h2>

          <motion.p className='text-lg text-neutral-400 font-regular max-w-sm mt-2'>
            {item.description}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{
          y: translateContent,
          opacity: opacity,
        }}
        className='h-full w-full rounded-md self-start'>
        {item.content}
      </motion.div>
    </motion.div>
  )
}

export const ScrollContentMobile: React.FC<ScrollContentProps> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className='my-10  relative flex flex-col md:flex-row md:gap-20'>
      <motion.div
        key={item.title + index}
        className='w-full rounded-md  self-start mb-8'>
        {item.content}
      </motion.div>
      <div className='w-full'>
        <motion.div className=' mb-6'>
          <div>{item.icon}</div>
          <motion.h2 className='mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white'>
            {item.title}
          </motion.h2>

          <motion.p className='text-sm md:text-base text-neutral-500 font-bold max-w-sm mt-2'>
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}
