import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import setting from '../setting.json'


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

function Plants() {
    const [data, setData] = useState()

    const fetchData = async () => {

        const orgFetch = await axios.get(`${setting.SERVER}/api/kindom/1`)
        setData(orgFetch.data)

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="plants min-h-screen">
            <Navbar />
            <div className=" flex justify-center ">
                <div className="w-[85%]  mb-[3rem]">
                    <div className="justify-center flex mb-5 mt-[4rem]">
                        <div className="w-full">
                            <h2 className="flex justify-center md:text-[2vw] text-[7vw] font-bold text-[#fff]">Plants</h2>
                            <div className="flex justify-center">
                                <div className="h-[2px] w-[60%] bg-orange-300 "></div>
                            </div>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-3 lg:grid-cols-4">
                        {data && data?.categories.map((cat, index) => (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                key={index}
                            >
                                <Link to={`/IntoPlants?plant_cat=${cat.id}`}>
                                    <li className="bg-[#ffffffac]  hover:bg-[#92d280] group cursor-pointer select-none mx-3 my-2 shadow-lg duration-300 ease-in-out  rounded-lg p-2 md:hover:scale-110">
                                        <img src={`${setting.SERVER}/${cat.img}`} className="lg:w-[20vw]   h-[60vw] w-full md:h-[15vw] object-cover rounded-lg" />
                                        <p className=" p-2 md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">{cat.category_langs[0].title}</p>
                                        <div className=" flex items-center py-3 px-1">
                                            <img src="./img/align-text.png" className="md:w-[1.5vw] md:h-[1.5vw] group-hover:hidden w-[5vw] h-[5vw] object-cover" />
                                            <img src='./img/hamburger.png' className="md:w-[1.5vw] md:h-[1.5vw] group-hover:block hidden w-[5vw] h-[5vw] object-cover" />
                                            <p className="md:text-[1.3vw] text-[4vw] ml-2 text-gray-500 group-hover:text-[#fff]">see more</p>
                                        </div>
                                    </li>
                                </Link>
                            </motion.div>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Plants