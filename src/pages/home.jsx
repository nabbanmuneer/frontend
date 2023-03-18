import React from 'react';
import NavBar from '../component/navbar';
import Banner from '../component/banner';
import Footer from '../component/footer';
import icons from '../assets/6102f5167bcc7d000476ae3c.png'
const Home = () => {
    return (
        <div className='w-screen'>
            <NavBar />
            <Banner />
            <div className='md:p-10 p-5'>
                <div className='flex  justify-center items-center flex-col'>
                    <div className='text-xl text-emerald-500 font-bold'>Our Products</div>
                    <div className='md:text-lg text-emerald-500'>Welcome to our payment gateway website! We offer a range of products that make it easy andsecure for you to process payments online.</div>
                    <div className='text-emerald-500'>Here's a brief overview of our product offerings:</div>
                </div>
                <div className='grid lg:grid-cols-4   md:grid-cols-3 grid-cols-2 place-content-stretch container-fluid mt-8'>
                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>
                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>
                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>
                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>

                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>
                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>
                    <div className=' text-emerald-500 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-xl'>
                        <div className='font-bold'>Pay In</div>
                        <div className='mt-2 text-[10px] align-middle' >This feature allows you to easily transfer funds from your bank account or creditcard to your digital wallet for hasslefree payments.</div>
                    </div>
                </div>
            </div>
            <div className='md:p-10 p-5'>
                <div className='mt-5 border-2 rounded-xl border-emerald-500 w-full flex md:flex-row flex-col h-fit '>
                    <div className='lg:text-4xl text-3xl font-extrabold  text-emerald-500 md:p-10 p-5 md:w-[60%]'>
                        <p>Serving 10,000+</p>
                        <p>Companies globally</p>
                        <div className='text-xl md:text-2xl text-black mt-5'>
                            Major Indian brands rely on the Payripe
                            payment gateway for handling their online
                            payment collections, vendor payouts, and
                            financial operations. Join us today and
                            enjoy the convenience of efficiently
                            managing your payments and financial
                            operations.
                        </div>
                    </div>
                    <div className='md:w-[40%] container-fluid grid md:grid-cols-3 sm:grid-cols-5 grid-cols-3 '>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        <div className='w-32 p-0'><img src={icons} alt="icons" /></div>
                        
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;