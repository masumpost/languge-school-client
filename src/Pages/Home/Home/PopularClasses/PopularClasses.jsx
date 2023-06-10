import { useEffect, useState } from "react";
import ClassCard from "../../../../components/ClassCard";
import { Link } from "react-router-dom";

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className=" bg-slate-300 mb-12">
            <h2 className="text-4xl text-blue text-center font-bold py-4">Our Popular Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-4">

                {
                    classes.map(item => <ClassCard
                        key={item.id}
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