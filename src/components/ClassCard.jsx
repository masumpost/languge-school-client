import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ClassCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const handelSelect = () =>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login first!',
                footer: '<a href="">Go to Login</a>'
              })
        }
    } 


    const {image, name, instructor, available_seats, price} = item;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-72 h-48" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <h2 className="card-title">Instructor: {instructor}</h2>
                    <p>Available sets: {available_seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handelSelect} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;