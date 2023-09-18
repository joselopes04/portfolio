import React, { useEffect } from 'react';
import LavaBubbles from '../../components/LavaBubbles/LavaBubbles';
import { BsArrowDown } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.keyCode === 40) {// Bottom arrow key
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
            <LavaBubbles />
            <main className="flex justify-center h-screen bg-gradient-to-br from-blue-700 to-slate-950 ">
                <div className='flex flex-col-reverse items-center justify-center h-full md:flex-row'>
                    <div className="z-10 flex flex-col items-center justify-center p-4 mx-10 text-white transition-colors rounded-lg bg-slate-400 bg-opacity-20 sm:mx-0 hover:bg-opacity-50">
                        <div>
                            <h5 className="text-sm select-none">Hello my name is ... </h5>
                        </div>
                        <div>
                            <h1 className="text-6xl text-center select-none">José T. Lopes</h1>
                        </div>
                    </div>
                    <div className="relative z-10 mb-10 md:ml-16 md:mb-0">
                        <img className="h-64 shadow-2xl select-none rounded-3xl" src={process.env.PUBLIC_URL + '/images/eu.jpg'} alt="José T. Lopes" />
                    </div>
                </div>
                <Link className='absolute z-10 bottom-1 group' to={"/main"}>
                    <button className="transition-transform button animate-bounce">
                        Discover more<BsArrowDown />
                    </button>
                </Link>
            </main>
        </>

    );
};
export default Home;