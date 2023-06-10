import { useEffect, useState } from "react";
import ClassCard from "../../../../components/ClassCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (<>
        <h2 className="text-4xl text-blue text-center font-bold">Our Popular Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-300 my-8 p-4">

            {
                classes.map(item => <ClassCard
                    key={item.id}
                    item={item}
                ></ClassCard>)
            }
        </div>
    </>
    );
};

export default PopularClasses;