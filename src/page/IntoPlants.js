import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

const Cat = [
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
    { title: 'Maymyn', title1: 'Monkey', title2: 'maymyn', title3: 'obizyana' },
]

function IntoPlants() {
    return (
        <div className="plants">
            <div>
                <Navbar />
                <div className=" flex justify-center  ">
                    <div className="w-[95%] mt-[4rem] mb-[3rem]">
                        <div className="justify-center flex mb-5">
                            <div className="w-full">
                                <h2 className="flex justify-center md:text-[2vw] text-[7vw] font-bold">Category_title</h2>
                                <div className="flex justify-center">
                                    <div className="h-[2px] w-[60%] bg-orange-300 "></div>
                                </div>
                            </div>
                        </div>
                        <ul className="grid md:grid-cols-2 lg:grid-cols-3">
                            {Cat.map((cat, index) => (
                                <Link to='/IntoPlants1'>
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}  
                                >
                                    <li key={index} className="bg-[#ffffffac] hover:bg-[#92d280] group cursor-pointer select-none mx-3 my-2 shadow-lg md:flex   rounded-lg p-2 ">
                                        <img src="./img/portfolio_item_4.png" className="lg:w-[15vw]   h-[60vw] w-full md:h-[18vw] lg:h-[15vw] object-cover rounded-lg" />
                                        <div className="px-3 py-4 w-full  ">
                                            <p className=" group-hover:text-[#fff] px-2 pt-2 md:text-[1.5vw] font-[500] text-[5vw]">{cat.title}</p>
                                            <div className="h-[1px] bg-[#489233] group-hover:bg-[black] w-full"></div>
                                            <p className=" px-2 pt-2 md:text-[1.5vw] group-hover:text-[#fff] font-[500] text-[5vw]">{cat.title1}</p>
                                            <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                            <p className=" px-2 pt-2 md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">{cat.title2}</p>
                                            <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                            <p className=" px-2 pt-2 md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">{cat.title3}</p>
                                            <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                        </div>

                                    </li>
                                </motion.div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default IntoPlants;