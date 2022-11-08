import Lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

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

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        createUser(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(e => console.error(e))

    }
    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then()
    //         .catch(e => console.error(e))
    // }
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
                </div>
                {/* <button onClick={handleGoogleSignIn}>Sign Up With Google</button> */}
            </div>
        </div>
    );
};

export default SignUp;