import Lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login');
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        login(email, pass)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('https://animator-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("animator-user-token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(e => console.error(e))
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('https://animator-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("animator-user-token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(e => console.error(e))
    }
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Assets/register.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <div className='container' ref={container}>

                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center p-2'>Don't have an account? <Link to='/signup' className='text-orange-600 font-semibold'>Sign Up</Link></p>
                    <div className='flex items-center justify-center my-5'>
                        <button className='text-center' onClick={handleGoogleSignIn}><FcGoogle className='w-12 h-12 rounded' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;