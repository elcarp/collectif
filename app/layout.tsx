import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Collectif Thailand',
  description:
    'An independent co-operative of talented developers, designers, project managers, QA and more. Your end-to-end partner for fast websites, mobile and software applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
