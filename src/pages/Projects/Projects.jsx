import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
    const [option, setOption] = useState(1);
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.keyCode === 38) { // Up arrow key
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
            <main className='flex flex-col min-h-screen bg-slate-950'>
                <div className="flex flex-col items-center">
                    <Link className='absolute z-10 top-5 group' to={"/main"}>
                        <button className="z-10 flex items-center p-3 transition-transform select-none rounded-2xl text-slate-950 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500">
                            <BsArrowUp className='2xl:ml-1' /><span className='hidden xl:block'>Back</span>
                        </button>
                    </Link>
                    <div className='w-full mt-24'>
                        <h1 className='text-4xl tracking-wide text-center text-white'>Projects🚀</h1>
                    </div>
                    <div className="w-full mb-8 sm:mb-0">
                        <div className="flex mx-4 mt-2 sm:ml-10">
                            <p className={"mr-4 text-base xs:text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 1 && "text-emerald-600")} onClick={() => setOption(1)}>
                                All
                            </p>
                            <p className={"mr-4 text-base xs:text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 2 && "text-emerald-600")} onClick={() => setOption(2)}>
                                Websites
                            </p>
                            <p className={"mr-4 text-base xs:text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 3 && "text-emerald-600")} onClick={() => setOption(3)}>
                                Mobile
                            </p>
                            <p className={"text-base xs:text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 4 && "text-emerald-600")} onClick={() => setOption(4)}>Others</p>
                        </div>
                        <div className="grid grid-cols-1 mx-4 mt-6 xs:grid-cols-2 sm:ml-10 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
                            {(option === 1 || option === 2) &&
                                <div className="relative mx-auto select-none xs:mx-0 w-36 sm:w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/footballJerseyShop.png'} />
                                    <div className="absolute inset-0 items-center justify-center hidden bg-black bg-opacity-60 group-hover:flex">
                                        <p className="ml-2 text-xl font-bold text-white">Football Jersey Shop</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">PHP</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">My SQL</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 2 || option === 4) &&
                                <div className="relative mx-auto select-none xs:mx-0 w-36 sm:w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/spaceExplorationGameLogo.jpg'} />
                                    <div className="absolute inset-0 items-center justify-center hidden bg-black bg-opacity-60 group-hover:flex">
                                        <p className="text-xl font-bold text-white">Space Exploration</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">HTML CSS</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">JS</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 2) &&
                                <div className="relative mx-auto select-none xs:mx-0 w-36 sm:w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/AmericanMuscle.png'} />
                                    <div className="absolute inset-0 items-center justify-center hidden bg-black bg-opacity-60 group-hover:flex">
                                        <p className="ml-2 text-xl font-bold text-white">American Muscle Cars</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">HTML CSS</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">Bootstrap</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 3) &&
                                <div className="relative mx-auto select-none xs:mx-0 w-36 sm:w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/Recipes4ALL.jpg'} alt="Recipes4ALL" />
                                    <div className="absolute inset-0 items-center justify-center hidden bg-black bg-opacity-60 group-hover:flex">
                                        <p className="text-xl font-bold text-white"> Recipes 4 all</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">Flutter</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">Firebase</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 2 || option === 3) &&
                                <div className="relative mx-auto select-none xs:mx-0 w-36 sm:w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/DiamondCare.png'} alt="Diamond Care" />
                                    <div className="absolute inset-0 items-center justify-center hidden bg-black bg-opacity-60 group-hover:flex">
                                        <p className="text-xl font-bold text-white"> Diamond Care</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">Java</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black text-xs sm:text-base">Firebase</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Projects;