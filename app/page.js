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
      <div className="flex justify-center align-middle w-full h-screen">
          <noscript>
              You need to enable JavaScript to run this app.
          </noscript>
          <div className="parent h-screen">
              <Heading
                  title="Frontend Developer"
                  job="Freelancer"
                  name="Dustin Daebritz"
                  className="div1"
              />
              <div className="div2">
                  <div className="flex justify-center items-center text-center h-full w-full font-bold text-5xl">
                      Projects
                  </div>
              </div>
              <div className="div3">
                  <Secrete
                    message="Productivity App comming soon"
                  />
              </div>
              <div className="div4">
                  <Secrete
                    message="Dribble AI App Design comming soon"
                  />
              </div>
              <div className="div5 flex align-middle w-auto">
                  <Banner/>
              </div>
              <div className="div6">
                  <LocationScene/>
              </div>
              <div className="div7">
                    <Secrete
                        message="Game comming soon"
                    />
              </div>
              <div className="div8">
                  <MediaButton
                    url="https://github.com/Dustin614"
                    title="Github"
                    icon={<FaGithub className="w-full h-20"/>}
                  />
              </div>
              <div className="div9">
                  <MediaButton
                    url="https://www.linkedin.com/"
                    title="LinkedIn"
                    icon={<FaLinkedin className="w-full h-20"/>}
                  />
              </div>
              <div className="div10">
                  <MediaButton
                      url="mailto:dustindabritz@gmail.com"
                      title="E-Mail"
                      icon={<MdEmail className="w-full h-20"/>}
                  />
              </div>
              <div className="div11">
                  <Secrete
                      message="more…"
                  />
              </div>
          </div>
      </div>
  );
}

export default Home;