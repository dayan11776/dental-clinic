import SplitText from "@/components/SplitText";
import Image from 'next/image';
import { Contact } from "./components/layout/contact";
import Link from "next/link";
import { Card } from "./components/layout/card";
import {  CarouselSize } from "./components/layout/carousel";
import Map from "./components/layout/map";

export default function Home() {
  return (
    <main className="p-2">
      <section className="mb-12">
        <Contact />
        <div className="flex items-center justify-center max-sm:flex-col max-sm:">
         <div className="max-sm:mb-4">
           <div className="flex items-start justify-start mb-12 max-sm:items-center max-sm:justify-center">
              <Image src="/upload/heavenly.png" alt="Uploaded Image" width={150} height={150}/>
              <div className="flex flex-col pt-12">
                <span className="text-5xl text-green-700 font-bold mb-2 border-b border-green-700 max-sm:text-4xl">Heavenly Touch</span>
                <SplitText
                  text="Smile like you mean it!"
                  className="text-3xl font-semibold w-fit max-sm:text-2xl"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
            </div>
          </div>
          <p className="flex flex-col text-start text-2xl flex-wrap mb-7 max-sm:text-center">
            <span>The Center for Implant & General Dentistry that is committed</span>
            <span>to providing patients with the most advanced dental </span>
            <span>procedures.</span>
          </p>
          <div className="max-sm:flex max-sm:justify-center">
            <Link href="#" className="flex items-center text-white mr-3 shadow py-2 px-4 rounded-2xl bg-white  w-fit dark:border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl">
              <span className="uppercase font-bold text-green-700 hover:text-green-800">Book now</span>
            </Link>
          </div>
         </div>
          <div className="">
            <Image src="/background/dental.png" alt="Uploaded Image" className=" top-0 right-0" width={700} height={700}/>
          </div>
        </div>
      </section>
      <section className="flex flex-col mb-12">
       <div className="bg-gray-100 py-12 dark:bg-slate-800 mb-12">
          <p className="flex flex-col text-5xl font-bold text-center mb-7 text-green-900 dark:text-green-700">
            <span>Welcome to </span>
            <span>Heavenly Touch Dental Clinic!</span>
          </p>
          <p className="flex flex-col text-2xl text-center font-md">
            <span>We continuously invest in the professional development of our team</span>
            <span>staying up-to-date with the latest advancements in dentistry. Rest assured, when you choose our clinic,</span>
            <span>you are choosing exceptional care delivered with precision and compassion.Your smile is our priority;</span>
            <span>we are here to provide you with the best dental care.</span>
          </p>
        </div>
        <CarouselSize />
        <Card />
        <Map />
      </section>
    </main>
  );
}
