import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {signIn} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            
            reset();
        })
    };

    return (
        <>
        <Helmet>
            <title>Login - L School</title>
        </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                           <small className="text-center font-bold text-3xl">Please Login</small>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email")}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password")}/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p>New in language School? <span><Link to='/register'>Register</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;