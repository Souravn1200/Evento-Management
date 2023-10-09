import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import swal from 'sweetalert';
import eventLogo from '../../assets/svg-edited.svg'
import avatar from '../../assets/avatar.svg'


const Navbar = () => {

    const {user , logOut } = useContext(AuthContext)


    const handleSingOut = () => [
        logOut()
        .then( () => {
            swal("Sucesfully Loged Out!", "Hope we see you again!", "success");
        })
        .catch
    ]

    const navLinks = <>
    <li className='mr-1'><NavLink to="/">Home</NavLink></li>
    <li className='mr-1'> <NavLink to="/login">Login</NavLink></li>
    <li className='mr-1'><NavLink to="/Register">Register</NavLink></li>
    <li className='mr-1'><NavLink to="/qanda">Q & A Section</NavLink></li>
    <li className='mr-1'><NavLink to="/about">About us</NavLink></li>


</>

    return (
        <div className="navbar mt-1 bg-[#EEE9DA]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    
                    </label>
                    <img src={eventLogo} className='h-[120px] bg-[#93BFCF]' alt="" />

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                

                    
                   <div className='flex gap-2'>
                   <label className="btn btn-ghost btn-circle avatar">
                   <div className='w-10 rounded-full'>
                    
                    { user?.photoURL ? (<img className='rounded-full' src={user.photoURL} />)  : <></>}
                    </div>
      
                    </label>

                    <div className='text-sm mt-2 mr-2'>
                    {user?.displayName} <br />
                    {user?.email}
                    </div>
                   </div>
                

            {
                user ? <> <br />
                        <button onClick={handleSingOut} className="btn text-white bg-[#6096B4] hover:bg-[#3d657a]">LogOut</button>
                </> :

                <Link to='/login'>
                <button className="btn  text-white font-thin bg-[#6096B4] hover:bg-[#3d657a]">Login</button>
                </Link>

            }

               
            </div>
        </div>
    );
};

export default Navbar;