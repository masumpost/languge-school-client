import { useQuery } from "@tanstack/react-query";

const Allusers = () => {

    const {data: users =[], refetch} = useQuery(['users'], async ()=> {
        const res = await fetch('https://language-school-server-eight.vercel.app/users')
        return res.json();
    })

    return (
        <div>
            {users.length}
        </div>
    );
};

export default Allusers;