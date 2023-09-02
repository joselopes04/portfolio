import React from 'react';
import LavaBubbles from '../../components/LavaBubbles/LavaBubbles';
import { BsArrowDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <LavaBubbles />
            <main className="h-screen bg-gradient-to-br from-blue-700 to-slate-950 flex justify-center items-center">

                <div className="flex flex-col justify-center items-center text-white bg-slate-400 bg-opacity-20 p-4 rounded-lg transition-colors z-10 hover:bg-opacity-50">
                    <div>
                        <h5 className="text-sm select-none">Hello my name is ... </h5>
                    </div>
                    <div>
                        <h1 className="text-6xl select-none">José T. Lopes</h1>
                    </div>
                </div>

                <div className="ml-16 relative z-10">
                    <img className="h-64 rounded-3xl shadow-2xl select-none" src={process.env.PUBLIC_URL + '/images/eu.jpg'} alt="José T. Lopes" />
                </div>

                <Link className='absolute bottom-1 group z-10' to={"/main"}>
                    <button className="flex items-center p-3 rounded-2xl text-slate-950 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-green-400 group-hover:to-emerald-600 select-none animate-bounce transition-transform">
                        Discover more<BsArrowDown />
                    </button>
                </Link>

            </main>

        </>

    );
};
export default Home;