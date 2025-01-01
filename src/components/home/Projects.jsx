import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import ProjectData from './../../database/projects/ProjectData'
import UseSmoothScroll from '../../hooks/UseSmoothScroll'

import { ShinyText, SpotlightCard, SplitText, BlurText  } from './../../animations/index'

import { GoLink } from "react-icons/go";

const Projects = () => {

    UseSmoothScroll();

    const to = (i) => ({
        x: 0,
        y: i * -4,
        scale: 1,
        rot: -10 + Math.random() * 20,
        delay: i * 100,
    });
    const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
    const trans = (r, s) => `rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

    function ProjectCard() {
        const [gone] = useState(() => new Set());
        const [props, api] = useSprings(ProjectData.length, (i) => ({
            ...to(i),
            from: from(i),
        }));

        const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
            const trigger = velocity > 0.2;
            const dir = xDir < 0 ? -1 : 1;
            if (!down && trigger) gone.add(index);

            api.start((i) => {
                if (index !== i) return;
                const isGone = gone.has(index);
                const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
                const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
                const scale = down ? 1.1 : 1;
                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
                };
            });

            if (!down && gone.size === ProjectData.length)
                setTimeout(() => {
                    gone.clear();
                    api.start((i) => to(i));
                }, 600);
        });

        return (
            <div className='stack-container'>
                {props.map(({ x, y, rot, scale }, i) => (
                    <animated.div key={i} className='stack' style={{ x, y }}>
                        <animated.div className="shadow-lg "
                            {...bind(i)}
                            style={{
                                transform: interpolate([rot, scale], trans),
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                backgroundColor: "#fff",
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                // width: '500px',
                                // height: '',
                                padding: '10px',
                                borderRadius: '25px',
                                color: '#000',
                                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)"
                            }}
                        >
                            <img className="rounded-xl min-h-44 object-cover w-full pointer-events-none select-none " src={ProjectData[i].img} alt="" srcset="" />
                            <h3 className='font-upper text-xl py-1 pt-2 text-center ' >{ProjectData[i].title}</h3>
                            <p  className='font-paragrabh text-text text-sm text-center'  >{ProjectData[i].paragrabh}</p>
                        </animated.div>
                    </animated.div>
                ))}
            </div>
        );
    }
    return (
        <div className='w-screen p-6  ' >
            <div className='w-[70vh] absolute -left-40 z-0 h-[70vh] animate-pulse bg-[#9336B4] rounded-full blur-[100px] ' ></div>
            <div className='relative z-20' >
                <SplitText className='font-style text-white text-[100px] p-4 text-center  w-full ' text="Projects" />
                <div className='flex justify-center items-center w-full h-full min-h-[80vh] -translate-x-20  translate-y-8  ' >
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}

export default Projects