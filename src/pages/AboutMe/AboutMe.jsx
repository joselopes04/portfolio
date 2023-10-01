import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <>
            <main className="min-h-screen bg-gradient-to-br from-blue-700 to-slate-950 ">
                <div className='py-10 '>
                    <h1 className="text-6xl text-center text-white select-none">About me</h1>
                    <div className='flex flex-col-reverse mt-10 md:flex-row'>
                        <div className='mx-10 text-lg text-left text-white md:max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl'>
                            <p>
                                I'm José T. Lopes, born on February 4, 2004, in the vibrant city of Lisbon, Portugal.
                                My journey into the world of programming began during my 10th-grade year, and from that moment on, I was captivated by it.
                            </p>
                            <p className='mt-5'>
                                Since my initial discovery of programming, I embarked on a journey of personal projects, each one adding to my skills and passion for coding.
                                Along the way, I had the opportunity to complete three valuable programming internships, each contributing to my growth in the field.
                            </p>
                            <p className='mt-5'>
                                Currently, I am fully immersed in the dynamic world of tech, working at a promising startup called DIONAMITE, where I'm channeling my enthusiasm and skills into meaningful projects and contributing to the company's success.
                            </p>
                        </div>

                        <div className="md:ml-16 md:mb-0">
                            <img className="h-64 mx-auto shadow-2xl select-none rounded-3xl" src={process.env.PUBLIC_URL + '/images/eu.jpg'} alt="José T. Lopes" />
                        </div>
                    </div>
                </div>
                <Link className='absolute z-10 left-6 top-10 group' to={"/"}>
                    <button className="transition-transform button ">
                        <BsArrowLeft className='2xl:ml-1' /><span className='hidden xl:block'>Back</span>
                    </button>
                </Link>
            </main >
        </>
    );
};
export default AboutMe;