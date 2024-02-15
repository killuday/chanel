import React from 'react';
import { BiSearch} from "react-icons/bi";
import {MdOutlineMyLocation} from "react-icons/md";

Contact.propTypes = {};

function Contact() {
    return (
        <div className='container px-24 mx-auto py-14'>
            <div className='flex-row flex '>
                <div className={'px-10'}>
                    <h4 className={'font-bold'}>

                        Contact an Advisor
                    </h4>
                    <p className={'text-[#767676] text-sm'}>
                        CHANEL advisors are at your disposal for any information. You can contact us by email
                    </p>
                </div>
                <div className={'px-10'}>
                    <h4 className={'font-bold'}>

                        Find a store
                    </h4>
                    <p className={'text-[#767676] text-sm'}>
                        Enter a location to find the closest CHANEL stores
                    </p>
                    <div className={'flex flex-row  items-center mt-10'}>

                        <input type={'text'}
                               className={'border-b-[1px] text-sm text-[#767676] border-gray-300 focus:outline-none pb-1 hover:border-b-2 hover:border-gray-700 w-full'}
                               placeholder={'Town or Postcode'}/>
                        <div className={'border-r-[1px] border-gray-300 px-3'}>
                            <BiSearch size={19}/>
                        </div>
                        <div className={'px-3'}>

                            <MdOutlineMyLocation size={20}/>

                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default Contact;