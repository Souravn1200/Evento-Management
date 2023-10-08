import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate()

    const location = useLocation();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email =  form.get('email')
        const password =  form.get('password')

       logIn(email, password)
       .then(result => {
            navigate(location?.state ? location.state : '/')
       })
       .catch(err => console.log(err));

    }

    return (
        
        <div>
            
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className=" lg:w-1/2 mx-auto">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account?  <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;