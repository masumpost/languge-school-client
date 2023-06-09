import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
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
                                <input type="text" placeholder="name" className="input input-bordered" />
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
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/})} 
                                placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600 my-2">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 my-2">Password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 my-2">Password must not be 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 my-2">Password must have one uppercase and one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <input type="file" {...register("file")} className="file-input file-input-ghost w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p><>Already Have An Account? <span><Link to='/login'>Login</Link></span></></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;