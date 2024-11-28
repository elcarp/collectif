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

const features = [
  {
    icon: <IconCoffee className='h-8 w-8 text-neutral-200' />,
    title: 'We can meet over a conference call or a coffee.',
    description:
      'Either way, we listen to understand your requirements, and work to offer the most effective and tailored solutions.',
    content: (
      <div>
        <Image
          src='https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='car'
          height='500'
          width='500'
          className='rounded-lg grayscale-50'
        />
      </div>
    ),
  },
  {
    icon: <IconDeviceLaptop className='h-8 w-8 text-neutral-200' />,
    title: 'Replicate great Art',
    description:
      'Generate the painting of renowned artists, like Van Gogh or Monet or Majnu bhai.',
    content: (
      <Image
        src='https://assets.aceternity.com/pro/art.jpeg'
        alt='car'
        height='500'
        width='500'
        className='rounded-lg grayscale-0'
      />
    ),
  },
  {
    icon: <IconRocket className='h-8 w-8 text-neutral-200' />,
    title: 'Batch generate images with a single click.',
    description:
      'With our state of the art AI, you can generate a batch of images within 10 seconds with absolutely no compute power.',
    content: (
      <div className='relative'>
        <div className='-rotate-[10deg]'>
          <Image
            src='https://assets.aceternity.com/pro/car-1.jpg'
            alt='car'
            height='500'
            width='500'
            className='rounded-lg'
          />
        </div>
        <div className='absolute inset-0 transform rotate-[10deg]'>
          <Image
            src='https://assets.aceternity.com/pro/car-2.jpg'
            alt='car'
            height='500'
            width='500'
            className='rounded-lg'
          />
        </div>
      </div>
    ),
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const backgrounds = ['#1f2937', '#262626', '#1e293b']

  const [gradient, setGradient] = useState(backgrounds[0])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = features.map((_, index) => index / features.length)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length])
  })
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className='w-full relative h-full pt-20 md:pt-40 mx-auto'>
      <div className='px-6 flex flex-col items-center text-center'>
        <h2 className='mt-4 text-white text-lg md:text-2xl lg:text-4xl font-bold'>
          We love solving a good problem.
        </h2>
        <p className='text-white text-sm md:text-base max-w-md mx-auto mt-4'>
          And we are passionate about delivering the most{' '}
          <strong>effective and comprehensive</strong> solutions.
        </p>
      </div>
      <StickyScroll content={features} />
    </motion.div>
  )
}

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
}) => {
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

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string
    description: string
    icon?: React.ReactNode
    content?: React.ReactNode
  }
  index: number
}) => {
  const ref = useRef<any>(null)
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
        {item.content && item.content}
      </motion.div>
    </motion.div>
  )
}

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string
    description: string
    icon?: React.ReactNode
    content?: React.ReactNode
  }
  index: number
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
        {item.content && item.content}
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
