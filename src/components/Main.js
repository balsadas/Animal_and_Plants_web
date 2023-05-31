import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import setting from '../setting.json'

function Main() {


    const [fetchdata,setFetchdata] = useState([])

    const fetch = async ()=>{
        axios.get(`${setting.SERVER}/api/kindom`)
        .then(res =>{
            setFetchdata(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }
    useEffect(()=>{
        fetch()
    },[])
    return (fetchdata &&
        <div className="flex justify-center items-center  h-screen">
            <div className="md:flex justify-center items-center w-[90%]">
                <Link to='/Animals'>
                    <div className="md:hover:scale-110 translate-y-1 transition-all ease-in-out duration-150">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-[#ffffffb0] md:mt-[6vw] mt-[8vw]  shadow-lg p-3 cursor-pointer  group rounded-lg md:hover:scale-110 translate-y-1 transition-all ease-in-out duration-150">
                            <img src="./img/animal5.jpg" className="rounded-lg  md:w-[25vw] md:h-[20vw] w-[100%] h-[75vw] object-cover" />
                            <div className="pt-2 items-center text-[6vw]  flex justify-center md:text-[2.5vw] font-[500] group-hover:text-[green] ">{fetchdata[1]?.kindom_langs[0].title}</div>
                        </motion.div>
                    </div>
                </Link>
                <Link to='/Plants'>
                    <div className=" md:hover:scale-110 translate-y-1 transition-all ease-in-out duration-150">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-[#ffffffb0] md:mt-[6vw] mt-[8vw] shadow-lg p-3 cursor-pointer  group rounded-lg  md:ml-[4rem]">
                            <img src="./img/plants.jpg" className="rounded-lg  md:w-[25vw] md:h-[20vw] w-[100%] h-[75vw] object-cover" />
                            <div className="pt-2 text-[6vw] flex justify-center md:text-[2.5vw] font-[500] group-hover:text-[green] ">{fetchdata[0]?.kindom_langs[0].title}</div>
                        </motion.div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Main;