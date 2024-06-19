import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
 
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const location =useLocation();
    console.log("login page location",location);
    const from = location.state?.from?.pathname || '/'
    // const[error, setError] = useState('');
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;

        console.log(email,password);

         signIn(email, password)
            .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace: true});
                
                
            })
            .catch(error =>{
                console.log(error);
                
            })


    }

    return (
        <div className='w-[90%] mx-auto'>

            <div className="flex items-center justify-center min-h-screen bg-base-100">
                    <div className="card w-[500px] bg-base-100 shadow-xl">
                        <div className="card-body">
                           <h2 className="text-xl text-center font-bold">Login Your Account</h2>
                            <form onSubmit={handleSignIn}>
                                    <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary font-bold">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                    <p className='text-center'>Or</p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline font-bold">
                                       <i className="fab fa-google mr-2"></i>
                                        Continue with Google
                                    </button>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline font-bold">
                                      <i className="fab fa-github mr-2"></i>
                                       Continue with Github
                                    </button>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="label">
                                      <p className='text-sm'>New to Bengal Flavors?
                                            <Link to ={'/signup'} className="label-text-alt link link-hover text-sm text-blue-700">Register Now</Link>
                                      
                                      </p>
                                    </label>
                                </div>

                            
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;