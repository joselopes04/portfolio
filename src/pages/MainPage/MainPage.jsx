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
                <button className="button w-28">
                    Home<BsArrowUp/>
                </button>
            </Link>
            <Link className='absolute left-5 group z-10' to={"/stats"}>
                <button className="button w-[6.5rem]">
                    <BsArrowLeft className='mr-1'/> Stats
                </button>
            </Link>
            <Link className='absolute right-5 group z-10' to={"/carreer"}>
                <button className="button w-[6.5rem]">
                    Timeline <BsArrowRight className='ml-1'/>
                </button>
            </Link>
            <Link className='absolute bottom-5 group z-10' to={"/projects"}>
                <button className="button w-[6.5rem]">
                    Projects <BsArrowDown />
                </button>
            </Link>
            <MatrixRain />
            <div className='z-10 bg-black w-1/3 h-1/3 rounded-lg hidden md:block'>
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