import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center rounded p-10">
                <div className=' flex flex-col md:flex-row gap-12'>
                    <aside>
                        <div className='flex items-center justify-center gap-2'>
                            <img className='w-20' src="https://i.ibb.co.com/rwHGzSg/logo.png" alt="logo" />
                            <h3 className='text-2xl font-bold'>Sports BD</h3>
                        </div>
                        <p className='mt-2'>
                            <span className='font-semibold'>Hotline</span> +8809617223344,
                            <span className='font-semibold'> Email:</span>  support@sportsbd.com
                            <br />
                            <span className='font-semibold text-center'>10:00 am - 7:00 pm (everyday)</span>
                        </p>
                    </aside>

                </div>
                <nav className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com' target='blank'>
                        <FaFacebook className='text-2xl text-blue-600' />
                    </a>
                    <a href='https://www.twitter.com' target='blank'>
                        <FaTwitter className='text-2xl text-blue-500' />
                    </a>
                    <a href='https://www.youtube.com' target='blank'>
                        <FaYoutube className='text-2xl text-red-600' />
                    </a>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sports BD</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;