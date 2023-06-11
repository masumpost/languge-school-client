import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Breaking from "./Breaking";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularTeacher from "../../PopularTeacher/PopularTeacher";
import { FaAdjust } from "react-icons/fa";
import { useState } from "react";

const Home = () => {

    const [dark, setDark] = useState(false);
   

    return (
        <div className={dark? "bg-slate-600 text-white" : "bg-white text-black"}>
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
    );
};

export default Home;