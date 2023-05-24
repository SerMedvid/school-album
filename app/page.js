import BackgroundImage from "@/app/Components/BackgroundImage/BackgroundImage";
import NorthernLight from "@/app/Components/NorthernLight/NorthernLight";
import AnimatedLayout from "@/app/Components/AnimatedLayout/AnimatedLayout";

export default function Home() {
  return (
      <>
          <NorthernLight />
          <BackgroundImage img="/bg2.jpg" />
          <AnimatedLayout>
              <section className="w-full h-full self-center	flex">
                  <div className="self-center justify-center text-center font-[700]">
                      <h1 className="text-3xl md:text-5xl mb-4">Випускний альбом </h1>
                      <h2 className="text-2xl md:text-3xl mb-2">Миколаївький ліцей &quot;Академія дитячої творчості&quot;</h2>
                      <h2 className="text-2xl md:text-3xl mb-4">9-В</h2>
                      <p className="text-lg">випуск 2022-2023 н.р</p>
                  </div>
              </section>
          </AnimatedLayout>
      </>
  )
}
