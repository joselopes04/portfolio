import React, { useEffect } from 'react';
import ConsoleAnimation from '../../components/ConsoleAnimation/ConsoleAnimation';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowUp, BsArrowDown, BsArrowLeft, BsArrowRight, BsFillCircleFill } from 'react-icons/bs';
import MatrixRain from '../../components/MatrixRain/MatrixRain';

const MainPage = () => {

    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        switch (e.keyCode) {
            case 37: // Left arrow key
                navigate("/stats");
                break;
            case 38: // Up arrow key
                navigate("/");
                break;
            case 39: // Right arrow key
                navigate("/carreer");
                break;
            case 40: // Down arrow key
                navigate("/projects");
                break;
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            //Remove the key listener 
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const words = ['Frontend developer', 'Backend developer', 'Fullstack developer'];

    return (
        <main className='flex items-center justify-center h-screen'>
            <Link className='absolute z-10 top-5 group' to={"/"}>
                <button className="button w-28">
                    Home<BsArrowUp />
                </button>
            </Link>
            <Link className='absolute z-10 left-5 group' to={"/stats"}>
                <button className="button w-[6.5rem]">
                    <BsArrowLeft className='mr-1' /> Stats
                </button>
            </Link>
            <Link className='absolute z-10 right-5 group' to={"/carreer"}>
                <button className="button w-[6.5rem]">
                    Timeline <BsArrowRight className='ml-1' />
                </button>
            </Link>
            <Link className='absolute z-10 bottom-5 group' to={"/projects"}>
                <button className="button w-[6.5rem]">
                    Projects <BsArrowDown />
                </button>
            </Link>
            <MatrixRain />
            <div className='z-10 hidden w-1/3 bg-black rounded-lg h-1/3 md:block'>
                <div className='relative h-6 bg-white rounded-t-lg'>
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