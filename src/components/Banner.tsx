import React from 'react';
import Image from "next/image";

const data = [{
    id: 1,
    heading: "haute couture",
    desc: " spring-summer 2024 show",
    image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1706103945422-homepagecorpoonedesktopnoparallaxe5jpg.jpg"

},
    {
        id: 2,
        heading: "fashion",
        desc: " SPRING-SUMMER 2024 PRE-COLLECTION",
        image: "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/FSH-1705422725587-1920x1080.jpg"

    },

    {
        id: 3,
        heading: "fine jewellery",
        desc: " coco crush",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1702311840315-jenniedjpg.jpg"

    },
    {
        id: 4,
        heading: "eyewear",
        desc: " charming hearts",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1704967143733-hpcorpodesktop2880x16202jpg.jpg"

    },
    {
        id: 5,
        heading: "fragrance",
        desc: " VALENTINE’S DAY",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1706074097660-onehpcorpofragranceduoslidingherodesktop2880x1260px21jpg.jpg"

    },
    {
        id: 6,
        heading: "watches",
        desc: "PREMIÈRE ÉDITION ORIGINALE",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1691487115737-onehpcorpodslidinghero2880x1260px21jpg_1260x2880.jpg"

    },
    {
        id: 7,
        heading: "high jewellery",
        desc: "TWEED DE CHANEL COLLECTION",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1691050806675-hpcorpoone2880x1260v21jpg_1260x2880.jpg"

    },
    {
        id: 8,
        heading: "makeup",
        desc: "VALENTINE’S DAY",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1706074813166-onehpcorpomakeupslidingherodesktop2880x1260px1jpg.jpg"

    },
    {
        id: 9,
        heading: "skincare",
        desc: "VALENTINE’S DAY",
        image: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1706075621619-onehpcorposkincarewwslidingherodesktop2880x1260px1jpg.jpg"

    },
]

function Banner() {
    return (
        <>
            <div className={'mt-4'}>

                {data.map((item, index) => (<div key={item.id} className={' h-[72vh] relative'}>
                    <Image className={'w-full h-full object-cover'} height={300} width={1500}
                           src={item.image}
                           alt={'img'}/>

                    <div className={'absolute top-3/4 left-2/4 -translate-x-1/2 -translate-y-1/2'}>
                        <div className={'text-center txt-sd'}>
                            <h5 className={'text-white uppercase'}>{item.heading}</h5>
                            <h3 className={'text-white uppercase font-bold text-3xl mb-3'}>
                                {item.desc}
                            </h3>
                            <button className={'bg-white px-8 py-4 text-xs uppercase'}>see more</button>
                        </div>
                    </div>


                </div>))}
            </div>
        </>

    );
}

export default Banner;