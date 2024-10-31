import React, { useEffect, useState } from 'react';
import jhalar from '../images/jhalar.png';
import deepak from '../images/deepak.png';
import gift from '../images/gift.png'
import ramji from '../images/aa gya.mp3'
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const navigate = useNavigate(); // Initialize useNavigate
    const [receiver, setReceiver] = useState('');
    const [sender, setSender] = useState('Sagar Mishra');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setReceiver(urlParams.get('receiver') || '');
        setSender(urlParams.get('sender') || 'Anurag');
    }, []);

    const handlePlay = () => {
        console.log('Audio started playing');
        // alert("sagar");
    };

    const handleNavigate = () => {
        navigate('/next');
    }

    const SecondNavigate = () => {
        navigate('/Creacker');
    }


    return (
        <div>
            <section className="hero-section bg-[#F99501] bg-cover bg-no-repeat min-h-screen">
                {/* Large Screen Layout */}
                <div className='hidden sm:flex justify-between'>
                    <img className="w-[220px] mb-[-180px]" src={jhalar} alt="jhalar" />
                    {/* <p className='  font-salsa items-center mt-16 font-extrabold text-[20px] flex '>Happy Diwali <img src={gift} className=' ml-3 h-12 w-12' /> </p> */}
                    <img className="w-[220px] mb-[-180px] flex flex-row-reverse" src={jhalar} alt="jhalar" />
                </div>

                {/* Small Screen Layout */}
                <div className='flex sm:hidden justify-center flex-wrap mb-[-20px]'>
                    <img className="w-[120px] sm:w-[180px] md:w-[200px] mb-[-80px]" src={jhalar} alt="jhalar" />
                    <img className="w-[120px] sm:w-[180px] md:w-[200px] mb-[-80px]" src={jhalar} alt="jhalar" />
                </div>

                <div className="ml-3 sm:ml-96 mt-50 sm:mt-20">
                    <p className="font-salsa text-3xl max-w-[550px] mt-36 sm:mt-20 font-normal">
                        Hi <span>{receiver}</span>,<br />
                        You mean the world to me... <br /> So this Diwali, <br /> I made something for you!
                    </p>
                    <div className="audio-container bg-[#fbd8a4] max-w-max rounded-[45px] flex items-center justify-center pl-5 mt-9 sm:mt-4 gap-2 h-11">
                        <img src="https://diwali-wishes.netlify.app/icons/music-icon.svg" alt="music-icon" />
                        <span className="hidden sm:block soulful-music">
                            &nbsp;&nbsp; Soulful Music &nbsp;
                        </span>
                        <img className="playing-music-icon" src='https://diwali-wishes.netlify.app/icons/playing-music-icon.svg' alt="playing-music-icon" />
                        <audio className='h-10' src={ramji} controls onPlay={handlePlay}></audio>
                        <style>
                            {`audio::-webkit-media-controls-play-button,
                              audio::-webkit-media-controls-panel {
                              background-color: #fbd8a4;
                              color: #000;}`}
                        </style>
                    </div>
                </div>


                {/* button responsive fuck */}


                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <img className="h-32 w-32 sm:h-40 sm:w-40" src={deepak} alt="deepak" />

                    <button className="relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-0 overflow-hidden text-lg font-medium text-white transition duration-300 bg-orange-500 rounded-lg group hover:bg-orange-600 focus:outline-none h-10" onClick={handleNavigate}>
                        <span className="absolute inset-0 w-full h-full transition-transform duration-300 bg-orange-400 transform scale-x-0 group-hover:scale-x-100" />
                        <span className="relative z-10">Get blessings</span>
                    </button>

                    <button className="relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-0 overflow-hidden text-lg font-medium text-white transition duration-300 bg-orange-500 rounded-lg group hover:bg-orange-600 focus:outline-none h-10" onClick={SecondNavigate}>
                        <span className="absolute inset-0 w-full h-full transition-transform duration-300 bg-orange-400 transform scale-x-0 group-hover:scale-x-100" />
                        <span className="relative z-10">Let's Play Cracker</span>
                    </button>


                    <img className="h-32 w-32 sm:h-40 sm:w-40" src={deepak} alt="deepak" />
                </div>

                <p className="my-name text-center text-[14px] mt-4 sm:mt-0">
                    Made with 💜 By <span className='font-salsa font-bold'>"Sagar Mishra"</span>
                </p>
                <div className="horizontal-divider flex items-center gap-[6px] sm:gap-[12px] max-w-[800px] mx-auto mb-2 sm:mb-4 mt-12 sm:hidden">
                    <div className="horizontal-line h-[1px] sm:h-[2px] bg-[#fbd8a4] w-[200px] sm:w-[468px]" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="horizontal-line h-[1px] sm:h-[2px] bg-[#fbd8a4] w-[200px] sm:w-[468px]" />
                </div>
            </section>
        </div>
    );
}
