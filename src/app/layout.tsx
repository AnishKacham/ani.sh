import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning={true} className='flex flex-col'>
      <body className={`${inter.className}` + " max-w-[940px] w-full self-center flex h-fit flex-col items-center justify-between p-2 bg-slate-50 dark:bg-gray-950"}>
        <Providers>
          <Navbar navItems={
          [{
            key: 'about',
            label: 'About'
          },
          {
            key: 'projects',
            label: 'Projects'
          },
          {
            key: 'articles',
            label: 'Articles'
          },
          {
            key: 'speaking',
            label: 'Speaking'
          }]
          }/>
          {children}
        </Providers>
        </body>
    </html>
  )
}
