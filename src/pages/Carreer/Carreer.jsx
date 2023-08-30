import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <main className='min-h-screen flex flex-col bg-slate-950'>
                <Link className='absolute h-screen flex items-center left-5 group z-10' to={"/main"}>
                    <button className="flex items-center p-3  rounded-2xl 
                    text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                        <BsArrowLeft className='mr-1' />Back
                    </button>
                </Link>

                <h1 className='text-white text-center text-4xl tracking-wide mt-8 mb-4'>Working Experiences👨🏻‍💻</h1>
                <div className='flex items-center justify-center mb-10 max-w-3xl mx-auto'>
                    <ol className="relative border-l :border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">August 2023 - Present</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='col-span-1 flex'>
                                    <a href='https://www.dionamite.com/' target='_blank'>
                                        <img className='w-14 ' src={process.env.PUBLIC_URL + '/images/companies/dionamite.svg'} alt="" />
                                    </a>
                                </div>
                                <div className='col-span-11 flex flex-col justify-center'>
                                    <h3 className="text-lg font-semibold text-white">Dionamite - Full-stack Developer - Fulltime</h3>
                                    <p className="text-base font-normal text-gray-400">Restyling of the same using Tailwind CSS.</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">May 2023 - August 2023</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='col-span-1 flex'>
                                    <a href='https://www.dionamite.com/' target='_blank'>
                                        <img className='w-14' src={process.env.PUBLIC_URL + '/images/companies/dionamite.svg'} alt="" />
                                    </a>
                                </div>
                                <div className='col-span-11 flex flex-col justify-center'>
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
                                <div className='col-span-1 flex'>
                                    <a href='https://a2it.com/' target='_blank'>
                                        <img className='w-14 object-contain' src={process.env.PUBLIC_URL + '/images/companies/a2it.png'} alt="" />
                                    </a>
                                </div>
                                <div className='col-span-11 flex flex-col justify-center'>
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
                                <div className='col-span-1 flex'>
                                    <a href='https://www.epochmultimedia.com/' target='_blank'>
                                        <img className='w-14 object-contain' src={process.env.PUBLIC_URL + '/images/companies/epochMultimedia.png'} alt="" />
                                    </a>
                                </div>
                                <div className='col-span-11 flex flex-col justify-center'>
                                    <h3 className="text-lg font-semibold  text-white">Epoch Multimedia - Help Desk - Internship</h3>
                                    <p className="text-base font-normal text-gray-400">
                                        Techinical support, assistance, cleaning and maintenance to the computers on the SNPVAC.<br />
                                        Creation of a wordpress website.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <h1 className='text-white text-center text-4xl tracking-wide mt-8 mb-4'>Education🎓</h1>
                <div className='flex items-center justify-center mb-10 max-w-3xl mx-auto'>
                    <ol className="relative border-l border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-200">October 2022 - August 2023</time>
                            <div className='grid grid-cols-12 gap-x-2'>
                                <div className='col-span-1 flex'>
                                    <a href='https://www.citeforma.pt/' target='_blank'>
                                        <img className='w-16 object-contain' src={process.env.PUBLIC_URL + '/images/education/citeforma.png'} alt="" />
                                    </a>
                                </div>
                                <div className='col-span-11 flex flex-col justify-center'>
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
                                <div className='col-span-1 flex'>
                                    <a href='https://casapia.pt/' target='_blank'>
                                        <img className='w-14 object-contain' src={process.env.PUBLIC_URL + '/images/education/casapia.png'} alt="" />
                                    </a>
                                </div>
                                <div className='col-span-11 flex flex-col justify-center'>
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

export default Home;