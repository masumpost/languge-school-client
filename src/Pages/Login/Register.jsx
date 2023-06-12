import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SocialLogin from "../Shared/socialLogin/SocialLogin";
const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [cVisible, setCVisible] = useState(false);
    // const [password , setPassword] = useState('');
    // const [cPassword, setCPassword] = useState('');

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email}
                            fetch('https://language-school-server-eight.vercel.app/users', {

                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate('/')
                                    }
                                })


                    })
                    .catch(error => console.log(error))

            })
            .catch(error => { console.log(error) })

    };

    return (
        <div>
            <Helmet>
                <title>Register - L School</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h4 className="text-center font-bold text-3xl">Please Register</h4>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" {...register("name")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 my-2">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    // onChange={(e) => setPassword(e.target.value)}
                                    type={visible ? 'text' : 'password'}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                                    })}
                                    placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <p className="text-red-600 my-2">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 my-2">Password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 my-2">Password must not be 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 my-2">Password must have one uppercase and one special character</p>}
                                <div onClick={() => setVisible(!visible)} className="pt-12 absolute right-10">
                                    {visible ? <FaRegEye></FaRegEye> : <FaRegEyeSlash> </FaRegEyeSlash>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    // onChange={(e) => setCPassword(e.target.value)}
                                    type={cVisible ? "text" : "password"}
                                    placeholder="password" className="input input-bordered" />
                                <div>
                                    {/* {password != cPassword ? <p className="text-red-600 my-2">Password did not match</p> : ''} */}
                                </div>
                                <div onClick={() => setCVisible(!cVisible)} className="pt-12 absolute right-10">
                                    {visible ? <FaRegEye></FaRegEye> : <FaRegEyeSlash> </FaRegEyeSlash>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("photoURL")} />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p><>Already Have An Account? <span><Link to='/login'>Login</Link></span></></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;