'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Grid, Pin } from './ContactFormComponents'
import { Stylish, Roboto } from 'next/font/google'

const stylish = Stylish({
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2'>
      <div className='relative flex flex-col items-center overflow-hidden lg:items-start'>
        <h2
          className={`${stylish.className} mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-300 md:text-3xl lg:text-5xl`}>
          Contact us
        </h2>
        <p
          className={`${roboto.className} mt-8 max-w-lg text-center text-base text-neutral-600 dark:text-neutral-400 md:text-left`}>
          We look forward to discussing your project requirements.
        </p>

        <div className='div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32'>
          <Pin className='right-[-32px] top-[12px]' />

          <Image
            src='/world.svg'
            width={500}
            height={500}
            alt='world map'
            className='[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter'
          />
        </div>
      </div>
      <div className='relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 dark:from-neutral-900 dark:to-neutral-950 sm:p-10'>
        <Grid size={20} />
        <form
          action='https://public.herotofu.com/v1/b4649600-b05e-11ef-b6f4-4774a3a77de8'
          method='post'
          acceptCharset='UTF-8'
          className='relative z-20 w-full space-y-4'>
          <div className='w-full'>
            <label
              className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'
              htmlFor='name'>
              Full name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              className='h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white'
            />
          </div>
          <div className='w-full'>
            <label
              className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'
              htmlFor='email'>
              Email Address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              className='h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white'
            />
          </div>
          <div className='w-full'>
            <label
              className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'
              htmlFor='company'>
              Company
            </label>
            <input
              id='company'
              name='company'
              type='text'
              className='h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white'
            />
          </div>
          <div className='w-full'>
            <label
              className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'
              htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              required
              className='w-full rounded-md border border-transparent bg-white pl-4 pt-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white'
            />
          </div>
          <button
            type='submit'
            className='relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 md:text-sm'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
