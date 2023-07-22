import React from 'react';
import LavaBubbles from '../../components/LavaBubbles/LavaBubbles';

const Home = () => {

    return (
        <>
            <LavaBubbles></LavaBubbles>
            <main className="h-screen bg-gradient-to-br from-blue-700 to-slate-950 ">

                <div className="flex justify-center items-center h-full ">
                    <div className="flex flex-col justify-center items-center text-white bg-slate-400 bg-opacity-20 p-4 rounded-lg z-10">
                        <div>
                            <h5 className="text-sm">Hello my name is ... </h5>
                        </div>
                        <div>
                            <h1 className="text-6xl">José T. Lopes</h1>
                        </div>
                    </div>
                    <div className="ml-16 relative z-10">
                        <img className="h-64 rounded-3xl transition-all hover:skew-y-12 shadow-2xl" src={process.env.PUBLIC_URL + '/images/eu.jpg'} alt="José T. Lopes" />
                    </div>


                </div>
            </main>
        </>

    );
};
export default Home;