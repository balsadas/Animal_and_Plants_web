import React from "react";
import { Link } from "react-router-dom";



function Navbar({ color }) {
    return (
        <div className={color === "color" ? "flex justify-between p-4 shadow-lg  bg-[#ddae91a7]" : "flex justify-between p-4 shadow-lg  bg-[#417944d0]"}>

            <div>
                Title
            </div>
            <div>
                <ul className="md:flex hidden text-[#fff] font-bold">
                    <Link to='/'>
                        <li className="mr-3">
                            Home
                        </li>
                    </Link>
                    <Link to='/Animals'>
                        <li className="mr-3">
                            Animals
                        </li>
                    </Link>
                    <Link to='/Plants'>
                        <li className="mr-2">
                            Plants
                        </li>
                    </Link>
                </ul>
            </div>
        </div >
    )
}

export default Navbar