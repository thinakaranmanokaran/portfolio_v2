import React from 'react'
import { FollowCursor } from './../animations/index'
import BGNoise from './../assets/images/home/2Bap.gif'
import { Helmet } from 'react-helmet-async';
import { About, CommandPanel, Experience, LandingPage, Projects, Play, Footer } from "./../components/home/index";
import StructuredData from '../components/seo/StructuredData';


const Home = () => {
    const siteLink = import.meta.env.VITE_SITE_LINK;
    return (
        <div className=' cursor-[url(./assets/images/cursor/lightcursor.png)] ' >
<Helmet>
  <title>Thinakaran Manokaran | Developer & Designer</title>
  <meta name="description" content="Portfolio of Thinakaran Manokaran, a skilled web developer and designer in Thanjavur specializing in MERN stack and modern web solutions." />
  <meta name="keywords" content="Web Developer, Thanjavur, MERN Stack, React Developer, Portfolio" />
  <meta name="author" content="Thinakaran Manokaran" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Thinakaran Manokaran | Developer & Designer" />
  <meta property="og:description" content="Explore the portfolio of Thinakaran Manokaran, a professional MERN stack developer based in Thanjavur." />
  <meta property="og:image" content={`${siteLink}preview.png`} />
  <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  <meta property="og:url" content={siteLink} />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Thinakaran Manokaran | Developer & Designer" />
  <meta property="twitter:url" content={siteLink} />
  <meta name="twitter:description" content="Explore the portfolio of Thinakaran Manokaran, a professional MERN stack developer based in Thanjavur." />
  <meta name="twitter:image" content={`${siteLink}preview.png`} />

  <link rel="canonical" href={siteLink} />

</Helmet>

            <StructuredData />
            <div className='bg-dark h-full w-screen overflow-x-hidden relative z-20   ' style={{ backgroundImage: `url(${BGNoise})` }} >
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
