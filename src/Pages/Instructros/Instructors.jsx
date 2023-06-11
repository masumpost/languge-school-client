import { useEffect, useState } from "react";
import TeachersCard from "../../components/TeachersCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/teachers')
            .then(res => setTeachers(res.data));
    }, [])
    return (
        <>
            <Helmet>
                <title>Instructors - L School</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-8">
                {
                    teachers.map(teacher => <TeachersCard
                        key={teacher._id}
                        teacher={teacher}
                    ></TeachersCard>)
                }
            </div>
        </>
    );
};

export default Instructors;