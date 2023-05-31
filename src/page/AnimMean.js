import React from "react";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

function AnimMean({anim}) {
    return (
      
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
                                <Link to='/IntoAnimals'>
                                    <li className="bg-[#ffffffac] group hover:bg-[#ddae91c1] cursor-pointer select-none mx-3 my-2 shadow-lg duration-300 ease-in-out  rounded-lg p-2 md:hover:scale-110">
                                        <img src={anim.img} className="lg:w-[20vw]   h-[60vw] w-full md:h-[15vw] object-cover rounded-lg" />
                                        <p className=" p-2 md:text-[1.5vw] font-[500] group-hover:text-[#fff] text-[5vw]">{anim.title}</p>
                                        <div className=" flex items-center py-3 px-1">
                                            <img src="./img/align-text.png" className="md:w-[1.5vw] md:h-[1.5vw] group-hover:hidden w-[5vw] h-[5vw] object-cover" />
                                            <img src='./img/hamburger.png' className="md:w-[1.5vw] md:h-[1.5vw] group-hover:block hidden w-[5vw] h-[5vw] object-cover" />
                                            <p className="md:text-[1.3vw] text-[4vw] group-hover:text-[#fff] ml-2 text-gray-500">see more</p>
                                        </div>
                                    </li>
                                </Link>
                            </motion.div>
                    
                     
    )
}

export default AnimMean