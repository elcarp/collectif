import Footer from '~components/footer'
import Hero from '~components/hero'

export default function Home() {
  const products = [
    {
      title: `British Women's Group`,
      link: 'https://bwgbangkok.org/',
      thumbnail:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Screenshot%202024-11-30%20at%201.24.25%20PM-0zVCeR58VpmSAdWDtxDpE1CP7giHKR.png',
    },
    {
      title: 'Lise Carpenter - Freelance Developer',
      link: 'https://lisecarpenter.com/',
      thumbnail:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Screenshot%202024-11-30%20at%201.26.41%20PM-qySTnLxB8dCeZbj8QIZ5rjofQahwnZ.png',
    },
    {
      title: 'DeeMoney',
      link: 'https://staging.site.deemoney.com/',
      thumbnail:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Screenshot%202024-11-30%20at%201.28.30%20PM-VHz3xNjBilqTk1B0Em0Amt5s54htNr.png',
    },

    {
      title: 'Caelum Greene',
      link: 'https://www.caelumgreene.com/',
      thumbnail:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Screenshot%202024-11-30%20at%201.32.59%20PM-S9Ikgy6XcpBDq8fGZgxzRFoUPtIlYc.png',
    },
    {
      title: 'Linkalock',
      link: 'https://www.linkalock.com/',
      thumbnail:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Screenshot%202024-11-30%20at%201.35.48%20PM-Ve4deBfq9G0oifZodPrSKMqBkZ4RAG.png',
    },
    {
      title: 'Gluten Free Thailand',
      link: 'https://gfthailand.vercel.app/',
      thumbnail:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Screenshot%202024-11-30%20at%201.40.10%20PM-XpWJyjUP4CW77JwpnXMHccBgypuEh4.png',
    },
  ]

  return (
    <>
      <Hero products={products} />
      <Footer />
    </>
  )
}
