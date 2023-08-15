import React from 'react';
import ConsoleAnimation from '../../components/ConsoleAnimation/ConsoleAnimation';
import { Link } from 'react-router-dom';
import { BsArrowUp } from 'react-icons/bs';

const MainPage = () => {

    const words = ['Frontend developer', 'Backend developer', 'Fullstack developer'];

    return (
        <main className='h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600'>
            <Link className='absolute top-5 group z-10' to={"/"}>
                <button className="flex items-center p-3  rounded-2xl text-slate-950 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500  select-none animate-bounce transition-transform">
                    Home Page <BsArrowUp />
                </button>
            </Link>
            <div>
                <ConsoleAnimation words={words} classes={"text-4xl text-slate-950"} />
            </div>
        </main>

    );

};

export default MainPage;
