import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    offer:"Cleanings",
    content:"It is important for patients to go to the dentist for oral prophylaxis, otherwise known as a cleaning.",
    image:"/upload/cleaning.jpg"
  },
  {
    offer:"Braces",
    content:"Braces are orthodontic devices used to straighten teeth, correct bite issues, and improve overall oral health and aesthetics.",
    image:"/upload/braces.jpg"
  },
  {
    offer:"Extractions",
    content:"Dental extractions are procedures to remove teeth that are damaged, decayed, or causing other dental issues, and they can be performed for various reasons.",
    image:"/upload/extraction.jpg"
  },
  {
    offer:"Dental X-Rays",
    content:"Dental X-rays are essential diagnostic tools used by dentists to evaluate oral health. They help detect issues such as cavities, bone loss, and infections that may not be visible during a regular examination.",
    image:"/upload/X_ray.jpg"
  },
  {
    offer:"Root Canals",
    content:"A root canal is a dental procedure designed to treat and preserve a tooth with infected or damaged pulp, relieving pain and preventing further infection.",
    image:"/upload/root_canal.jpg"
  },
  {
    offer:"Bridge",
    content:"A dental bridge is a common dental restoration used to replace one or more missing teeth by literally bridging the gap between remaining teeth",
    image:"/upload/bridge.jpg"
  },
  {
    offer:"Crown",
    content:"A dental crown is a tooth-shaped cap placed over a damaged or weakened tooth to restore its shape, size, strength, and appearance. It fully encases the visible part of the tooth above the gum line.",
    image:"/upload/crown.jpg"
  }
]

export const Services = () => {
  return (
    <>
      {
        services.map((item,index) => (
          <div key={index} className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
                <Image className="mb-4 rounded-t-lg h-1/2 w-full border-b" src={item.image} alt="Upload Image" height={400} width={400}/>
              <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.offer}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
                  </div>
                
              </div>
              <Link href="#" className="absolute bottom-0 m-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
          </div>
        ))
      }
    </>
  )
}
