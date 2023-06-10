import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Breaking from "./Breaking";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - L School</title>
            </Helmet>
            <Breaking></Breaking>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;