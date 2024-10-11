import Typical from 'react-typical';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import ProfilePic from '../../assets/profilePic.jpg';
import DownloadButton from '../../components/DownLoadButton/DownloadButton';
import HireButton from '../../components/HireButton/HireButton';
import { ExpressIcon, MernIcon, NodeIcon, ReactIcon } from '../../utils/MERNIcons/MernIcons';
import { FaLongArrowAltRight, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className='text-white grid grid- grid-cols-1 md:grid-cols-4 gap-4 md:my-20'>
          {/* Left Side - 75% width */}
          <div className="hero-left md:col-span-3 lg:col-span-2 flex justify-start order-2 md:order-1">
            <div>
              <h1 className='text-3xl md:text-4xl'>Hello! I'm<br />
                <Typical
                  steps={[" ", 1000, 'Md.Sabit Hasan', 100]}
                  loop={Infinity}
                />
              </h1>
              <div className='flex items-center gap-3 mt-7'>
                <span className="flex space-x-4">
                  {/* MongoDB Icon */}
                  <MernIcon dataTooltipId="hero-mern-icon" dataTooltipContent="Mongodb" />
                  <Tooltip id="hero-mern-icon" place="top" effect="solid" />

                  {/* Express Icon */}
                  <ExpressIcon dataTooltipId="hero-express-icon" dataTooltipContent="Express JS" />
                  <Tooltip id="hero-express-icon" place="top" effect="solid" />

                  {/* React Icon */}
                  <ReactIcon dataTooltipId="hero-react-icon" dataTooltipContent="React JS" />
                  <Tooltip id="hero-react-icon" place="top" effect="solid" />

                  {/* Node.js Icon */}
                  <NodeIcon dataTooltipId="hero-node-icon" dataTooltipContent="Node JS" />
                  <Tooltip id="hero-node-icon" place="top" effect="solid" />
                </span>
                <span className="text-sm md:text-2xl"> Stack Developer </span>
              </div>

              <p className="text-sm md:text-lg text-justify font-thin mt-3 mb-8">
                Hi, let me introduce myself. I would like you to call me a learner. Because I believe “learning new things is a sign of my existence." And don't forget that I'm a developer too who can develop your dreams based on your preferences.
              </p>

              {/* Hero Buttons */}
              <div className="flex flex-col md:flex-row gap-2">
                <DownloadButton />
                <HireButton />
              </div>
            </div>
          </div>

          {/* Right Side - 25% width */}
          <div className="hero-right md:col-span-1 flex justify-center md:justify-end order-1 md:order-2">
            <img src={ProfilePic} alt="Sabit Image" className="w-32 md:w-48 rounded-full" /> {/* Adjust the width as needed */}
          </div>
        </div>

        {/* follow icons */}
        <div className='text-white flex items-center gap-3'>
          <h3>Follow me </h3>
          <FaLongArrowAltRight />
          <a href="https://github.com/Sabit-Hasan" target='_blank'><FaGithub className='text-2xl cursor-pointer' /></a>
          <a href="https://www.linkedin.com/in/sabit-hasan/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a>
        </div>
      </div>
    </>
  );
}
