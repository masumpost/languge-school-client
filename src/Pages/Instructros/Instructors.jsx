import { useEffect, useState } from "react";
import TeachersCard from "../../components/TeachersCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    return (
        <>
            <Helmet>
                <title>Instructors - L School</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-8">
                {
                    teachers.map(teacher => <TeachersCard
                        key={teacher.id}
                        teacher={teacher}
                    ></TeachersCard>)
                }
            </div>
        </>
    );
};

export default Instructors;