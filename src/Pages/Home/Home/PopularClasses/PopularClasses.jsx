import ClassCard from "../../../../components/ClassCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
    

    const { data: classes = []} = useQuery(['users'], async () => {
        const res = await fetch('https://language-school-server-eight.vercel.app/classes')
        return res.json();
    });

    return (
        <div className=" bg-slate-300 mb-12">
            <h2 className="text-4xl text-blue text-center font-bold py-4">Our Popular Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-4">

                {
                    classes.slice(0, 6).map(item => <ClassCard
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