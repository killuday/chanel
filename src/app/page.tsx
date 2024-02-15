import Image from "next/image";
import {IoSearchOutline} from "react-icons/io5";
import {CiUser} from "react-icons/ci";
import {IoMdStarOutline} from "react-icons/io";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Contact />
            <Footer />
        </>
    );
}
