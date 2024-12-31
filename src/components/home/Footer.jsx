import React from 'react'
import { Hyperspeed } from './../../animations/index'
import { BsArrowUpRight } from "react-icons/bs";
import { ShinyText, SpotlightCard, FollowCursor   } from './../../animations/index'
import { motion } from "framer-motion";

const Footer = () => {

    const SocialMedia = [
        {
            app: "Instagram",
            link: "https://www.instagram.com/thinakaranmanokaran/",
        },
        {
            app: "LinkedIn",
            link: "https://in.linkedin.com/in/thinakaran-manohar",
        },
        {
            app: "Whatsapp",
            link: "whatsapp://send?phone=9655982558&text=I'd%20like%20to%20chat%20with%20you",
        },
        {
            app: "GitHub",
            link: "https://github.com/thinakaranmanokaran",
        },
        {
            app: "Twitter",
            link: "https://x.com/DheenaManohar",
        },
        {
            app: "Old Portfolio",
            link: "https://thinakaranmanokaran.github.io/Portfolio/Main.html",
        },
    ]

    return (
        <div className='fixed bottom-0 bg-black z-10 h-full w-full ' >
            {/* <FollowCursor /> */}

            {/* <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'mountainDistortion',
                    length: 400,
                    roadWidth: 9,
                    islandWidth: 2,
                    lanesPerRoad: 3,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 50,
                    lightPairsPerRoadWay: 50,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.05, 400 * 0.15],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.2, 0.2],
                    carFloorSeparation: [0.05, 1],
                    colors: {
                      roadColor: 0x080808,
                      islandColor: 0x0a0a0a,
                      background: 0x000000,
                      shoulderLines: 0x131318,
                      brokenLines: 0x131318,
                      leftCars: [0xff102a, 0xEB383E, 0xff102a],
                      rightCars: [0xdadafa, 0xBEBAE3, 0x8F97E4],
                      sticks: 0xdadafa,
                    }
                  }}
            /> */}
            
            <div className='flex justify-end p-4  pb-8  h-full items-end ' >
                <div className="absolute z-20   p-6 pb-8 rounded-2xl shadow-md backdrop-blur-md " >
                    <form action="" className="flex flex-col text-white space-y-2 w-72 " >
                        <h1 className='font-sfb text-center text-2xl ' >Get in Touch</h1>
                        <label htmlFor="" className='relative  group ' >
                            <input type="email" name="" className='border-[1px] focus:outline-none shadow-md outline-none  peer  p-3 font-sm  border-[#ffffff20] bg-white bg-opacity-5 font-main w-full pt-6 transition-all duration-300 focus:h-12 h-8 backdrop-blur-lg rounded-xl  ' id="" />
                            <div className='text-sm absolute top-[10px] left-2 font-main peer-focus:text-xs peer-focus:left-1.5 peer-focus:top-1.5 transition-all duration-300 peer-focus:opacity-80 ' >Email</div>
                        </label>
                        <label htmlFor="" className='relative  group ' >
                            <textarea name="" id="" cols="30" rows="4" className='border-[1px] peer  shadow-md focus:outline-none  p-3 font-sm  outline-none transition-all duration-300 font-main pt-5 border-[#ffffff20] bg-white bg-opacity-5 w-full  backdrop-blur-lg rounded-xl  '  ></textarea>
                            <div className='text-sm absolute top-[10px] left-2 peer-focus:text-xs peer-focus:left-1.5 peer-focus:top-1.5  font-main transition-all duration-300 peer-focus:opacity-80  ' >Message</div>
                        </label>
                        <div className='flex flex-col items-end w-full' >
                            <div className='flex flex-col items-end -translate-y-1 relative overflow-hidden w-fit   rounded-full ' >
                                <button className='bg-white  text-black text-base  rounded-full w-24 font-roundman font-bold p-5 py-1 h-8' > </button>
                                <div className='  text-black text-base peer rounded-full peer z-30 absolute w-24 font-roundman font-bold pl-6 p-5 py-1 cursor-pointer ' >Submit</div>
                                <div className=' bg-purple w-40 h-20 absolute right-20 z-20 peer-hover:-right-40 hover:-right-40 transition-all duration-500 -rotate-45 -top-10 ' ></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className='   h-fit  absolute bottom-0 justify-start -translate-y-12  space-y-4 space-x-0 p-4 pb-8 ' >
                    <div className='flex justify-end flex-col  h-full  items-start space-y-2  ' >
                       {
                            SocialMedia.map((Media, index) => (
                                <a href={Media.link} target="_blank" className='text-white cursor-pointer group  flex items-center hover:underline  w-full transition-all duration-300 font-main text-2xl  ' rel="noopener noreferrer">
                                    <ShinyText text={`${Media.app}`} disabled={false} speed={4} className='transition-all duration-300 ' /> <BsArrowUpRight className='size-5 group-hover:translate-x-3 transition-all duration-300 ' />
                                </a>
                            ))
                       }
                    </div>
                    <div className="" >
                        <div className= ' text-white flex  space-x-2 font-iosthin text-lg   absolute pb-8 w-[40vw]  '>
                            <a className=" bg-white bg-opacity-5 backdrop-blur-lg px-6 py-1.5 rounded-full   w-fit " >Resume</a>
                            <div className=" bg-white bg-opacity-5 backdrop-blur-lg px-6 py-1.5 rounded-full w-fit  " >+91 6383 417749</div>
                            <div className=" bg-white bg-opacity-5 backdrop-blur-lg px-6 py-1.5 rounded-full w-fit  " >Tamilnadu, India</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full text-grey hover:text-[#F97300] bg-dark absolute bottom-0 tracking-wider py-1   font-footer text-[10px]   p-2  " >
                <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, repeatType: "loop", duration: 100, }} className='flex' >
                    <div>▞▚▞▚▞▚▞▚_Thinakaran_Manokaran_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Batman_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Sherlock_Holmes_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Thinakaran_Manokaran_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Batman_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Sherlock_Holmes_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Thinakaran_Manokaran_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Batman_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                    <div>▞▚▞▚▞▚▞▚_Sherlock_Holmes_▚▞▚▞▚▞▚▞_Copyright_2025_</div>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer