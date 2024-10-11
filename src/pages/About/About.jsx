import { FaLinkedin, FaGithub, FaGraduationCap, FaSchool } from "react-icons/fa";
import { FaComputer, FaXTwitter } from "react-icons/fa6";

export default function About() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="about-container mx-auto flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 w-full p-4">
                        {/* <!-- Left side - About section --> */}
                        <div className="pt-3 text-center items-center">
                            <div>
                                <h1 className="text-7xl font-bold">about</h1>
                            </div>
                            <div className="mt-4">
                                <ul className="flex justify-center space-x-4 text-2xl">
                                    <li>
                                        <a href="https://www.linkedin.com/in/sabit-hasan/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Sabit-Hasan" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Hayshin_Sabit" target="_blank">
                                            <FaXTwitter />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Right side - About info --> */}
                        <div className="p-5 text-justify">
                            <p className="text-base">
                                Myself Md.Sabit Hasan. I'm a MERN Stack Developer. I love to code, it's like a hobby for me. I would like you to call me a learner rather than a developer because I believe “Learning new things is a sign of my existence”. And don't forget that I'm a developer who can develop your dreams step by step.
                            </p>
                        </div>
                    </div>
                </div>

                {/* education info */}
                <div className="mt-12 bg-gray-100 p-6 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 w-full p-4">
                        {/* Left side - Educational details */}
                        <div className="edu-left space-y-4 order-2 md:order-1">
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg md:text-xl font-bold">BSc:</h4>
                                <span className="text-base md:text-lg">United International University</span>
                            </div>
                            {/* Single info row */}
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg md:text-xl font-bold">Department:</h4>
                                <span className="text-base md:text-lg">Computer Science & Engineering</span>
                            </div>
                            {/* Single info row */}
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg md:text-xl font-bold">Session:</h4>
                                <span className="text-base md:text-lg">2019 - 2024</span>
                            </div>
                        </div>

                        {/* Right side - Educational Info title and icons */}
                        <div className="edu-right pt-6 md:pt-3 text-center order-1 md:order-2 mb-5">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                Educational Info
                            </h1>
                            <div className="mt-4">
                                <ul className="flex justify-center space-x-4 text-2xl">
                                    <li>
                                        <FaGraduationCap className="text-xl md:text-2xl" />
                                    </li>
                                    <li>
                                        <FaComputer className="text-xl md:text-2xl" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}