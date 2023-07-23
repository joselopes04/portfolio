import React from 'react';
import LavaBubbles from '../../components/LavaBubbles/LavaBubbles';
import { BsArrowDown } from 'react-icons/bs';

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
                    <img className="h-64 rounded-3xl transition-all hover:skew-y-12 shadow-2xl" src={process.env.PUBLIC_URL + '/images/eu.jpg'} alt="José T. Lopes" />
                </div>

                <button className="absolute flex items-center bottom-1 p-3 rounded-2xl text-slate-950 bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-green-500 hover:to-emerald-700 select-none animate-bounce transition-transform z-10">Discover more<BsArrowDown/></button>

            </main>

        </>

    );
};
export default Home;