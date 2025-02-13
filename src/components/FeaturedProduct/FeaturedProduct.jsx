import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import shoppingBag from '../../assets/Shopping-animation.json'
import Lottie from 'lottie-react';

const FeaturedProduct = () => {
    return (
        <div className='my-12'>
            <h2 className='text-center py-6 font-bold text-3xl md:text-4xl'>Our Latest Products</h2>
            <div className='flex items-center bg-red-50'>
                <div className='w-1/3 mx-auto'>
                    <Lottie animationData={shoppingBag}></Lottie>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-2/3"
                >
                    <SwiperSlide>
                        <div className='flex flex-col bg-red-50 items-center justify-center h-[400px] gap-4'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-2xl'>Boxing Gloves</h2>
                                <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Our Latest Products</h2>
                                <Link to='/equipments'>
                                    <button className='btn bg-green-300'>Buy Now</button>
                                </Link>
                            </div>
                            <div className='w-full md:w-1/3 mx-auto flex items-center justify-center'>
                                <img className='w-32 mx-auto p-3' src="https://i.ibb.co.com/d4Qy0b8/boxing-2.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col bg-red-50 items-center justify-center h-[400px] gap-4'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-2xl'>Golf Club Set</h2>
                                <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Our Latest Products</h2>
                                <Link to='/equipments'>
                                    <button className='btn bg-green-300'>Buy Now</button>
                                </Link>
                            </div>
                            <div className='w-full mx-auto flex items-center justify-center'>
                                <img className='w-32 mx-auto p-3' src="https://i.ibb.co.com/ykdRsKW/Golf-Clubs-3-removebg-preview.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col bg-red-50 items-center justify-center h-[400px] gap-4'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-2xl'>Skateboard</h2>
                                <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Our Latest Products</h2>
                                <Link to='/equipments'>
                                    <button className='btn bg-green-300'>Buy Now</button>
                                </Link>
                            </div>
                            <div className='w-full md:w-1/3 mx-auto flex items-center justify-center'>
                                <img className='w-32 mx-auto p-3' src="https://i.ibb.co.com/gmD8FXf/Skateboard-removebg-preview.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedProduct;