import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('https://language-school-server-eight.vercel.app/classes')
            .then(res => setClasses(res.data))
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