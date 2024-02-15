import Image from "next/image";
import React from "react";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

export const Footer = () => {
    return (
        <>
            <div className={'bg-black p-5'}>
                <div className={'flex-1 flex justify-center'}>
                    <Image src={'/images/logo.png'} height={50} className={'filter invert-[100%]'} width={200}
                           alt={'chanel'}/>
                </div>

                <div className={'grid grid-cols-4 gap-4 text-white mt-16 px-20'}>
                    <div>
                        <h5 className={'capitalize font-medium'}>explore chanel.com</h5>
                        <p className={'capitalize mt-2 text-[#9B9B9B] text-sm'}>
                            <a className={'block mb-2'} href={'#'}>haute culture</a>
                            <a className={'block mb-2'} href={'#'}>fashion</a>
                            <a className={'block mb-2'} href={'#'}>high jewellery</a>
                            <a className={'block mb-2'} href={'#'}>watches</a>
                            <a className={'block mb-2'} href={'#'}>eyewear</a>
                            <a className={'block mb-2'} href={'#'}>fragrance</a>
                            <a className={'block mb-2'} href={'#'}>makeup</a>
                            <a className={'block mb-2'} href={'#'}>skincare</a>
                            <a className={'block mb-2'} href={'#'}>sitemap</a>


                        </p>

                    </div>
                    <div>
                        <h5 className={'capitalize font-medium'}>online services</h5>
                        <p className={'capitalize mt-2 text-[#9B9B9B] text-sm'}>
                            <a className={'block mb-2'} href={'#'}>my account</a>
                            <a className={'block mb-2'} href={'#'}>care & service</a>
                            <a className={'block mb-2'} href={'#'}>FAQ</a>
                        </p>
                    </div>
                    <div>
                        <h5 className={'capitalize font-medium'}>boutique services</h5>
                        <p className={'capitalize mt-2 text-[#9B9B9B] text-sm'}>
                            <a className={'block mb-2'} href={'#'}>find a boutique</a>
                            <a className={'block mb-2'} href={'#'}>appointments with chanel</a>
                        </p>
                    </div>
                    <div>
                        <h5 className={'capitalize font-medium'}>
                            the house of chanel
                        </h5>
                        <p className={'capitalize mt-2 text-[#9B9B9B] text-sm'}>
                            <a className={'block mb-2'} href={'#'}>careers</a>
                            <a className={'block mb-2'} href={'#'}>legal</a>
                            <a className={'block mb-2'} href={'#'}>privacy</a>
                            <a className={'block mb-2'} href={'#'}>report to society</a>
                            <a className={'block mb-2'} href={'#'}>Fighting Counterfeits</a>
                            <a className={'block mb-2'} href={'#'}>financial results</a>
                        </p>
                    </div>


                </div>
                <div className={'mx-20 text-white flex mt-5 border-b-[1px] border-[#333333] pb-2'}>
                    <h5 className={'text-sm'}>
                        Disable high contrast
                    </h5>
                    <div className={'pl-5'}>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div
                                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>

                    </div>

                </div>
                <div className={'px-20 mt-5 flex justify-between'}>
                    <h5 className={'text-[12px] text-white font-light'}>
                        Change location and language

                        India - English
                    </h5>
                    <div className={'text-white flex flex-row'}>
                        <BsInstagram className={'mx-2'} size={12}/>
                        <AiFillFacebook className={'mx-2'} size={12}/>
                        <BsYoutube className={'mx-2'} size={12}/>
                        <AiFillLinkedin className={'mx-2'} size={12}/>
                    </div>

                </div>
                <div className={'px-20'}>
                    <h5 className={'text-white font-xs mt-5'}>

                        CHANEL (INDIA) PRIVATE LIMITED, 5th Floor, Unit No. 505 &506, World-Mark 3, Hospitality District, IGIA, New Delhi, 110037, INDIA
                    </h5>
                </div>

            </div>
        </>
    );
};