import React from "react";


function Footer({ color }) {
    return (
        <div className={color === 'color' ? "  flex justify-center   bg-[#ddae91a7]  md:h-[6vw] items-center" : "  flex justify-center   mt-[5rem] bg-[#417944d0] md:h-[6vw] items-center"}>
            <div className="w-[90%] md:flex  items-center ">
                <div className="flex justify-center">
                    <div>
                        <img className="md:w-[5vw] md:h-[5vw] object-cover" src="./img/Titu.png" />
                    </div>
                </div>
                <div className="font-[500] ml-2 flex justify-center text-[4vw] md:text-[1.1vw]">
                    Copyright © Created by Oguztech
                </div>
            </div>
        </div>
    )
}

export default Footer;