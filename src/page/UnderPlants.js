import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function UnderPlants() {
    return (
        <div className=" plants">
            <Navbar />
            <div className="flex justify-center">
                <div className="w-[90%]">

                    <div className=" shadow-lg bg-[#ffffffac] p-4 rounded-xl mb-5 mt-[4rem]">
                        <div className="flex  w-[90%]">

                            <img src="./img/plants3.jpg" className="md:w-[35vw] md:h-[35vw] object-cover rounded-xl" />
                            <div className="w-full self-center">
                                <div className="justify-center flex ml-[5rem]  mb-[2.5rem]">
                                    <div className="w-[90%]">
                                        <h2 className="flex justify-center md:text-[2vw] text-[7vw] font-bold ">Info_title</h2>
                                        <div className="flex justify-center">
                                            <div className="h-[2px] w-[80%] bg-orange-300 "></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-4 w-[100%]  ml-[3rem]  ">
                                    <p className=" group-hover:text-[#fff] px-2  md:text-[1.5vw] font-[500] text-[5vw]">name_title</p>
                                    <div className="h-[1px] bg-[#489233] group-hover:bg-[black] w-full"></div>
                                    <p className=" px-2 pt-[2rem] md:text-[1.5vw] group-hover:text-[#fff] font-[500] text-[5vw]">name_title</p>
                                    <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                    <p className=" px-2 pt-[2rem] md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">name_title</p>
                                    <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                    <p className=" px-2 pt-[2rem] md:text-[1.5vw] font-[500] text-[5vw] group-hover:text-[#fff]">name_title</p>
                                    <div className="h-[1px] bg-[#489233] w-full group-hover:bg-[black]"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mt-[3rem] mb-4 md:text-[2.5vw] font-[500]">
                                <h2>Description</h2>
                            </div>
                            <div className="p-2 md:text-[1.1vw] text-justify">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum
                                    has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley
                                    of
                                    type
                                    and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but
                                    also
                                    the
                                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the
                                    1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions
                                    of
                                    Lorem
                                    Ipsum.</p>
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