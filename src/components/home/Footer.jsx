import React, { useState } from 'react'
import { Hyperspeed } from './../../animations/index'
import { BsArrowUpRight } from "react-icons/bs";
import { ShinyText, SpotlightCard, FollowCursor , BlurText , Fade  } from './../../animations/index'
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
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
        {
            app: "Resume",
            link: "https://drive.google.com/file/d/1l652PN4WmM2oY2msHafQIvicpdT_-BCh/view?usp=sharing",
        },
        {
            app: "Phone",
            link: "tel:+919655982558",
        },
    ]

    const [result, setResult] = React.useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleChange = (event) => {
        setInputValue(event.target.value);
      };

      const hasEmail = email.trim().length > 0;
      const hasMessage = message.trim().length > 0;

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ea367e57-b41a-4d52-b810-c10728cecdb7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        // console.log("sent");
        alert("Form Submitted Successfully");
    } else {
        console.log("Error", data);
        setResult(data.message);
        alert("Form not Submitted");
      }
    };

    const [ openMenu, setOpenMenu ] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <div className='fixed bottom-0 bg-black z-10 h-full w-full ' >
            {/* <FollowCursor /> */}

            <Hyperspeed
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
            />
            
            <div className='flex justify-end p-4  pb-8  h-full items-end ' >
                <Fade blur={true} className="absolute z-20   p-6 pb-8 rounded-2xl shadow-md backdrop-blur-md " >
                    <form action="" onSubmit={onSubmit} className="flex flex-col text-white space-y-2 w-72 " >
                        <h1 className='font-sfb text-center text-2xl ' >Get in Touch</h1>
                        <label htmlFor="" className='relative  group ' >
                            <input value={email} onChange={handleEmailChange} type="email" name="email" required className={`border-[1px] focus:outline-none shadow-md outline-none  peer  p-3 font-sm  border-[#ffffff20] bg-white bg-opacity-5 font-main w-full pt-6 transition-all duration-300 focus:h-12 ${hasEmail ? "h-12" : "h-8"}  backdrop-blur-lg rounded-xl `} id="" />
                            <div className={` absolute  peer-focus:text-xs peer-focus:left-1.5 peer-focus:top-1.5  ${hasEmail   ? "text-xs left-1.5 top-1.5 opacity-80" : " top-[10px] left-2 text-sm" }  font-main transition-all duration-300 peer-focus:opacity-80 `}  >Email</div>
                        </label>
                        <label htmlFor="" className='relative  group ' >
                            <textarea value={message} onChange={handleMessageChange} name="message" required id="" cols="30" rows="4" className='border-[1px] peer  shadow-md focus:outline-none  p-3 font-sm  outline-none transition-all duration-300 font-main pt-5 border-[#ffffff20] bg-white bg-opacity-5 w-full  backdrop-blur-lg rounded-xl  '  ></textarea>
                            <div className={` absolute  peer-focus:text-xs peer-focus:left-1.5 peer-focus:top-1.5  ${hasMessage  ? "text-xs left-1.5 top-1.5 opacity-80" : " top-[10px] left-2 text-sm" }  font-main transition-all duration-300 peer-focus:opacity-80 `} >Message</div>
                        </label>
                        <div className='flex flex-col items-end w-full' >
                                <button type="submit" className='bg-white  text-black text-base  rounded-full w-24 font-roundman font-bold p-5 py-1 h-8' > Submit</button>
                            {/* <div className='flex flex-col items-end -translate-y-1 relative overflow-hidden w-fit   rounded-full ' >
                                <div className='  text-black text-base peer rounded-full peer z-30 absolute w-24 font-roundman font-bold pl-6 p-5 py-1 cursor-pointer ' >Submit</div>
                                <div className=' bg-purple w-40 h-20 absolute right-20 z-20 peer-hover:-right-40 hover:-right-40 transition-all duration-500 -rotate-45 -top-10 ' ></div>
                            </div> */}
                        </div>
                        {/* <span>{result}</span> */}
                    </form>
                </Fade>
            </div>
            <div>
                <div className='   h-fit  absolute bottom-0 justify-start -translate-y-6 lg:-translate-y-12  space-y-4 lg:space-y-0 space-x-0 lg:p-4 p-0 lg:pb-8 ' >
                        <span onClick={toggleMenu} className=" absolute -top-1 md:hidden left-2 text-white text-xl transition-all duration-300 " > { openMenu ? <TfiClose size={18} /> : <TbMenu /> } </span>
                    <div className={`flex justify-end flex-col transition-transform duration-500 h-full  items-start space-y-2 bg-white bg-opacity-5 md:bg-transparent md:backdrop-blur-none  backdrop-blur-lg p-4 rounded-tr-2xl rounded-br-2xl  md:translate-x-0 ${openMenu ? " translate-x-0" : "-translate-x-60  " }`} >
                       {
                           SocialMedia.map((Media, index) => (
                                <motion.a href={Media.link} target="_blank"  key={index} initial={{ x: "-100%" }}  whileInView={{ x: "0%" }} transition={{ duration:  0 , ease: "easeInOut", }}  className={`text-white cursor-pointer group flex items-center hover:underline  w-full transition-all ${ index === 6 ? "lg:hidden" : index === 7 ? "lg:hidden" : ""  } duration-300 font-main text-base md:text-2xl `} rel="noopener noreferrer">
                                    <ShinyText text={`${Media.app}`} disabled={false} speed={4} className='transition-all duration-300 ' /> <BsArrowUpRight className='  md:size-5 group-hover:translate-x-3 transition-all duration-300 ' />
                                </motion.a>
                            ))  
                       }
                    </div>
                    <div className="hidden lg:block" >
                        <motion.div initial={{ y: 100 }} animate={{ y:0 }} transition={{ duration: 1, ease: "easeInOut", }} className= ' text-white flex  space-x-2 font-iosthin text-lg   absolute pb-8 w-[40vw]  '>
                            <a className=" bg-white bg-opacity-5 backdrop-blur-lg px-6 py-1.5 rounded-full cursor-pointer  w-fit " href="https://drive.google.com/file/d/1l652PN4WmM2oY2msHafQIvicpdT_-BCh/view?usp=sharing" rel="noopener noreferrer" target="_blank" >Resume</a>
                            <div className=" bg-white bg-opacity-5 backdrop-blur-lg px-6 py-1.5 rounded-full w-fit  " href="tel:+919655982558" >+91 6383 417749</div>
                            <div className=" bg-white bg-opacity-5 backdrop-blur-lg px-6 py-1.5 rounded-full w-fit  " >Tamilnadu, India</div>
                        </motion.div>
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