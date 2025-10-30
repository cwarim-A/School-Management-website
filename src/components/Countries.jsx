import React from 'react'


const cardContent = [
    {
        id:1,
        title:"Lagos State",
        icon: "LAG",
        description:"Empowering schools in Nigeria’s commercial hub with digital tools that simplify administration, enhance teacher productivity, and enable data-driven decision-making for improved student outcomes"
    },
    {
        id:2,
        title:"Oyo State",
        icon: "OYO",
        description:"Supporting educational growth in Oyo State through AI-powered learning systems that streamline lesson delivery, performance tracking, and collaboration between schools and parents."
    },
    {
        id:3,
        title:"Abuja",
        icon: "ABJ",
        description:"Transforming education in the Federal Capital Territory with smart analytics, centralized school management, and seamless integration across public and private institutions."
    },
    {
        id:4,
        title:"Port Harcourt",
        icon: "PH",
        description:"Enhancing educational administration across Rivers State with automated reporting, attendance management, and cloud-based communication tools designed for schools of all sizes."
    }
]


const Countries = () => {
  return (
      <div className='flex flex-col justify-center items-center mx-auto my-40 ' id='countries-page'>
          <h1 className='border border-gray-500 rounded-2xl font-bold text-center w-fit flex justify-center mx-auto px-3 py-1  bg-[#F1F7FE] text-[#1E40AF] mb-10 '>National Presence </h1>
          <h1 className='text-5xl text-center font-bold text-[#0E2553]'>Choose Your Location</h1>
          <p className='text-center w-[50%] py-5 '>SchoolManagement operates across multiple states in Nigeria with localized solutions tailored to your region's educational standards and requirements.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 w-full max-w-6xl">
              {cardContent.map((item) => (
                  <div
                      key={item.id}
                      className="flex flex-col justify-center items-center bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center "
                  >
                      <span className='text-3xl bg-[white] text-[#1E40AF] mb-5 border-2 border-gray-300 rounded-full p-4 h-[80px] w-[80px] flex justify-center items-center'>
                          {item.icon}
                      </span>
                      <h2 className="text-lg font-semibold text-[#565E68] mb-2">
                          {item.title}
                      </h2>
                      <p className="text-[#747C86] text-sm">{item.description}</p>
                  </div>
              ))}
          </div>

      </div>
  )
}

export default Countries