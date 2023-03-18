import React from 'react';
import banner from "../assets/3d-mobile-online-shopping-concept.png"

const Banner = () => {
    return (
        <div className='w-screen md:p-10 p-3'>
            <div className='border-2 p-5  md:p-10 flex flex-row-2 bg-gradient-to-r from-yellow-300 to-emerald-500 rounded-xl h-[300px] md:h-[300px] lg:h-[400px] w-full '>
                <div className='w-[75%]  text-white flex flex-col'>
                    <div className='lg:text-3xl md:text-2xl text-xs  font-extrabold'>Effortless Payouts: Fast And</div>
                    <div className='lg:text-3xl md:text-2xl text-xs  font-extrabold'>Fast And Secure Payments With Our</div>
                    <div className='lg:text-3xl md:text-2xl text-xs  font-extrabold'>Payout System</div>
                    <div className=' md:mt-[50px] mt-[10px]  text-xs flex flex-col justify-center'>
                        <p className='' >Payripe Offers Our Valued Customers A New </p>
                        <p>And Convenient Way To Add Funds to Their </p>
                        <p>Account With Our Pay In' Feature</p>
                    </div>
                    <div className='mt-3'>
                        <button className='border-2 p-1 rounded-lg text-sm' > Sign Up Now</button>
                    </div>
                </div>
                <div className='flex justify-end items-center w-[50%] md:w-[25%] '>
                    <div className='lg:w-[350px] md:w-[275px] w-[200px]  '>
                        <img  src={banner} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
