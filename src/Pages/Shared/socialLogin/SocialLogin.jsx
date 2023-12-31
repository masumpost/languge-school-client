import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handelGoogleLoggedIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://language-school-server-eight.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }


    return (
        <div>
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handelGoogleLoggedIn} className="btn w-full btn-primary">
                    <FaGoogle className="text-xl"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;