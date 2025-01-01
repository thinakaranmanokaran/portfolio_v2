import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { RiSettings4Fill } from "react-icons/ri";

const Settings = () => {

    const [showToast, setShowToast] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    function showSettings() {
        setShowOptions(!showOptions);
    }

    const Customization = () => {

        const OptionData = [
            {
                title: "Animation"
            },
            {
                title: "Developer"
            },
            {
                title: "Music"
            },
    
        ]

        const ToggleSwich = React.memo(() => {
            const [toggled, setToggled] = useState(false);
    
            const switchON = () => {
                setToggled((prev) => {
                    const newState = !prev;
    
                    if (newState) {
                        // Show toast after 1 second
                        setTimeout(() => {
                            setShowToast(true);
                        }, 1000);
                    } else {
                        setShowToast(false); // Reset toast when toggled off
                    }
    
                    return newState;
                });
            };
    
            return (
                <div onClick={switchON} className={`w-10 h-6 rounded-full cursor-pointer transition-all duration-500 ${toggled ? ' bg-light50' : 'bg-light  '}`}>
                    <div className={`w-[20px] h-[20px] rounded-full duration-400 translate-y-[2px] transition-all shadow-lg ${toggled ? ' ml-[1px] bg-[#0c0c0c90]' : ' ml-[18px] bg-skyblue'}`}></div>
                </div>
            );
        });

        return (
            <div>
                <AnimatePresence initial={false}>
                    <motion.div key="box" initial={{ opacity: 0, scale: 0.5 }}  animate={{ opacity: 1, scale: 1 }}  exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} className={`w-full transition-opacity duration-500 relative z-50 text-xl text-light bg-light bg-opacity-10  font-subtitle  p-6 pr-8 rounded-3xl  `} >
                        {OptionData.map((Options, index) => (<div className=' leading-9 gap-16  flex items-center justify-between' >{Options.title} <ToggleSwich /></div>))}
                    </motion.div>
                </AnimatePresence>
            </div>
        )
    }

    return (
        <div className='flex  space-x-2 justify-start relative z-50' >
            <AnimatePresence >
                {showOptions &&
                    <motion.div key="box" initial={{ opacity: 0,filter: 'blur(10px)' }}  animate={{ opacity: 1,filter: 'blur(0px)' }}  exit={{ opacity: 0,filter: 'blur(10px)' }} transition={{ duration: 0.5 }}   >
                        <Customization />
                    </motion.div>
                }
            </AnimatePresence>
            <span onClick={showSettings} className={`text-dark h-fit bg-light p-1 rounded-full text-4xl transition-transform duration-300 ${showOptions ? "rotate-90" : "rotate-0"} `} ><RiSettings4Fill /></span>
        </div>
    )
}

export default Settings