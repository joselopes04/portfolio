import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Skills = () => {

    return (
        <main className='min-h-screen flex bg-slate-950'>

            <Link className='absolute h-screen flex items-center right-5 group z-10' to={"/main"}>
                <button className="flex items-center p-3 rounded-2xl text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                    Back <BsArrowRight className='ml-1' />
                </button>
            </Link>
            <div className='w-full mt-5'>
                <h1 className='text-white text-center text-4xl tracking-wide'>Technologies</h1>
                <div className='grid sm:grid-cols-3 mx-14 mt-8'>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-2xl text-white'>Programming Languages</h2>
                        <div className='mt-4'>
                            <p className='text-white'>HTML and CSS</p>
                            <progress class="progress progress-success w-56" value="80" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Javascript</p>
                            <progress class="progress progress-success w-56" value="60" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Dart</p>
                            <progress class="progress progress-success w-56" value="50" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>PHP</p>
                            <progress class="progress progress-success w-56" value="30" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Java</p>
                            <progress class="progress progress-success w-56" value="20" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>C#</p>
                            <progress class="progress progress-success w-56" value="20" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>C/C++</p>
                            <progress class="progress progress-success w-56" value="20" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-2xl text-white'>Databases</h2>
                        <div className='mt-4'>
                            <p className='text-white'>MySQL</p>
                            <progress class="progress progress-success w-56" value="30" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Firebase</p>
                            <progress class="progress progress-success w-56" value="30" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>MongoDB</p>
                            <progress class="progress progress-success w-56" value="10" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-2xl text-white'>Frameworks</h2>
                        <div className='mt-4'>
                            <p className='text-white'>Bootstrap</p>
                            <progress class="progress progress-success w-56" value="80" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Tailwind CSS</p>
                            <progress class="progress progress-success w-56" value="75" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>React</p>
                            <progress class="progress progress-success w-56" value="50" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>ASP.NET</p>
                            <progress class="progress progress-success w-56" value="20" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className='text-white text-center text-4xl tracking-wide'>Languages</h1>
                    <div className='flex justify-center gap-7 mt-8'>
                        <div className='flex flex-col items-center'>
                            <div className="radial-progress text-success" style={{ "--value": 95 }}>95%</div>
                            <p className='text-white mt-1.5'>Portuguese</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className="radial-progress text-success" style={{ "--value": 70 }}>70%</div>
                            <p className='text-white mt-1.5'>Spanish</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className="radial-progress text-success" style={{ "--value": 60 }}>60%</div>
                            <p className='text-white mt-1.5'>English</p>
                        </div>
                   
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Skills;