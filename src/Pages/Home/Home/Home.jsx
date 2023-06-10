import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Breaking from "./Breaking";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - L School</title>
            </Helmet>
            <Breaking></Breaking>
            <Banner></Banner>
        </div>
    );
};

export default Home;