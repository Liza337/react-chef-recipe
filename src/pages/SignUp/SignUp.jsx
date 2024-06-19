import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {


    const{ createUser} = useContext(AuthContext);
    const [accepted, setAccepted] =useState(false);

    // const[error, setError] = useState('');

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo= form.photo.value;
        const email = form.email.value;
        const password= form.password.value;
        const confirm =form.confirm.value;

        console.log(name,photo,email,password);

         createUser(email, password)
            .then(result =>{
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch(error =>{
                console.log(error);
            })

        // if(password !== confirm){
        //        setError('Your password did not match!')
        //        return
        // }
        // else if( password.length < 6){
        //     setError('Password must be 6 characters or longer')
        //     return
        // }
        // <p className=' text-error'>{error}</p>


    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <div className='w-[90%] mx-auto'>

            <div className="flex items-center justify-center min-h-screen bg-base-100">
                    <div className="card w-[500px] bg-base-100 shadow-xl my-8">
                        <div className="card-body">
                           <h2 className="text-xl text-center font-bold">Register Your Account</h2>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Enter Photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="confirm" placeholder="Confirm password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <label className="label cursor-pointer">
                                        <span className="label-text"> Accept <Link to="/terms" className="label-text-alt link link-hover text-sm text-blue-700">Terms and Conditions</Link></span> 
                                        <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-primary" />
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary font-bold" disabled={!accepted}>Register</button>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="label">
                                      <p className='text-sm'>Already have account?
                                            <Link to ={'/login'} className="label-text-alt link link-hover text-sm text-blue-700">Login</Link>
                                      
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

export default SignUp;