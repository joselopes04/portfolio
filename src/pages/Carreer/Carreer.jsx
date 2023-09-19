import React, { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Carreer = () => {
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.keyCode === 37) { // Left arrow key
            navigate("/main");
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            //Remove the key listener
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <main className='flex flex-col min-h-screen bg-slate-950'>
                <Link className='absolute z-10 flex items-center h-screen left-5 group' to={"/main"}>
                    <button className="z-10 flex items-center p-3 transition-transform select-none rounded-2xl text-slate-950 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500">
                        <BsArrowLeft className='mr-1' />Back
                    </button>
                </Link>

                <h1 className='mt-8 mb-4 text-4xl tracking-wide text-center text-white'>Working Experiences👨🏻‍💻</h1>
                <div className='flex items-center justify-center max-w-3xl mx-auto mb-10'>
                    <ol className="relative mx-4 border-l border-gray-700 sm:mx-0">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">August 2023 - Present</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='flex col-span-1'>
                                    <img className='cursor-pointer w-14 hover:brightness-75' src={process.env.PUBLIC_URL + '/images/companies/dionamite.svg'} alt="" onClick={() => window.open('https://www.dionamite.com/', '_blank')} />
                                </div>
                                <div className='flex flex-col justify-center col-span-11'>
                                    <h3 className="text-lg font-semibold text-white">Dionamite - Full-stack Developer - Fulltime</h3>
                                    <p className="text-base font-normal text-gray-400">Restyling of the same using Tailwind CSS.</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">May 2023 - August 2023</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='flex col-span-1'>
                                    <img className='cursor-pointer w-14 hover:brightness-75' src={process.env.PUBLIC_URL + '/images/companies/dionamite.svg'} alt="" onClick={() => window.open('https://www.dionamite.com/', '_blank')} />
                                </div>
                                <div className='flex flex-col justify-center col-span-11'>
                                    <h3 className="text-lg font-semibold text-white">Dionamite - Full-stack Developer - Internship</h3>
                                    <p className="mb-4 text-base font-normal text-gray-400">Implementation of various functionalities for a multi-center training management website.<br />
                                        Detection and correction of bugs on the website.</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border  border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">March 2022 - June 2022</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='flex items-center col-span-1'>
                                    <img className='object-contain cursor-pointer w-14 hover:brightness-75' src={process.env.PUBLIC_URL + '/images/companies/a2it.png'} alt="" onClick={() => window.open('https://a2it.com/', '_blank')} />
                                </div>
                                <div className='flex flex-col justify-center col-span-11'>
                                    <h3 className="text-lg font-semibold text-white">A2IT - Full-stack Developer - Internship</h3>
                                    <p className="text-base font-normal text-gray-400">
                                        Migration of a website to the Microsoft ASP.NET Core MVC architecture.<br />
                                        Creation of a REST API using the Swagger interface and the C# language.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-white">July 2021 - August 2021</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='flex col-span-1'>
                                    <img className='object-contain cursor-pointer w-14 hover:brightness-75' src={process.env.PUBLIC_URL + '/images/companies/epochMultimedia.png'} alt="" onClick={() => window.open('https://www.epochmultimedia.com/', '_blank')} />
                                </div>
                                <div className='flex flex-col justify-center col-span-11'>
                                    <h3 className="text-lg font-semibold text-white">Epoch Multimedia - Help Desk - Internship</h3>
                                    <p className="text-base font-normal text-gray-400">
                                        Techinical support, assistance, cleaning and maintenance to the computers on the SNPVAC.<br />
                                        Creation of a wordpress website.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <h1 className='mt-8 mb-4 text-4xl tracking-wide text-center text-white'>Education🎓</h1>
                <div className='flex items-center justify-center max-w-3xl mx-auto mb-10'>
                    <ol className="relative mx-4 border-l border-gray-700 sm:mx-0">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">October 2022 - August 2023</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='flex items-center col-span-1'>
                                    <img className='object-contain w-16 cursor-pointer hover:brightness-75' src={process.env.PUBLIC_URL + '/images/education/citeforma.png'} alt="" onClick={() => window.open('https://www.citeforma.pt/', '_blank')} />
                                </div>
                                <div className='flex flex-col justify-center col-span-11'>
                                    <h3 className="text-lg font-semibold text-white">Citeforma - Specialist Technician in Information Systems Technologies and Programming - CET</h3>
                                    <p className="text-base font-normal text-gray-400">
                                        Implement information systems based on web technologies, utilizing both traditional computing systems and mobile devices.<br />
                                        Develop computer applications for information systems management.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">September 2019 - July 2022</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='flex items-center col-span-1'>
                                    <img className='object-contain cursor-pointer w-14 hover:brightness-75' src={process.env.PUBLIC_URL + '/images/education/casapia.png'} alt="" onClick={() => window.open('https://casapia.pt/', '_blank')} />
                                </div>
                                <div className='flex flex-col justify-center col-span-11'>
                                    <h3 className="text-lg font-semibold text-white">Casa Pia de Lisboa - Computer Systems Technician - 12th grade</h3>
                                    <p className="mb-4 text-base font-normal text-gray-400">
                                        Creating software, guaranteeing its optimal performance.<br />
                                        Performing installation, configuration, and maintenance of computers, peripherals, and local networks.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </main>
        </>
    );
};

export default Carreer;