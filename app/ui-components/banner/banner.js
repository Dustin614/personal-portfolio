import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaCss3, FaJs, FaHtml5, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Banner = () => {
    return (
        <div className="w-auto overflow-hidden flex align-middle h-auto">
            {/* Flex container for the icons, doubled for looping effect */}
            <div className="flex h-full items-center group">
                {/* Icon list */}
                {/* If you want the user to pause the animation in the future use group-hover:paused-loop*/}
                <div className="flex space-x-10 motion-safe:animate-loop-scroll motion-reduce:transform-none px-5">
                    <FaReact className="text-6xl text-white" />
                    <FaAngular className="text-6xl text-white" />
                    <FaNodeJs className="text-6xl text-white" />
                    <FaCss3 className="text-6xl text-white" />
                    <FaJs className="text-6xl text-white" />
                    <FaHtml5 className="text-6xl text-white" />
                    <FaGithub className="text-6xl text-white" />
                    <FaDocker className="text-6xl text-white" />
                    <SiMongodb className="text-6xl text-white" />
                </div>
                {/* Duplicate list for continuous scrolling */}
                {/* If you want the user to pause the animation in the future use group-hover:paused-loop*/}
                <div aria-hidden="true" className="flex space-x-10 motion-safe:animate-loop-scroll motion-reduce:transform-none px-5">
                    <FaReact className="text-6xl text-white" />
                    <FaAngular className="text-6xl text-white" />
                    <FaNodeJs className="text-6xl text-white" />
                    <FaCss3 className="text-6xl text-white" />
                    <FaJs className="text-6xl text-white" />
                    <FaHtml5 className="text-6xl text-white" />
                    <FaGithub className="text-6xl text-white" />
                    <FaDocker className="text-6xl text-white" />
                    <SiMongodb className="text-6xl text-white" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
