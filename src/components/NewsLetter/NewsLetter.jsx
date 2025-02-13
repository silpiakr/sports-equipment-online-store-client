import React from 'react';

const NewsLetter = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: "url()",
            }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content flex flex-col md:flex-row items-end justify-normal text-left gap-0 py-12">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold">SUBSCRIBE <br />
                        FOR NEWSLETTER.</h1>
                    <p className="mb-5 w-2/3">
                        Sign up for our newsletter and stay up-to-date with the latest collection, the latest trends and the best deals!
                    </p>
                </div>
                <div className='flex items-center'>
                    <div>
                        <input
                            type="text"
                            placeholder="Your email address..."
                            className="input rounded-none input-bordered w-full max-w-xs text-black focus-visible:outline-none"
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className='btn bg-green-300 border-none rounded-none' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;