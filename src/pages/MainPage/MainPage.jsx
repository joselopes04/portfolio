import React from 'react';
import ConsoleAnimation from '../../components/ConsoleAnimation/ConsoleAnimation';
import { Link } from 'react-router-dom';
import { BsArrowUp, BsArrowDown, BsArrowLeft, BsArrowRight, BsFillCircleFill } from 'react-icons/bs'; 
import MatrixRain from '../../components/MatrixRain/MatrixRain';

const MainPage = () => {

    const words = ['Frontend developer', 'Backend developer', 'Fullstack developer'];

    return (
        <main className='h-screen flex items-center justify-center'>
            <Link className='absolute top-5 group z-10' to={"/"}>
                <button className="flex items-center p-3 rounded-2xl text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                    Home Page <BsArrowUp/>
                </button>
            </Link>
            <Link className='absolute left-5 group z-10' to={"/stats"}>
                <button className="flex items-center p-3  rounded-2xl  text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                    <BsArrowLeft  className='mr-1'/> Stats
                </button>
            </Link>
            <Link className='absolute right-5 group z-10' to={"/carreer"}>
                <button className="flex items-center p-3 rounded-2xl text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                    Carreer Timeline <BsArrowRight className='ml-1'/>
                </button>
            </Link>
            <Link className='absolute bottom-5 group z-10' to={"/"}>
                <button className="flex items-center p-3 rounded-2xl text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                    Projects <BsArrowDown />
                </button>
            </Link>
            <MatrixRain />
            <div className='z-10 bg-slate-950 w-1/3 h-1/3 rounded-lg'>
                <div className='h-6 bg-white rounded-t-lg relative'>
                    <p className='text-center select-none text-slate-950'>Terminal</p>
                    <BsFillCircleFill className='absolute top-1 left-1 text-console-red' size={18} /> 
                    <BsFillCircleFill className='absolute top-1 left-7 text-console-yellow' size={18} />
                    <BsFillCircleFill className='absolute top-1 left-[3.25rem] text-console-green' size={18} />
                </div>
                <ConsoleAnimation words={words} classes={"text-xl select-none text-green-500 p-1 z-10"} />
            </div>
        </main>
    );
};

export default MainPage;