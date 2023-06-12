import { FaBars, FaBookmark, FaHome, FaRegAddressBook } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"> <FaBars></FaBars></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="text-xl font-semibold"><Link to='/'><FaHome></FaHome> Go to home</Link></li>
                        <li className="text-xl font-semibold"><Link to='/dashboard/enrolledClass'><FaRegAddressBook></FaRegAddressBook> Enrolled Class</Link></li>
                        <li className="text-xl font-semibold"><Link><FaBookmark></FaBookmark> Selected Class</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;