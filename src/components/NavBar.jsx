import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {

    const {user,logOut} =useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
            .then (result => {})
            .catch( error =>{
                console.log(error);
            })
    }
    // console.log(user)
    
    return (
        <div className="navbar bg-violet-200 ">
            <div className="flex-1">
                <a className="text-rose-700 text-3xl font-bold font-serif">Bengal Flavors</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                     <Link to={'/'} className="font-bold">Home</Link>
                     </li>
                    <li>
                    <Link to={'/blog'} className="font-bold">Blog</Link>
                    </li>
                    <li>
                    <Link to={'/about'} className="font-bold">About</Link>
                    </li>
                   
                    {user && <li>
                        
                        <span className="font-bold">Welcome {user.displayName} <img src={user.photoURL} alt="img" className='w-1/2' />
                        </span>

                    </li>
                    }
                    { user ?
                        <li>
                                <button onClick={handleLogOut}  className='btn btn-primary font-bold'>
                                    Log Out
                                </button>
                            </li>:
                        <li>
                        <Link to='/login' className="btn btn-primary font-bold">
                            Login
                        </Link>
                    </li>
                    }
                        
                </ul>
            </div>
        </div>
    );
};

export default NavBar;