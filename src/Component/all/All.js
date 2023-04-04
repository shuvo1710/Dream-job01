import React from 'react';
import Rectangle6 from "../../assets/Rectangle 6.png";
import Rectangle7 from "../../assets/Rectangle 7.png";
import Rectangle8 from "../../assets/Rectangle 8.png";
import Rectangle9 from "../../assets/Rectangle 9.png";


const All = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-8 p-4 bg-[#F5F5F5] '>
            <div className='grid grid-cols-2 gap-1  w-[212px] h-[195px] ml-16 my-2'>
                <img src={Rectangle6} alt=""/>
                <img src={Rectangle7} alt=""/>
                <img src={Rectangle8} alt=""/>
                <img src={Rectangle9} alt=""/>

            </div>
            <div className='my-4 w-50%'>
                <h1 className='text-2xl text-[#000000] mb-4 ml-4 '>All careers gigs, one portal</h1>
                <p className='text-[16px] leading-[19px] font-[400] text-[#011025] '>Whatever you are, a software developer, a user interface designer or <br /> someone else, we got you. We have all types of jobs ready for you.</p>
                <button className='bg-cyan-600 text-[#FFFFFF] text-[16px] leading-[19px] font-[400] p-4 my-4'>Show me all available jobs</button>
            </div>
        </div>
    );
};

export default All;