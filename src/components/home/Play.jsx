import React, { useState, useRef, useEffect } from 'react'
import Images from "./../../assets/images";

import { RiGithubLine } from "react-icons/ri";
import { LuArrowUpRight } from "react-icons/lu";
import { IoFolder } from "react-icons/io5";

import { SpotlightCard, Count } from "./../../animations/index"

import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { motion } from 'framer-motion';

const Play = () => {

    const ArrowTag = ({ link, className }) => {
        return (
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer" className='text-xl w-fit h-fit text-light  '>
                    <LuArrowUpRight className={`bg-dark rounded-full bg-opacity-20 hover:bg-opacity-40 transition-all  duration-300 scale-100 hover:scale-110 ${className} `} />
                </a>
            </div>
        )
    }

    const ProgressBar = ({ count }) => {
        return (
            <div className="flex gap-1 flex-wrap">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={`h-4 w-4  rounded-sm ${index < 3 ? "bg-orange " : "bg-light"}`} ></div>
                ))}
            </div>
        );
    };

    const StreakBar = ({ count, className }) => {
        return (
            <div className="flex gap-1 flex-wrap">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={`h-5 w-5 shadow-sm rounded-md bg-light ${className}`} ></div>
                ))}
            </div>
        )
    }

    const Dots = ({ count, className }) => {
        return (
            <div className="flex gap-[2px]  ">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={`h-[2px] w-[2px]  rounded-full bg-dark opacity-60 ${className}`} ></div>
                ))}
            </div>
        )
    }

    const GitHubCard = () => {
        return (
            <div className=' p-4 rounded-3xl bg-pink w-fit shadow-bento flex flex-col justify-between'  >
                <div className='flex justify-between' >
                    <span className='border-2 shadow-[2px_3px_0px_#000000] border-black rounded-full p-1' ><RiGithubLine className='size-5' /></span>
                    <ArrowTag className={`translate-x-2 -translate-y-1.5 `} />
                </div>
                <div>
                    <h1 className='font-sfb text-2xl'>GitHub</h1>
                    <h1 className='font-supertalls mr-4 ' >@thinakaran</h1>
                </div>
            </div>
        )
    }

    const ProfileCard = () => {
        return (
            <div className='p-8 rounded-3xl bg-light w-fit shadow-bento '  >
                <div className='flex items-center justify-center h-full' >
                    <div>
                        <img src={Images.Profile} alt="" srcset="" className='w-20 rounded-3xl' />
                    </div>
                    <div className='ml-4' >
                        <h1 className='font-sfb text-4xl py-1 ' >Dheena</h1>
                        <h1 className='font-paragrabh text-[#686D7690] -translate-y-1' >Thinakaran Manokaran</h1>
                    </div>
                </div>
            </div>
        )
    }


    const CompassCard = () => {
        const [angle, setAngle] = useState(0);
        const divRef = useRef(null);

        const calculateAngle = (event) => {
            if (!divRef.current) return;

            // Get the center of the div
            const rect = divRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate the angle in radians
            const deltaX = event.clientX - centerX;
            const deltaY = centerY - event.clientY; // Invert Y-axis for proper angle calculation
            const radians = Math.atan2(deltaY, deltaX);

            // Convert radians to degrees and ensure range [0, 360]
            let degrees = radians * (180 / Math.PI);
            if (degrees < 0) degrees += 360;

            // Reverse the angle direction
            degrees = 360 - degrees;

            // Update the angle state
            setAngle(Math.round(degrees));
        };


        useEffect(() => {
            const handleMouseMove = (event) => calculateAngle(event);

            // Add event listener for mouse movement
            window.addEventListener("mousemove", handleMouseMove);

            // Clean up event listener
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }, []);

        return (
            <div className='w-32 bg-cover h-40 bg-center shadow-bento rounded-3xl flex justify-center items-center' style={{ backgroundImage: `url(${Images.ClockBG})` }} >
                <div ref={divRef} className='text-white font-lighttext text-2xl absolute ' style={{ transform: `scale(1.1)`, opacity: angle % 2 === 0 ? 0.5 : 1, }} >
                    <Count
                        from={0} to={angle} separator="," direction="up" duration={0.5} className="count-up-text"
                    />°
                </div>
                <div className='rotate-90' >
                    <div className='w-[119px] h-[119px]  rounded-full flex justify-center  ' style={{ transform: `rotate(${angle}deg)`, transition: "transform 0.1s ease", }} >
                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] -translate-y-1.5 border-r-transparent border-b-[10px] border-b-red-500"></div>
                    </div>
                </div>
            </div>
        )
    }

    const TopCards = () => {



        return (
            <div className='flex justify-center gap-4 ' >
                <ProfileCard />
                <CompassCard />
                <GitHubCard />
            </div>
        )
    }

    const ProgressCard = () => {
        return (
            <div className='relative '  >
                <div className='bg-dark flex flex-col p-4 rounded-3xl h-full ' >
                    <img src={Images.DarkBGPattern} alt="" srcset="" className='absolute h-full top-0 z-10 rounded-tr-3xl rounded-br-3xl right-0' />
                    <div className='relative z-20 h-full flex flex-col space-y-5 justify-between ' >
                        <div className='h-fit w-fit p-2 '>
                            <h1 className=' font-bentocom text-orange text-4xl ' >SPARX</h1>
                        </div>
                        <div>
                            <div className='font-lighttext text-light  text-sm mb-2 opacity-60 ' >Project Progress</div>
                            <div className='flex items-center  ' >
                                <ProgressBar count={10} />
                                <span className='font-subtitle text-light ml-2 opacity-65 text-base ' >30%</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    const OldPortfolio = () => {
        return (
            <div className=' p-2  rounded-3xl flex flex-col text-light justify-between relative bg-purple w-full md:w-fit '  >
                <div className='bg-light p-2 py-4 rounded-tl-2xl rounded-tr-2xl  shadow-inner group-hover:p-6 ' >
                    <div className='text-6xl font-style  text-center text-dark font-black group-hover:text-5xl ' >T</div>
                </div>
                <div className='p-4 ' >
                    <h1 className='text-base font-sfb' >Dheena's <span className='font-subtitle text-gray-100 opacity-65 ' > Old Portfolio</span></h1>
                </div>
                <ArrowTag link={`https://thinakaranmanokaran.github.io/Portfolio/Main.html`} className={`absolute top-3 right-3 `} />
            </div>
        )
    }

    const GitStreak = ({ count }) => {
        return (
            <div className='bg-yellow h-100% p-4 rounded-3xl relative flex flex-col items-center w-full md:w-fit ' >
                <ArrowTag className={`absolute top-2 right-2`} />
                <img src={Images.BehanceLogo} alt="" srcset="" className='w-16' />
                <div className='flex h-10  justify-center w-24 ' >
                    <img src={Images.BehanceText} alt="" srcset="" className='mix-blend-multiply w-fit ' />
                </div>
                <div className='flex flex-col items-start w-full ' >
                    <div className='font-paragrabh ' >Streak</div>
                    <div>
                        <StreakBar count={count} className={`first:bg-pink last:bg-pink odd:bg-pink  `} />
                    </div>
                </div>
            </div>
        )
    }

    const ImageSlider = () => {
        return (
            <div>
                <div className='bg-white rounded-3xl h-full w-full p-4' >
                    <div className='mb-3 flex items-center space-x-1' >
                        <img src={Images.IOSGallery} alt="" srcset="" className='w-8' />
                        <div className='font-subtitle ' >Photos</div>
                    </div>
                    <div>
                        <div className='relative ' >
                            <img src={Images.Profile} alt="" className='w-72 rounded-xl' srcset="" />
                            <div className='bg-dark w-fit h-fit p-1.5 absolute bottom-0.5 space-x-1 left-1/2 -translate-x-1/2 bg-opacity-40 justify-center rounded-xl flex  ' >
                                <div className='w-2 h-2 bg-light rounded-full  ' ></div>
                                <div className='w-2 h-2 bg-light rounded-full  ' ></div>
                                <div className='w-2 h-2 bg-light rounded-full  ' ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

    const DoughnutChart = () => {
        const chartRef = useRef(null);

        useEffect(() => {
            const updateChart = () => {
                const now = new Date();
                const seconds = now.getSeconds();
                const minutes = now.getMinutes();
                const hours = now.getHours() % 12;

                const chart = chartRef.current;

                if (chart) {
                    chart.data.datasets[0].data = [seconds * 6, 360 - seconds * 6]; // Seconds
                    chart.data.datasets[1].data = [minutes * 6, 360 - minutes * 6]; // Minutes
                    chart.data.datasets[2].data = [hours * 30, 360 - hours * 30];   // Hours

                    chart.update(); // Trigger the animation
                }
            };

            // Update the chart every second
            const intervalId = setInterval(updateChart, 1000);

            // Clean up on component unmount
            return () => clearInterval(intervalId);
        }, []);

        const data = {
            datasets: [
                {
                    data: [0, 360], // Initial seconds data
                    backgroundColor: ['#f51d5a', '#f51d5a70'],
                    borderWidth: 0,
                    cutout: '30%',
                    label: "Seconds",
                },
                {
                    data: [0, 360], // Initial minutes data
                    backgroundColor: ['#acfc32', '#acfc3270'],
                    borderWidth: 0,
                    cutout: '25%',
                },
                {
                    data: [0, 360], // Initial hours data
                    backgroundColor: ['#2bfcfc', '#2bfcfc70'],
                    borderWidth: 0,
                    cutout: '20%',
                },
            ],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: true, // Ensures chart respects parent dimensions
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            rotation: Math.PI * -0.5, // Start at the top
            animation: {
                duration: 500, // Animation duration in milliseconds
                easing: 'easeOutQuad', // Smooth easing for the transition
            },
            elements: {
                arc: {
                    borderWidth: 0,
                    borderRadius: (context) => {
                        // Apply borderRadius only to the first segment of each dataset
                        const index = context.index;
                        return index === 0 ? 20 : 0; // Set border radius for the first segment
                    },
                },
            },
        };

        return (
            <div className="w-28 h-28">
                <Doughnut data={data} options={options} ref={chartRef} />
            </div>
        );
    };


    const TimeCard = () => {

        const DateDisplay = () => {
            const [currentDateTime, setCurrentDateTime] = useState({
                date: '',
                time: '',
            });

            useEffect(() => {
                const updateDateTime = () => {
                    const now = new Date();
                    const year = new Date().getFullYear().toString().slice(-2);
                    const month = now.toLocaleString('default', { month: 'short' }); // Short month name
                    const day = now.getDate();
                    const hours = now.getHours();
                    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure two digits
                    const seconds = now.getSeconds().toString().padStart(2, '0'); // Ensure two digits

                    setCurrentDateTime({
                        date: `${day} ${month} ${year}`,
                        time: `${hours}:${minutes}:${seconds}`,
                    });
                };

                // Update the time immediately and then set an interval
                updateDateTime();
                const intervalId = setInterval(updateDateTime, 1000); // Update every second

                // Clean up the interval on component unmount
                return () => clearInterval(intervalId);
            }, []);

            return (
                <div>
                    <p className='font-subtitle text-light mb-3' >{currentDateTime.date}</p>
                    {/* <p>Time: {currentDateTime.time}</p> */}
                </div>
            );
        };

        const TimeDisplay = () => {
            const [currentDateTime, setCurrentDateTime] = useState({
                time: '',
                greeting: '',
            });

            useEffect(() => {
                const updateDateTime = () => {
                    const now = new Date();
                    const hours = now.getHours();
                    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure two digits

                    // Determine greeting based on hours
                    let greeting = '';
                    if (hours >= 5 && hours < 12) {
                        greeting = 'Morning';
                    } else if (hours >= 12 && hours < 17) {
                        greeting = 'Afternoon';
                    } else if (hours >= 17 && hours < 21) {
                        greeting = 'Evening';
                    } else {
                        greeting = 'Night';
                    }

                    setCurrentDateTime({
                        time: `${hours}:${minutes}`,
                        greeting: greeting,
                    });
                };

                // Update the time and greeting immediately and then set an interval
                updateDateTime();
                const intervalId = setInterval(updateDateTime, 1000); // Update every second

                // Clean up the interval on component unmount
                return () => clearInterval(intervalId);
            }, []);

            return (
                <div className="flex flex-col justify-between h-full">
                    <div className="font-iosthin mb-8">
                        <p className="text-base text-grey">Good</p>
                        <div className="font-subtitle -mt-2">{currentDateTime.greeting}</div>
                    </div>
                    <p className="font-subtitle text-light">{currentDateTime.time}</p>
                </div>
            );
        };


        return (
            <div>
                <div className="bg-dark h-full w-full p-4 rounded-3xl shadow-lg flex space-x-4 lg:space-x-10 items-center justify-between">
                    <div>
                        <DateDisplay />
                        <DoughnutChart />
                    </div>
                    <div className='' >
                        <div className='text-3xl font-subtitle text-light ' ><TimeDisplay /></div>
                    </div>
                </div>
            </div>
        );
    };

    const SecondCards = () => {

        return (
            <div className='flex justify-center  gap-4'>
                <div className='space-y-4 h-full ' >
                    <GitStreak count={7} />
                    <OldPortfolio />
                </div>
                <ImageSlider />
                <div className='space-y-4 h-full ' >
                    <ProgressCard />
                    <TimeCard />
                </div>
            </div>
        )
    }

    const NoteCard = () => {
        return (
            <div className=' w-full lg:w-fit' >
                <div className='bg-light w-full h-full lg:max-w-[40vw] rounded-3xl shadow-bento ' >
                    <div className='bg-[#fccb05] w-full p-3 rounded-tl-3xl rounded-tr-3xl h-fit border-b-[1px] border-black ' >
                        <div className='font-subtitle text-lg text-light flex items-center gap-x-1' > <IoFolder /> Notes</div>
                        <div className="w-full  ">
                            {/* <Dots count={130} className="translate-y-5" /> */}
                        </div>
                    </div>
                    <div className='p-6 text-[#1d1d1f]  font-iosthin ' >When you have eliminated the impossible, whatever remains, however improbable, must be the truth.  </div>
                </div>
            </div>
        )
    }

    const SocialMedia = () => {
        return (
            <div>
                <div className='bg-light p-6 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-bento scale-100 hover:scale-105 transition-all duration-500' >
                    <div className='grid grid-cols-4 md:grid-cols-2 gap-2 ' >
                        <img src={Images.IOSInsta} alt="" srcset="" className='w-14 shadow-inner' />
                        <img src={Images.IOSWhatsApp} alt="" srcset="" className='w-14 shadow-inner' />
                        <img src={Images.IOSTwitter} alt="" srcset="" className='w-14 shadow-inner' />
                        <img src={Images.IOSPrint} alt="" srcset="" className='w-[53px] mt-0.5 shadow-inner' />
                    </div>
                </div>
            </div>
        )
    }

    const ThirdCards = () => {



        return (
            <div className='flex justify-center  gap-4'>
                {/* <ImageSlider /> */}
                {/* <TimeCard /> */}
                <NoteCard />
                <SocialMedia />
            </div>
        )
    }

    return (
        <div className='flex justify-center ' >
            <motion.div  initial={{ width: "200px", height: "100px" , overflow: "hidden",    }} whileInView={{ width: "auto", height: "auto",  }} transition={{ duration: 1, ease: "easeInOut" }} className='w-fit rounded-3xl border-2 hidden border-[#ffffff20] h-fit bg-grey bg-opacity-5 backdrop-blur-md  p-10 px-10 space-y-4' >
                <TopCards />
                <SecondCards />
                <ThirdCards />
            </motion.div >
            <div className='w-fit rounded-3xl  border-2 md:hidden border-[#ffffff20] h-fit m-2 bg-grey bg-opacity-5 backdrop-blur-md  p-2 flex flex-col items-center space-y-4' >
                <ProfileCard />
                <div className="flex space-x-2" >
                    <CompassCard />
                    <GitHubCard />
                </div>
                <GitStreak count={10} />
                <OldPortfolio />
                <ImageSlider />
                <ProgressCard />
                <TimeCard />
                <NoteCard />
                <SocialMedia />
            </div>
        </div>
    )
}

export default Play