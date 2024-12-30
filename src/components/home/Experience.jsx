import React, { useState, useRef } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

import { ShinyText, SpotlightCard, BlurText, SplitText   } from './../../animations/index'

const Experience = () => {

    const ExperienceData = [
        {
            role: "Jr.Electrician - Jr.Plumber ",
            time: "Jan 2019 - Mar 2023",
            duration: "4 years",
            company: "SV Plumbing",
            describtion: "A professional plumbing and electrical services company specializing in residential and commercial projects, ensuring top-notch installation and maintenance solutions.",
            bglight: "#FFB5DA",
            bgdark: "#FF7ED4",
        },
        {
            role: "Web Developer",
            time: "May 2023 - 2024",
            duration: "1 year",
            company: "Freelancer",
            describtion: "A versatile platform for independent professionals delivering web development and digital solutions tailored to client needs worldwide.",
            bglight: "#ded9ff",
            bgdark: "#ad9eff",
        },
        {
            role: "Java Developer",
            time: "June 2024 - Sept 2024",
            duration: '4 mos',
            company: "inMakes Infotech",
            describtion: "A leading technology company offering cutting-edge solutions in software development, IT training, and digital transformation services.",
            bglight: "#d4efff",
            bgdark: "#91d9ff",
        },
        {
            role: "Web Developer Trainee ",
            time: "Aug 2024 - Nov 2024",
            duration: '4 mos',
            company: "Nucaza Innovations",
            describtion: "An innovative EdTech company focused on delivering creative and impactful solutions for education and e-learning platforms.",
            bglight: "#91f086",
            bgdark: "#48bf53",
        },
        {
            role: "Web Developer",
            time: "Aug 2024 - Nov 2024",
            duration: '3 mos',
            company: "Nucaza Innovations",
            describtion: "An innovative EdTech company focused on delivering creative and impactful solutions for education and e-learning platforms.",
            bglight: "#d1dbed",
            bgdark: "#82a4e8",
        },
    ]

    const ExperienceSlide = () => {

        const [currentIndex, setCurrentIndex] = useState(0);

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ExperienceData.length);
        };
    
        const handlePrev = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? ExperienceData.length - 1 : prevIndex - 1
            );
        };

        return(
            <div>
                <div>
                    <div className='flex space-x-3 w-full max-w-[40vw] font-roundman text-xl overflow-hidden'  >
                        {
                            ExperienceData.map((Data, index) => ( 
                                <div >
                                    <div  className='text-white bg-grey bg-opacity-5   w-full min-w-[40vw] h-[55vh] pb-0 rounded-2xl max-w-[50vw] border-2 backdrop-blur-lg border-[#ffffff20] ' >
                                        <AnimatePresence> 
                                            <motion.div  animate={{ x: `-${currentIndex * 41}vw` }} transition={{ duration: 1, ease: "easeInOut" }} className='relative   p-10 px-12   h-full w-full' >
                                                <div className='flex space-x-3 items-center' >
                                                    <h1>{Data.role}</h1>
                                                    <div className='w-2 h-2 bg-light rounded-full ' ></div>
                                                    <h4 className='text-[#626262]' >{Data.duration}</h4>
                                                </div>
                                                <div className='' >
                                                    <h3  className=' inline-flex mr-2 relative mt-4 text-transparent bg-clip-text bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] font-sfb border-b-0 w-fit before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-[#4158D0]   before:to-[#C850C0]'>  {Data.company} </h3> 
                                                    <ShinyText className='pt-1 ' text={Data.describtion} disabled={false} speed={4}  />
                                                </div>
                                                <p className='text-end font-main text-[18px] text-grey absolute bottom-4 right-6 ' >{Data.time}</p>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <div className='w-full flex justify-center items-center  mt-3 space-x-4 ' >
                                        <div onClick={handlePrev} className='rounded-full justify-center  w-9 h-9 items-center   p-1.5 group flex overflow-hidden cursor-pointer  border-[1px] ' >
                                            <HiArrowLeft className='size-56 group-hover:size-6   fill-light  duration-300 transition-all group-hover:-translate-x-10  ' />
                                            <HiArrowLeft className='group-hover:size-56 fill-light  duration-300 transition-all group-hover:-translate-x-0.5 translate-x-10 ' />
                                        </div>
                                            <div className=' flex space-x-1 ' >
                                                {ExperienceData.map((_, i) => (<div key={i}  onClick={() => setCurrentIndex(i)} className={`w-3 h-3 rounded-full  ${i === currentIndex ? 'bg-light transition-transform duration-300' : 'border-light border-[1px] transition-transform duration-300'} `}   ></div>))}
                                            </div>                                        
                                        <div onClick={handleNext} className='rounded-full justify-center  w-9 h-9 items-center   p-1.5 group flex overflow-hidden cursor-pointer  border-[1px] ' >
                                            <HiArrowRight className='size-56 group-hover:size-6   fill-light  duration-300 transition-all group-hover:translate-x-10  ' />
                                            <HiArrowRight className='group-hover:size-56 fill-light  duration-300 transition-all group-hover:translate-x-0 -translate-x-10 ' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div >
            <div className='p-6' >
                <div>
                    <BlurText className='text-white w-full text-center text-[100px] font-style ' text="Experience" />
                </div>
                <div className='flex justify-center mt-10'>
                    <ExperienceSlide />
                </div>
            </div>
        </div>
    )
}

export default Experience 