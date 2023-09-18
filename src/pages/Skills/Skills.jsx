import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Skills = () => {

    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.keyCode === 39) { // Right arrow key
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
        <main className='flex min-h-screen bg-slate-950'>

            <Link className='absolute z-10 flex items-center h-screen right-5 group' to={"/main"}>
                <button className="z-10 flex items-center p-3 transition-transform select-none rounded-2xl text-slate-950 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500">
                    Back <BsArrowRight className='ml-1' />
                </button>
            </Link>
            <div className='w-full my-8'>
                <h1 className='text-4xl tracking-wide text-center text-white'>Technologies🤖</h1>
                <div className='grid mt-8 sm:grid-cols-3 mx-14'>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-2xl text-white'>Programming Languages</h2>
                        <div className='mt-4'>
                            <p className='text-white'>HTML and CSS</p>
                            <progress className="w-56 progress progress-success" value="80" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Javascript</p>
                            <progress className="w-56 progress progress-success" value="60" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Dart</p>
                            <progress className="w-56 progress progress-success" value="50" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>PHP</p>
                            <progress className="w-56 progress progress-success" value="30" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Java</p>
                            <progress className="w-56 progress progress-success" value="20" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>C#</p>
                            <progress className="w-56 progress progress-success" value="20" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>C/C++</p>
                            <progress className="w-56 progress progress-success" value="20" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-2xl text-white'>Databases</h2>
                        <div className='mt-4'>
                            <p className='text-white'>MySQL</p>
                            <progress className="w-56 progress progress-success" value="30" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Firebase</p>
                            <progress className="w-56 progress progress-success" value="30" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>MongoDB</p>
                            <progress className="w-56 progress progress-success" value="10" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-2xl text-white'>Frameworks</h2>
                        <div className='mt-4'>
                            <p className='text-white'>Bootstrap</p>
                            <progress className="w-56 progress progress-success" value="80" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Tailwind CSS</p>
                            <progress className="w-56 progress progress-success" value="75" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>React</p>
                            <progress className="w-56 progress progress-success" value="50" max="100"></progress>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>ASP.NET</p>
                            <progress className="w-56 progress progress-success" value="20" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className='text-4xl tracking-wide text-center text-white'>Languages🗺️</h1>
                    <div className='flex justify-center mt-8 gap-7'>
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