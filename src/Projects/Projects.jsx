import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
    const [option, setOption] = useState(1);

    return (
        <>
            <main className='min-h-screen flex flex-col bg-slate-950'>
                <div className="flex flex-col items-center">
                    <Link className='absolute top-5 group z-10' to={"/main"}>
                        <button className="flex items-center p-3 rounded-2xl text-slate-950 z-10 bg-gradient-to-br from-green-200 to-emerald-500 group-hover:from-cyan-500 group-hover:to-blue-500 select-none transition-transform">
                            <BsArrowUp className='mr-1' />Back
                        </button>
                    </Link>
                    <div className='w-full mt-24'>
                        <h1 className='text-white text-center text-4xl tracking-wide'>Projects🚀</h1>
                    </div>
                    <div className="w-full">
                        <div className="flex ml-10">
                            <p className={"mr-4 text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 1 && "text-emerald-600")} onClick={() => setOption(1)}>
                                All
                            </p>
                            <p className={"mr-4 text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 2 && "text-emerald-600")} onClick={() => setOption(2)}>
                                Websites
                            </p>
                            <p className={"mr-4 text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 3 && "text-emerald-600")} onClick={() => setOption(3)}>
                                Mobile
                            </p>
                            <p className={"text-lg cursor-pointer transition-colors hover:text-emerald-600 " + (option === 4 && "text-emerald-600")} onClick={() => setOption(4)}>Others</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mt-6 ml-10">
                            {(option === 1 || option === 2) &&
                                <div className="relative w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/footballJerseyShop.png'} />
                                    <div className="hidden absolute inset-0 bg-black bg-opacity-60 items-center justify-center group-hover:flex">
                                        <p className="text-white text-xl font-bold ml-2">Football Jersey Shop</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">PHP</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">My SQL</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 2 || option === 4) &&
                                <div className="relative w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/spaceExplorationGameLogo.jpg'} />
                                    <div className="hidden absolute inset-0 bg-black bg-opacity-60 items-center justify-center group-hover:flex">
                                        <p className="text-white text-xl font-bold">Space Exploration</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">HTML CSS</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">Javascript</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 2) &&
                                <div className="relative w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/AmericanMuscle.png'} />
                                    <div className="hidden absolute inset-0 bg-black bg-opacity-60 items-center justify-center group-hover:flex">
                                        <p className="text-white text-xl font-bold ml-2">American Muscle Cars</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">HTML CSS</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">Bootstrap</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 3) &&
                                <div className="relative w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/Recipes4ALL.jpg'} alt="Recipes4ALL" />
                                    <div className="hidden absolute inset-0 bg-black bg-opacity-60 items-center justify-center group-hover:flex">
                                        <p className="text-white text-xl font-bold"> Recipes 4 all</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">Flutter</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">Firebase</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(option === 1 || option === 2 || option === 3) &&
                                <div className="relative w-48 group">
                                    <img className="w-full" src={process.env.PUBLIC_URL + '/images/projects/logos/DiamondCare.png'} alt="Diamond Care" />
                                    <div className="hidden absolute inset-0 bg-black bg-opacity-60 items-center justify-center group-hover:flex">
                                        <p className="text-white text-xl font-bold"> Diamond Care</p>
                                        <div className="absolute bottom-1.5 flex justify-evenly w-full">
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">Java</div>
                                            <div className="bg-slate-100 rounded-xl py-0.5 px-1.5 text-black">Firebase</div>
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
};

export default Projects;