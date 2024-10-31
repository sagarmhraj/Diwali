import React from 'react';
import laxmiGanesh from '../images/lakshmi-ganesha.png';
import littleGirl from '../images/little-girl.png';
import lakshmi from '../images/lakshmi.png';
import ganesh from '../images/ganesh.png';

function SecondPage() {
    return (
        <div>
            <section className="lakshmi-ganesha-section bg-[#f99501] py-5 px-1">

                <img className="lakshmi-ganesha-img max-w-[300px] sm:max-w-[800px] w-full mx-auto" src={laxmiGanesh} alt="lakshmi-ganesha" />
                <h2 className="font-salsa text-2xl sm:text-4xl mt-2 sm:mt-3 mb-3 sm:mb-5 font-normal text-center">Wishing You a Blessed and Prosperous Deepawali</h2>

                <div className="horizontal-divider flex items-center gap-[6px] sm:gap-[12px] max-w-[800px] mx-auto mb-4 sm:mb-[2rem] mt-3 sm:mt-5">
                    <div className="horizontal-line h-[1px] sm:h-[2px] bg-[#fbd8a4] w-[200px] sm:w-[468px]" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="horizontal-line h-[1px] sm:h-[2px] bg-[#fbd8a4] w-[200px] sm:w-[468px]" />
                </div>

                <div className=" flex  justify-center items-center mb-4 sm:mb-[2rem]">
                    <div className="max-w-full sm:max-w-[600px] max-h-full sm:max-h-[500px] bg-white p-10 rounded-[16px] sm:rounded-[24px] mb-4 sm:mb-0 sm:p-8 ml-5 sm:ml-6">
                        <p className="text-lg  font-salsa sm:text-[2rem]">People say, “Diwali is the festival of lights.”</p>
                        <p className="text-lg  font-salsa sm:text-[2rem]">With all its charms the glow of candles, the warmth of loved one the laughter shared, and moments that are cherished time and again.!</p>
                        <br />
                        <p className="text-2xl font-salsa font-extrabold  sm:text-[2rem]">Diwali ki Shubhkamnaye !! </p>
                    </div>
                    <img className=" max-w-[160px] sm:max-w-[260px] max-h-[400px] h-96 sm:max-h-[500px] ml-[-3rem] sm:ml-[-5rem]" src={littleGirl} alt="little-girl" />
                </div>

                <div className="horizontal-divider flex items-center gap-[6px] sm:gap-[12px] max-w-[800px] mx-auto mb-4 sm:mb-[2rem]">
                    <div className="horizontal-line h-[1px] sm:h-[2px] bg-[#fbd8a4] w-[200px] sm:w-[468px]" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="circle w-[5px] sm:w-[10px] h-[5px] sm:h-[10px] bg-[#fbd8a4] rounded-full" />
                    <div className="horizontal-line h-[1px] sm:h-[2px] bg-[#fbd8a4] w-[200px] sm:w-[468px]" />
                </div>

                <div className=" bg-white p-4 sm:p-[4rem] rounded-[16px] sm:rounded-[24px] max-w-[340px] sm:max-w-[772px] flex flex-row sm:flex-row sm:gap-5 mx-auto">
                    <img className="w-36 sm:w-1/2 mb-4 sm:mb-0 " src={lakshmi} alt="lakshmi" />
                    <img className="w-32 sm:w-1/2 mb-4 sm:mb-0 sm:ml-8 ml-8" src={ganesh} alt="ganesh" />
                </div>

                <div className="flex items-center flex-col max-w-[900px]  w-full mx-auto mt-4 sm:mt-5 font-salsa text-center">
                    <p className="text-lg sm:text-xl">Happy Diwali</p>
                    <h2 className="text-xl sm:text-[2rem] mt-3">Thank You For Everything...</h2>
                </div>

                <p className="my-name text-center text-[12px] sm:text-[14px] mt-2 sm:mt-4">Made with 💜 By <span className='font-salsa font-bold'>"Sagar Mishra"</span></p>
            </section>
        </div>
    )
}

export default SecondPage;
