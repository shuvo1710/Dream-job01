import React from 'react';
import shakib from "../../assets/shakib.jpg"

const What = () => {
    return (
        <div className='m-10'>
            <div className='my-8'>
                <h1 className='text-4xl text-[#2F2F2F]'>What others say about us</h1>
                <p className='text-sm text-[#C4C4C4]'>Not yet convinced to get started?  Here are what other job seekers say about us.</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-4'>
            <div className=" card-compact w-full bg-base-100 shadow-xl mb-5 pt-2 ">
  <figure><img className='w-[40px] rounded-full mx-5 mt-5 ' src={shakib} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">John Doe Marquina</h2>
    <p className='text-[#C4C4C466]'>Software advocate</p>
    <p className='text-[#999999]'>It was great to seek for a job with TheJobportal.
Everything was really great. They were the ones who helped me to get my current job as a software advocate at my company I don’t want to mention.</p>
    
  </div>
</div>
            <div className=" card-compact w-full bg-base-100 shadow-xl mb-5 pt-2 ">
  <figure><img className='w-[40px] rounded-full mx-5 mt-5 ' src={shakib} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">John Doe Marquina</h2>
    <p className='text-[#C4C4C466]'>Software advocate</p>
    <p className='text-[#999999]'>It was great to seek for a job with TheJobportal.
Everything was really great. They were the ones who helped me to get my current job as a software advocate at my company I don’t want to mention.</p>
    
  </div>
</div>
            <div className=" card-compact w-full bg-base-100 shadow-xl mb-5 pt-2 ">
  <figure><img className='w-[40px] rounded-full mx-5 mt-5 ' src={shakib} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">John Doe Marquina</h2>
    <p className='text-[#C4C4C466]'>Software advocate</p>
    <p className='text-[#999999]'>It was great to seek for a job with TheJobportal.
Everything was really great. They were the ones who helped me to get my current job as a software advocate at my company I don’t want to mention.</p>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default What;