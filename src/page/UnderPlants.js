import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import queryString from "query-string";
import setting from '../setting.json'



function UnderPlants() {
    const query = queryString.parse(window.location.search)

    const [data, setData] = useState([])

        const fetchData = async () => {

            const orgFetch = await axios.get(`${setting.SERVER}/api/organism/${query.organ}`)
            setData(orgFetch.data)

        }
        useEffect(() => {
            fetchData()
        }, [])
        console.log(data)
    return (data &&
        <div className=" plants min-h-[screen]">
            <Navbar />
            <div className="flex justify-center">
                <div className="w-[90%]">

                    <div className=" shadow-lg bg-[#ffffffac] p-4 rounded-xl mb-5 mt-[4rem]">
                        <div className="flex justify-center">
                            <div className="md:flex block  w-[90%]">

                                <img src="./img/plants3.jpg" className="md:w-[35vw] md:h-[35vw] w-full object-cover rounded-xl" />
                                <div className="w-full self-center mt-2">
                                    <div className="justify-center flex md:ml-[5rem]  md:mb-[2.5rem]">
                                        <div className="w-[90%]">
                                            <h2 className="flex justify-center md:text-[2vw] text-[7vw] font-bold ">Info</h2>
                                            <div className="flex justify-center">
                                                <div className="h-[2px] w-[80%] bg-orange-300 "></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:px-3 py-4 w-[100%]  md:ml-[3rem]  ">
                                        <p className=" group-hover:text-[#fff] px-2  md:text-[1.5vw] font-[500] text-[5vw]">{data?.organism_langs && data?.organism_langs[0].title}</p>
                                        <div className="h-[1px] bg-[#489233] group-hover:bg-[black] w-full"></div>
                                        <p className=" px-2 pt-[2rem] md:text-[1.5vw] group-hover:text-[#fff] font-[500] text-[5vw]">{data?.organism_langs && data?.organism_langs[1].title}</p>
                                        <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                        <p className=" px-2 pt-[2rem] md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">{data?.organism_langs && data?.organism_langs[2].title}</p>
                                        <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mt-[1rem] md:mt-[3rem] mb-4 md:text-[2.5vw] text-[6vw] font-[500]">
                                <h2>Description</h2>
                            </div>
                            <div className="p-2 md:text-[1.1vw] text-[4vw] text-justify">
                                <p>{data?.organism_langs && data?.organism_langs[0]?.body}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UnderPlants;