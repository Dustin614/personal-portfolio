"use client"

import Image from "next/image";
import Heading from "@/app/ui-components/heading/heading";
import Banner from "@/app/ui-components/banner/banner";
import Secrete from "@/app/ui-components/secrete/secrete"
import MediaButton from "@/app/ui-components/media-button/mediaButton";
import {FaGithub, FaLinkedin, FaQuestion} from "react-icons/fa";

import { FaEnvelope } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BiEnvelope } from 'react-icons/bi';
import dynamic from 'next/dynamic';

const LocationScene = dynamic(() => import('@/app/ui-components/location/location'), { ssr: false });

const Home = () => {
    return (
        <div className="overlay">
            <div className="flex justify-center align-middle w-full h-screen">
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
                <div className="parent h-screen">
                    <div className="div1">
                        <div className="child-el">
                            <Heading
                                title="Frontend Developer"
                                job=""
                                name="Dustin Daebritz"
                                className="h-auto p-2"
                            />
                        </div>
                    </div>
                    <div className="div2">
                        <div className="child-el">
                            <div
                                className="flex justify-center items-center text-center h-full w-full font-bold text-5xl p-2">
                                Projects
                            </div>
                        </div>
                    </div>
                    <div className="div3">
                        <div className="child-el p-2">
                            <Secrete message="Productivity App comming soon"/>
                        </div>
                    </div>
                    <div className="div4">
                        <div className="child-el p-2">
                            <Secrete
                                message=""/>
                        </div>
                    </div>
                    <div className="div5 flex align-middle w-auto">
                        <div className="child-el flex align-middle w-auto h-auto py-3">
                            <Banner />
                        </div>
                    </div>
                    <div className="div6">
                        <div className="child-el p-2">
                            <MediaButton
                                url=""
                                title="Germany"
                                icon={<div className="text-8xl">🇩🇪</div>}
                            />
                        </div>
                    </div>
                    <div className="div7">
                        <div className="child-el p-2">
                            <Secrete
                                message="Game comming soon"
                            />
                        </div>
                    </div>
                    <div className="div8">
                        <div className="child-el p-2">
                            <MediaButton
                                url="https://github.com/Dustin614"
                                title="Github"
                                icon={<FaGithub className="w-full h-20"/>}
                            />
                        </div>
                    </div>
                    <div className="div9">
                        <div className="child-el p-2">
                            <MediaButton
                                url="https://www.linkedin.com/"
                                title="LinkedIn"
                                icon={<FaLinkedin className="w-full h-20"/>}
                            />
                        </div>
                    </div>
                    <div className="div10">
                        <div className="child-el p-2">
                            <MediaButton
                                url="mailto:dustindabritz@gmail.com"
                                title="E-Mail"
                                icon={<MdEmail className="w-full h-20"/>}
                            />
                        </div>
                    </div>
                    <div className="div11">
                        <div className="child-el p-2">
                            <Secrete
                                message="more…"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;