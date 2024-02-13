import React from 'react';
import Image from "next/image";
import {IoSearchOutline} from "react-icons/io5";
import {CiUser} from "react-icons/ci";
import {IoMdStarOutline} from "react-icons/io";

function Navbar() {
    return (
        <>
            <div className='bg-black p-1'></div>
            <div className={'container mx-auto px-4 p-4 flex flex-row'}>
                <div className={'flex-1'}>
                </div>
                <div className={'flex-1 flex justify-center'}>
                    <Image src={'/images/logo.png'} height={50} width={200} alt={'chanel'}/>
                </div>
                <div className={'flex-1 flex items-center justify-center'}>
                    <div>
                        <ul className={'flex'}>
                            <li className={'py-4 px-3'}><IoSearchOutline size={19}/></li>
                            <li className={'py-4 px-3'}><CiUser size={19}/></li>
                            <li className={'py-4 px-3'}><IoMdStarOutline size={19}/></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className={'container mx-auto  justify-around px-4 flex '}>

                <ul className={'flex uppercase'}>
                    <li className={'px-5'}><a><span>Haute culture</span></a></li>
                    <li className={'px-5'}><a><span>Fashion</span></a></li>
                    <li className={'px-5'}><a><span>High Jewellery</span></a></li>
                    <li className={'px-5'}><a><span>Watches</span></a></li>
                    <li className={'px-5'}><a><span>Eyewear</span></a></li>
                    <li className={'px-5'}><a><span>Fragrance</span></a></li>
                    <li className={'px-5'}><a><span>Makeup</span></a></li>
                    <li className={'px-5'}><a><span>Skincare</span></a></li>
                </ul>
                <ul className={'flex uppercase'}>
                    <li className={'px-2'}><a><span>About chanel</span></a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;