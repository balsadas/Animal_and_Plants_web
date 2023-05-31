import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import setting from '../setting.json'
import AnimMean from "./AnimMean";

const Cat = [
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' },
    { title: 'Suytemdirjiler' }
]

function Animals() {
    const [Anim, setAnim] = useState([])

    const animFetch = async () => {
        await axios.get(`${setting.SERVER}/api/kindom/2`)

            .then(res => {
                console.log(res.data, 'dsd')

                setAnim(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        animFetch()
    },[])
    console.log(Anim)
    return (
        <div className="animal ">
            <Navbar color={'color'} />
            <div className="flex justify-center min-h-screen">
                <div className="w-[85%] mt-[4rem]   mb-[6rem]">
                    <div className="justify-center flex mb-5">
                        <div className="w-full">
                            <h2 className="flex justify-center md:text-[2vw] text-[7vw] font-bold ">Animals</h2>
                            <div className="flex justify-center">
                                <div className="h-[2px] w-[60%] bg-orange-300 "></div>
                            </div>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-3 lg:grid-cols-4">
                        {Anim?.categories && Anim?.categories.map((anim, index) => (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                key={anim.id}
                            >
                                <Link to={`/IntoAnimals?plant_cat=${anim.id}`}>
                                    <li className="bg-[#ffffffac] group hover:bg-[#ddae91c1] cursor-pointer select-none mx-3 my-2 shadow-lg duration-300 ease-in-out  rounded-lg p-2 md:hover:scale-110">
                                        <img src={`${setting.SERVER}/${anim.img}`} className="lg:w-[20vw]   h-[60vw] w-full md:h-[15vw] object-cover rounded-lg" />
                                        <p className=" p-2 md:text-[1.5vw] font-[500] group-hover:text-[#fff] text-[5vw]">{anim.category_langs[0].title}</p>
                                        <div className=" flex items-center py-3 px-1">
                                            <img src="./img/align-text.png" className="md:w-[1.5vw] md:h-[1.5vw] group-hover:hidden w-[5vw] h-[5vw] object-cover" />
                                            <img src='./img/hamburger.png' className="md:w-[1.5vw] md:h-[1.5vw] group-hover:block hidden w-[5vw] h-[5vw] object-cover" />
                                            <p className="md:text-[1.3vw] text-[4vw] group-hover:text-[#fff] ml-2 text-gray-500">see more</p>
                                        </div>
                                    </li>
                                </Link>
                            </motion.div>

                        ))}
                    </ul>
                </div>
            </div>
            <Footer color={'color'} />
        </div>
    )
}

export default Animals;