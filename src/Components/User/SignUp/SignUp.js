import Lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

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

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        console.log(name, photoURL, email, pass)
        createUser(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                navigate('/');
            })
            .catch(e => console.error(e))

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className='container' ref={container}>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SIgn Up" />
                        </div>
                    </form>
                    <p className='text-center p-2'>Already have an account? <Link to='/login' className='text-orange-600 font-semibold'>Login</Link></p>
                    <div className='flex items-center justify-center my-5'>
                        <button className='' onClick={handleGoogleSignIn}><FcGoogle className='w-12 h-12 rounded' /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;