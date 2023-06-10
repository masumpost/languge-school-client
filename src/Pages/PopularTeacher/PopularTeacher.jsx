import { useEffect, useState } from "react";
import TeachersCard from "../../components/TeachersCard";

const PopularTeacher = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    return (
        <div className=" bg-slate-300">
            <h2 className="text-3xl font-bold text-center py-8">Word Class Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    teachers.map(teacher => <TeachersCard
                        key={teacher.id}
                        teacher={teacher}
                    ></TeachersCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-primary my-5">See All Instructors</button>
            </div>
        </div>
    );
};

export default PopularTeacher;