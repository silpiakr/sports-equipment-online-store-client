import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import { validatePassword } from 'firebase/auth';

const Register = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const googleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                //  console.log(result.user);
                alert('Sign up successfully');
                navigate('/');
            })
            .catch(error => {
                //  console.log('ERROR', error.message);

            })
    }

    const handelRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        const validatePassword = (password) => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])$/;
            if (!passwordRegex.test(password)) {
                setError('At least one uppercase, at one least one lowercase.');
                return;
            }
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user);
                alert('Register successfully');

                const newUser = {name, email};

                fetch('https://sports-equipment-online-store-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user create db', data);
                        if (data.insertedId) {
                            console.log()
                        }
                    })

                e.target.reset();

                updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        navigate('/');
                    })

                // send user data in server


            })
            .catch(error => {
                console.log(error.message, 'ERROR')
            })

        validatePassword();

        navigate('/')
    }

    return (
        <>
            <div className='md:max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
                {/* <Navbar></Navbar> */}
            </div>
            <div className="hero min-h-screen pt-8">
                <div className=" flex flex-col justify-center items-center card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Register Now!</h1>
                    </div>
                    <form onSubmit={handelRegister} className="card-body w-full">
                        <div className="form-control">
                            <button onClick={googleSignIn} className='btn text-base'>
                                <AiOutlineGoogle className='text-2xl text-green-600' />
                                Continue With Google
                            </button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input bg-base-200 rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input bg-base-200 rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input bg-base-200 rounded-none" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : "password"}
                                name='password'
                                placeholder="password"
                                className="input bg-base-200"
                                required />
                            <a onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-3 top-12'>
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </a>
                        </div>
                        {error && (
                            <div className='text-red-400 text-sm mb-4'>{error}</div>
                        )}
                        <div className="form-control mt-6">
                            <button to='/home' className="btn bg-teal-600 text-white">Register</button>
                        </div>
                    </form>
                    <p className='text-gray-600 font-semibold'>Already Have An Account? <Link className='text-teal-700' to='/login'>Login</Link></p>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Register;