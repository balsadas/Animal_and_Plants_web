import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion'
import { Link, useLocation } from "react-router-dom";
import setting from '../setting.json'
import queryString from "query-string";
import axios from "axios";

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

    const query = queryString.parse(window.location.search)
    console.log(query,"---------------------")

    
        const [data, setData] = useState([])

        const fetchData = async () => {

            const orgFetch = await axios.get(`${setting.SERVER}/api/category/${query.plant_cat}`)
            
            setData(orgFetch.data)

        }
        console.log(data,'data')
        useEffect(() => {
            fetchData()
        }, [])
        return (
            <div className="plants min-h-screen">
                <div>
                    <Navbar />
                    <div className=" flex justify-center  ">
                        <div className="w-[95%] mt-[4rem] mb-[3rem]">
                            <div className="justify-center flex mb-5">
                                <div className="w-full">
                                    <h2 className="flex justify-center md:text-[2vw] text-[7vw] font-bold">{data?.category_langs && data?.category_langs[0]?.title}</h2>
                                    <div className="flex justify-center">
                                        <div className="h-[2px] w-[60%] bg-orange-300 "></div>
                                    </div>
                                </div>
                            </div>
                            <ul className="grid md:grid-cols-2 lg:grid-cols-3">
                                {data?.organisms?.map((cat, index) => (
                                    <Link to={`/IntoPlants1?organ=${cat.id}`}>
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
                                            <li className="bg-[#ffffffac] hover:bg-[#92d280] group cursor-pointer select-none mx-3 my-2 shadow-lg md:flex   rounded-lg p-2 ">
                                                <img src={`${setting.SERVER}/${cat.img}`} className="lg:w-[15vw]   h-[60vw] w-full md:h-[18vw] lg:h-[15vw] object-cover rounded-lg" />
                                                <div className="px-3 py-4 w-full  ">
                                                    <p className=" group-hover:text-[#fff] px-2 pt-2 md:text-[1.5vw] font-[500] text-[5vw]">{cat?.organism_langs[0]?.title}</p>
                                                    <div className="h-[1px] bg-[#489233] group-hover:bg-[black] w-full"></div>
                                                    <p className=" px-2 pt-2 md:text-[1.5vw] group-hover:text-[#fff] font-[500] text-[5vw]">{cat?.organism_langs[1]?.title}</p>
                                                    <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                                    <p className=" px-2 pt-2 md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">{cat?.organism_langs[2]?.title2}</p>
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