import React from 'react';

const Footer = () => {
    return (
        <div className='p-5 md:p-10 mt-0 bg-emerald-500'>
            <div className='mt-10  text-white rounded-xl flex flex-col'>
                <div className=' container grid grid-cols-3'>
                    <div className='p-10 ' >
                        <p className='text-3xl font-extrabold pb-2'>PAYRIPE</p>
                        <p>The product suite of Payripe provides
                            a complete payment solution for
                            businesses in India to accept,
                            process, and distribute payments. It
                            offers various payment modes,
                            including credit card, debit card, net
                            banking, UPI, and popular wallets
                            such as JioMoney, Mobikwik, Airtel
                            Money, FreeCharge, Ola Money, and
                            PayZapp.

                        </p>
                        <p>
                            In addition to facilitating payments,
                            Payripe enhances the banking
                            experience for businesses by
                            streamlining financial processes. It
                            provides access to fully-functional
                            current accounts, enables efficient
                            payouts.
                        </p>
                    </div>
                    <div className='flex flex-col p-10'>
                        <div className='p-2 w-[50%]'>
                            <p className='text-2xl font-bold'>Accept Payments</p>
                            <p>
                                Payment Gateway
                                Payment Pages
                                Payment Links
                                QR Codes
                                Smart Collect
                            </p>
                        </div>
                        <div className='p-2'>
                            <p className='text-2xl font-bold mt-3'>  Accept Payments</p>
                            <p>
                                Payin
                                Payout
                                Invoice Payment
                                ATM
                                White Label
                                Platform
                                Reseller Panel
                                Acquirer
                                Management</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-10'>
                        <div className='p-2 w-[50%]'>
                            <p className='text-2xl font-bold'>Accept Payments</p>
                            <p>
                                Payment Gateway
                                Payment Pages
                                Payment Links
                                QR Codes
                                Smart Collect
                            </p>
                        </div>
                        <div className='p-2'>
                            <p className='text-2xl font-bold mt-3'>  Accept Payments</p>
                            <p>
                                Payin
                                Payout
                                Invoice Payment
                                ATM
                                White Label
                                Platform
                                Reseller Panel
                                Acquirer
                                Management</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center p-10'>
                    <div className='font-extrabold text-lg mr-3'>
                        Subscribe Our Newslwtter
                    </div>
                    <div className="relative flex w-full max-w-[24rem] border-2 p-2 rounded-lg">
                        <input
                            className="pr-20 bg-transparent outline-none"
                            placeholder='Enter your Email...'
                        />
                        <button
                            className="absolute right-1 top-1 rounded"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
