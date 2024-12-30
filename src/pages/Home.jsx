import React from 'react'
import { FollowCursor } from './../animations/index'
import BGNoise from './../assets/images/home/2Bap.gif'

import { About, CommandPanel, Experience, LandingPage, Projects, Play, Footer } from "./../components/home/index";

const Home = () => {
    return (
        <div className=' cursor-[url(./assets/images/cursor/lightcursor.png)] ' >
            <div className='bg-dark h-full w-full relative z-20   ' style={{ backgroundImage: `url(${BGNoise})` }} >
                <LandingPage />
                <Projects />
                <Play />
                <About />
                <Experience />
            </div>
            <div className='h-[60vh]' >

            <Footer />
            </div>
            {/* <FollowCursor /> */}
        </div>
    )
}

export default Home