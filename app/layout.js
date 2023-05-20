import './globals.css'
import { Comfortaa } from 'next/font/google'
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";
import 'rsuite/dist/rsuite-no-reset.min.css';
import Providers from "@/app/Components/Providers/Providers";
import BackToTopButton from "@/app/Components/BackToTopButton/BackToTopButton";

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
        <Providers>
          <Header />
          <main className="flex-auto px-8 flex max-w-screen-xl mx-auto">
              {children}
          </main>
          <Footer />
          <BackToTopButton />
        </Providers>
      </body>
    </html>
  )
}
