import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <>
            <Helmet>
                <title>Classes - L School</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-4">
                {
                    classes.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </>
    );
};

export default Classes;