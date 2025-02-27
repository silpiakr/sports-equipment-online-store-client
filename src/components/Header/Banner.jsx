import React from 'react';
import {  Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
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
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-8 bg-base-200 items-center justify-between w-full h-[400px] pl-20 py-4'>
                <div className='flex flex-col justify-center items-center w-full md:w-2/3'>
                    <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-4xl'>Boxing Gloves</h2>
                    <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Up To 70% Discount</h2>
                    <Link to='/equipments'>
                        <button className='btn bg-green-300'>GET OFFER</button>
                    </Link>
                </div>
                <div className='w-full md:w-1/3 flex items-center justify-end pl-10 pb-2'>
                    <img className='w-40 mx-auto p-3' src="https://i.ibb.co.com/d4Qy0b8/boxing-2.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-8 bg-orange-100 items-center justify-between w-full h-[400px] pl-20 py-4'>
                <div className='flex flex-col justify-center items-center w-full md:w-2/3'>
                    <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-4xl'>Soccer-Ball</h2>
                    <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Up To 70% Discount</h2>
                    <Link to='/equipments'>
                        <button className='btn bg-green-300'>GET OFFER</button>
                    </Link>
                </div>
                <div className='w-full md:w-1/3 flex items-center justify-end pl-10'>
                    <img className='w-40 mx-auto p-3' src="https://i.ibb.co.com/FsdhQ39/Soccer-Ball-2.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-8 bg-pink-100 items-center justify-between w-full h-[400px] pl-20 py-4'>
                <div className='flex flex-col justify-center items-center w-full md:w-2/3'>
                    <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-4xl'>Golf Club Set</h2>
                    <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Up To 70% Discount</h2>
                    <Link to='/equipments'>
                        <button className='btn bg-green-300'>GET OFFER</button>
                    </Link>
                </div>
                <div className='w-full mx-auto md:w-1/3 flex items-center justify-end pl-10'>
                    <img className='w-32 mx-auto p-2' src="https://i.ibb.co.com/ykdRsKW/Golf-Clubs-3-removebg-preview.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-green-100 items-center justify-between w-full h-[400px] pl-20 py-4'>
                <div className='flex flex-col justify-center items-center w-full mx-auto md:w-2/3 py-3'>
                    <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-4xl'>Cricket-Bat</h2>
                    <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Up To 70% Discount</h2>
                    <Link to='/equipments'>
                        <button className='btn bg-green-300'>GET OFFER</button>
                    </Link>
                </div>
                <div className='w-full mx-auto md:w-1/3 flex items-center justify-end pl-10 pb-4'>
                    <img className='w-40 mx-auto p-3' src="https://i.ibb.co.com/vBfhdyT/Cricket-Bat-removebg-preview.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-8 bg-red-50 items-center justify-between w-full h-[400px] pl-20 py-4'>
                <div className='flex flex-col justify-center items-center w-full md:w-2/3'>
                    <h2 className='text-gray-600 text-center py-3 font-bold text-2xl md:text-4xl'>Skateboard</h2>
                    <h2 className='text-red-400 text-center py-3 font-bold text-2xl md:text-4xl'>Up To 70% Discount</h2>
                    <Link to='/equipments'>
                        <button className='btn bg-green-300'>GET OFFER</button>
                    </Link>
                </div>
                <div className='w-full md:w-1/3 flex items-center justify-end pl-10 pb-4'>
                    <img className='w-32 mx-auto p-3' src="https://i.ibb.co.com/gmD8FXf/Skateboard-removebg-preview.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;