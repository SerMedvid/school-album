import Image from 'next/image'
import BackgroundImage from "@/app/Components/BackgroundImage/BackgroundImage";
import NorthernLight from "@/app/Components/NorthernLight/NorthernLight";

export default function Home() {


  return (
      <>
          <NorthernLight />
          <section className="w-full h-full bg-cover self-center	">
              <BackgroundImage img="/bg2.jpg" />
              <div className="self-center justify-center text-center font-[700]">
                  <h1 className="text-3xl md:text-5xl mb-4">Випускний альбом </h1>
                  <h2 className="text-2xl md:text-3xl">Академії Дитячої Творчості </h2>
              </div>
          </section>
      </>
  )
}
