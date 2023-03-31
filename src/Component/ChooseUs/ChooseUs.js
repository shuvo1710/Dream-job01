import React from 'react';
import {RiCommunityFill} from 'react-icons/ri';
import {TbDiscount2Off} from 'react-icons/tb';
import {FaHandsHelping} from 'react-icons/fa';
import './ChooseUs.css';

const ChooseUs = () => {
  return (
    <section className="py-6 sm:py-12 text-gray-200 choose__background">
<div className="container p-6 mx-auto space-y-8">
  <div className="space-y-2 text-center">
    <h2 className="text-3xl font-bold text-white mt-20">Why choose us</h2>
    <p className="font-serif text-sm text-gray-300">Why not choose us</p>
  </div>
  <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
    <article className="flex flex-col bg-gray-900 card__background">
      
      <div className="flex flex-col flex-1 p-6">
      <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">No discount on salaries</h3>
        <div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
          <span>Would you say no to somebody who want
          to help you land a job? That’s impossible.
          </span>
        </div>
      </div>
    </article>
    <article className="flex flex-col bg-gray-900 card__background">
      <div className="flex flex-col flex-1 p-6">
        <FaHandsHelping className='choose__icon'></FaHandsHelping>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">We’re here to help</h3>
        <div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
          <span>Would you say no to somebody who want
          to help you land a job? That’s impossible.
          </span>
        </div>
      </div>
    </article>
    <article className="flex flex-col bg-gray-900 card__background">
      <div className="flex flex-col flex-1 p-6">
        <RiCommunityFill className='choose__icon'></RiCommunityFill>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">We’re a large community</h3>
        <div className="flex flex-wrap justify-between  space-x-2 text-xs text-gray-300">
          <span>Would you say no to somebody who want
          to help you land a job? That’s impossible.
          </span>
        </div>
      </div>
    </article>
    <article className="flex flex-col bg-gray-900 card__background">
      <div className="flex flex-col flex-1 p-6">
          <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">We’re a large community</h3>
        <div className="flex flex-wrap justify-between  space-x-2 text-xs text-gray-300">
          <span>Would you say no to somebody who want
          to help you land a job? That’s impossible.
          </span>
        </div>
      </div>
    </article>
  </div>
</div>
<div className="space-y-2 text-center">
    <h2 className="font-serif text-sm text-gray-300">Convinced ?</h2>
    <button type="button" className="px-8 py-3 font-semibold rounded-full started__btn">Get started</button>
  </div>
</section> 

  )
}

export default ChooseUs