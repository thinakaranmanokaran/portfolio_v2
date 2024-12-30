import React from 'react'
import CatDoubt from './../../assets/images/home/catdoubt.jfif'
import { motion } from 'framer-motion';

const Toast = ({ title, paragrabh, negative, positive, negOnClick, posOnClick, img, time }) => {
    return (
        <motion.div initial={{ top: -200 }} animate={{top: 0}} exit={{top: -200}}  className='fixed z-50 w-screen mt-3 left-1/2 -translate-x-1/2'  >
            <div className=' flex justify-center w-full  ' >
                <div className=" w-1/3 h-fit p-4 bg-[#35353570] rounded-2xl flex  justify-start backdrop-blur-xl transition-transform duration-500 ease-in-out   ">
                    <img src={img} className=" w-24  rounded-xl  transition-all duration-500 ease-in-out" />
                    <div className=" w-full  ml-2 flex flex-col justify-between ">
                        <div>
                            <div className=" flex mt-2 text-white font-sfb items-center justify-between">
                                <p className=" text-lg font-bold">{title}</p>
                                <span className=" text-xs opacity-50 ">{time}</span>
                            </div>
                            <p className=" text-[12px] text-light opacity-80 font-light  ">{paragrabh} </p>
                        </div>
                        <div className='flex justify-end text-sm font-roundman mt-2 space-x-2 ' >
                            <button onClick={negOnClick} className='bg-light50 text-black  rounded-lg px-2 scale-100 hover:scale-110 cursor-pointer transition-all duration-300  ' >{negative}</button>
                            <button onClick={posOnClick} className='bg-purple text-light  rounded-lg px-2 scale-100 hover:scale-110 cursor-pointer transition-all duration-300 ' >{positive}</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Toast