import { useEffect, useState } from "react";
import ClassCard from "../../../../components/ClassCard";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axios.get('https://language-school-server-eight.vercel.app/classes')
            .then(res =>setClasses(res.data))
    }, [])
    return (
        <div className=" bg-slate-300 mb-12">
            <h2 className="text-4xl text-blue text-center font-bold py-4">Our Popular Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-4">

                {
                    classes.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-primary mb-4"><Link to='/classes'>Show All Classes</Link></button>
            </div>
        </div>
    );
};

export default PopularClasses;