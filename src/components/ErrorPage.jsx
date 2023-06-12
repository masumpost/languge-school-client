import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <img className="w-full mx-auto h-[600px]" src="error404.png" alt="" />

           <button className="btn btn-wide btn-primary my-8"><Link to='/'><div className="flex gap-2 items-center">
           <FaHome className="text-xl"></FaHome> <span>Go To Home</span>
            </div></Link></button>
        </div>
    );
};

export default ErrorPage;