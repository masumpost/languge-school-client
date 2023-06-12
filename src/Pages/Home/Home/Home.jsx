import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Breaking from "./Breaking";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularTeacher from "../../PopularTeacher/PopularTeacher";
import { FaAdjust } from "react-icons/fa";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Home = () => {

    const [dark, setDark] = useState(false);
    const { scrollYProgress } = useScroll();


    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top:0,
                    right:0,
                    left:0,
                    height:10,
                    background:"blue",
                    transformOrigin:"0%"
                }}
            />
            <div className={dark ? "bg-slate-600 text-white" : "bg-white text-black"}>
                <div className="cursor-pointer">
                    <FaAdjust onClick={() => setDark(!dark)} className="text-3xl"></FaAdjust>
                </div>
                <Helmet>
                    <title>Home - L School</title>
                </Helmet>
                <Breaking></Breaking>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularTeacher></PopularTeacher>
            </div>
        </>
    );
};

export default Home;