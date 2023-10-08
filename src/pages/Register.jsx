import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email =  form.get('email');
        const password = form.get('password');

        console.log(email, password, name)
    } 

    return (
        
        <div >
            <h2 className="text-3xl my-10 text-center">Join Us!</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
   
    );
};

export default Register;