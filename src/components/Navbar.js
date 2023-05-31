import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseTranslation, useTranslation } from "react-i18next";



function Navbar({ color }) {
    const { t, i18n } = useTranslation()
    const onClickLanguageChange = (e, photo) => {

        i18n.changeLanguage(e);
    };

    const [click, setClick] = useState(false)
    return (
        <div className={color === "color" ? "flex justify-between p-4 shadow-lg  bg-[#ddae91a7]" : "flex  justify-between p-4 shadow-lg  bg-[#417944d0]"}>

            <div>
                Title
            </div>
            <div>

                <ul className="md:flex flex text-[#fff] font-bold">
                    <Link to='/'>
                        <li className="mr-3">
                            {t('Home')}
                        </li>
                    </Link>
                    <Link to='/Animals'>
                        <li className="mr-3">
                            {t(' Animals')}
                        </li>
                    </Link>
                    <Link to='/Plants'>
                        <li className="mr-2">
                            {t('Plants')}
                        </li>
                    </Link>
                  
                </ul>
            </div>
        </div >
    )
}

export default Navbar