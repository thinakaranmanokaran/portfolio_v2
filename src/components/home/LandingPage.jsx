import React, { useState, useEffect, useRef } from "react";
import { TfiExchangeVertical } from "react-icons/tfi";
import { RiSettings4Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import CheckBoard from './../../assets/images/home/Structure.png'
import Toast from "../global/Toast";
// import ToggleSwich from '../global/ToggleSwich';
import { ShinyText, SpotlightCard, SplitText, BlurText, Magnet, SmallBlob } from './../../animations/index'
import Images from './../../assets/images/index'
import Settings from "../global/Settings";

const LandingPage = () => {

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

    const [changeSize, setChangeSize] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    function showSettings() {
        setShowOptions(!showOptions);
    }

    function setChange() {
        setChangeSize(!changeSize);
    }

    const [gpuInfo, setGpuInfo] = useState("Unknown");

    useEffect(() => {
        const getWebGLInfo = () => {
            try {
                const canvas = document.createElement("canvas");
                const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                if (gl) {
                    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    setGpuInfo(renderer || "Not available");
                } else {
                    setGpuInfo("WebGL not supported");
                }
            } catch (error) {
                setGpuInfo("Error fetching GPU info");
            }
        };

        getWebGLInfo();
    }, []);

    // Filter GPU Info
    const getFilteredGPUInfo = (gpuInfo) => {
        if (/amd/i.test(gpuInfo)) return "AMD";
        if (/intel/i.test(gpuInfo)) return "Intel";
        if (/nvidia/i.test(gpuInfo)) return "NVIDIA";
        return "Other"; // For unknown GPUs
    };

    const [showToast, setShowToast] = useState(false);

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
                    <motion.div key="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} className={`w-full transition-opacity duration-500 relative z-50 text-xl text-light bg-light bg-opacity-10  font-subtitle  p-6 pr-8 rounded-3xl  `} >
                        {OptionData.map((Options, index) => (<div className=' leading-9 gap-16  flex items-center justify-between' >{Options.title} <ToggleSwich /></div>))}
                    </motion.div>
                </AnimatePresence>
            </div>
        )
    }

    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 }); // Cursor target
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 }); // Current animation position

    const positionRef = useRef({ x: 0, y: 0 });

    // useEffect(() => {
    //     let animationFrameId;

    //     const animate = () => {
    //         positionRef.current = {
    //             x: positionRef.current.x + (targetPosition.x - positionRef.current.x) * 0.1,
    //             y: positionRef.current.y + (targetPosition.y - positionRef.current.y) * 0.1,
    //         };

    //         // You can manually update only when necessary
    //         setCurrentPosition(positionRef.current);

    //         animationFrameId = requestAnimationFrame(animate);
    //     };

    //     animate();

    //     return () => cancelAnimationFrame(animationFrameId);
    // }, [targetPosition]);


    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();
        const offsetX = ((clientX - rect.left) / rect.width - 0.5) * 5; // Normalize and scale to ±10%
        const offsetY = ((clientY - rect.top) / rect.height - 0.5) * 5;
        setTargetPosition({ x: offsetX, y: offsetY }); // Update the target position
    };

    const BlobShape = ({ className }) => {
        return (
            <div
                className="absolute top-0 left-0 z-20  w-screen h-screen"
            // onMouseMove={handleMouseMove}
            >
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1600"
                    height="500"
                    className={className}
                // onclick={setChange}
                // style={{
                //     transform: `translate(${currentPosition.x}%, ${currentPosition.y}%)`,
                // }}
                >
                    <path
                        fill="#FCCD2A"
                        d="M43.2,-14.3C50.6,8.6,47.4,34.8,32,46.6C16.6,58.4,-11.1,55.8,-33.3,40.8C-55.5,25.9,-72.4,-1.6,-65.9,-23.3C-59.5,-45,-29.7,-60.9,-5.9,-59C17.9,-57.1,35.9,-37.3,43.2,-14.3Z"
                        transform="translate(250 100)"
                    />
                </svg>
            </div>
        );
    };

    const BlackShape = ({ className }) => {
        return (
            <div
                className="absolute top-72 left-96 z-20   w-screen h-screen"
            // onMouseMove={handleMouseMove}
            >
                <svg
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1600"
                    height="500"
                    className={className}
                // onclick={setChange}
                // style={{
                // transform: `translate(${currentPosition.x}%, ${currentPosition.y}%)`,
                // }}
                >
                    <path fill="#151515" d="M59,-24.7C68.9,-16.8,64.3,8.8,52,29.6C39.7,50.4,19.9,66.5,2.8,64.8C-14.2,63.2,-28.3,43.9,-36.6,25.3C-45,6.8,-47.4,-11,-40.3,-17.2C-33.2,-23.4,-16.6,-18,4,-20.3C24.5,-22.6,49,-32.5,59,-24.7Z" transform="translate(100 100)" />

                </svg>
            </div>
        );
    };


    return (
        <>
            <div>
                <div className='flex h-screen w-screen items-center lg:items-start lg:justify-between'>
                    <div className=' p-4 lg:ml-16 md:mt-32  relative z-50 w-full lg:w-4/6 ' >
                        <div className='text-light50 font-supertalls text-lg lg:text-2xl w-full min-w-[310px] md:w-3/5 lg:w-4/5' ><BlurText text="In a world of challenges, I stand ready. " /><SplitText className='font-edge text-3xl lg:text-6xl opacity-100 text-light' text="Thinakaran Manokaran " delay={80} /> <BlurText text=". with " /> <BlurText className=' text-light opacity-100' text="Sherlock’s" /> <BlurText text=" mind and" /> <BlurText className=' text-light opacity-100' text="Batman’s" /> <BlurText text="resolve, I craft solutions that last." /></div>
                        <div className='flex items-start justify-between w-3/4 mt-10' >
                            <div className='text-light font-supertalls text-lg lg:text-xl flex items-center ' > <SplitText text="Web Developer " delay={50} /><TfiExchangeVertical className='fill-light size-4 ml-2 ' /> </div>
                            <div className="hidden " >
                                <Settings />
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <img src={CheckBoard} alt="check-board" className='absolute top-0 right-20 h-5/6 opacity-65 '                     style={{    transform: `translate(${currentPosition   .x}%, ${currentPosition    .y}%)`}} />
                        <div className='absolute w-1/2 h-1/2 -right-40 top-40 -z-0 rounded-custom animate-pulse saturate-200 blur-[160px] bg-orange ' ></div>
                        <BlobShape />
                        <BlackShape />
                    </div> */}
                    <div className=" absolute lg:static bg-  z-30 w-fit h-screen top-36 md:top-10 left-1/2 -translate-x-1/2  md:translate-x-0 md:right-4 lg:translate-y-20 flex   " >
                        <Magnet padding={2000} disabled={false}  >
                            <AnimatePresence>
                                <motion.div className="   left-0  top-0  w-full  " initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 2 }} >
                                    <div className=" w-60 h-60 md:w-[400px] md:h-[400px] rounded-full" style={{ background: "radial-gradient(circle at 40% 30%,#0000 4%,57%,#000 85%) #FC4F00", boxShadow: "0 0px 60px rgba(0, 0, 0, 0.6)", }} ></div>
                                </motion.div>
                            </AnimatePresence>
                        </Magnet>
                        <SmallBlob padding={1400} disabled={false}  >
                            <AnimatePresence>

                            <motion.div className="   absolute top-40 md:top-72 md:-left-[50vw] -left-[30vw] lg:-left-[20vw] " initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 2 }} >
                                    <div className=" w-32 h-32 md:w-[200px] md:h-[200px] rounded-full" style={{ background: "radial-gradient(circle at 40% 30%,#0000 4%,57%,#000 85%) #0C0C0C", boxShadow: "0 0px 100px rgba(0, 0, 0, 1)", }} ></div>
                                </motion.div>
                            </AnimatePresence>
                        </SmallBlob>
                    </div>
                        <div className='absolute w-1/2 h-80 -right-20 lg:-right-60 top-20 z-10 rounded-custom animate-pulse saturate-200 blur-[160px] bg-orange ' ></div>
                </div>
                {/* {showToast && (
                    <Toast
                        title={`Meow Dare ?   `}
                        paragrabh={`You have ${getFilteredGPUInfo(gpuInfo)} Processor, Are you sure ?   `}
                        negative="I'm sure"
                        positive="I'll try"
                        img={Images.SpecCat}
                        negOnClick={() => setShowToast(false)} // Close Toast on click
                        posOnClick={() => setShowToast(false)} // Close Toast on click
                        time="Just now" // You can update this to a dynamic timestamp
                    />
                )} */}
            </div>
        </>
    )
}

export default LandingPage