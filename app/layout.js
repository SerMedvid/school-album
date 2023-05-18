import './globals.css'
import { Comfortaa } from 'next/font/google'
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";
import 'rsuite/dist/rsuite-no-reset.min.css';


const comfortaa = Comfortaa({
  weight: ['500', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Шкільний альбом',
  description: 'Шкільний альбом 9В класу Академії дитячої творчості',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${comfortaa.className} min-h-screen flex flex-col`} >
        <Header />
        <main className="flex-auto px-4 flex">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
