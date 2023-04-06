import React from 'react';
// import {TbDiscount2Off} from 'react-icons/tb';
import "./Choice.css";
import { useQuery } from '@tanstack/react-query';
import ChoiceInfos from './ChoiceInfos';
import Loading from '../Loading/Loading';

const Choice = () => {

	const { data: jobNames, isLoading = [] } = useQuery({
		queryKey: ["hotelPlace"],
		queryFn: async () => {
		  const res = await fetch("http://localhost:5000/jobTitle");
		  const data = await res.json();
		  return data;
		},
	  });

	  if (isLoading) {
		return <Loading></Loading>;
	  }

    return (
		<section className="py-6 sm:py-12 text-gray-200 ">
		<div className="container p-6 mx-auto space-y-8">
		  <div className="space-y-2">
			<h2 className="text-3xl font-bold mt-20 text-black">The choice is yours</h2>
			<p className="font-serif text-sm text-gray-400">Why not choose us</p>
		  </div>
		  <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Web development</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Product designer</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Financial accountant</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]' >Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Civil engineer</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Electrician</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">

			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Web development</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>

			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Product designer</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
			<article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  <TbDiscount2Off className='choose__icon'></TbDiscount2Off>
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">Electrician</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span className='text-[#999999]'>Would you say no to somebody who want
				  to help you land a job? That’s impossible.
				  </span>
				</div>
			  </div>
			</article>
		  </div>
		</div>
		</section> 
    );
};

export default Choice;