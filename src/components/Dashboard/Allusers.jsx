import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://language-school-server-eight.vercel.app/users')
        return res.json();
    });

    const handelMakeAdmin = id =>{
        fetch(`https://language-school-server-eight.vercel.app/users/admin/${id}`, {
            method: 'PATCH'
        })
        .then (res => res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `  admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>All User - L School</title>
            </Helmet>
            <h3 className="text-center font-semibold text-2xl my-4">All User is : {users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>

                            {
                                users.map((user, index) =><tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => handelMakeAdmin(user._id)}>{user.role === 'admin' ? 'admin' : <FaUserShield className="text-xl"></FaUserShield>}</button></td>
                                    <td>instructor</td>
                                </tr>)
                            }
                        {/* row 1 */}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;