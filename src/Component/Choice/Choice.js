import React from 'react';
// import {TbDiscount2Off} from 'react-icons/tb';
import "./Choice.css";
import { useQuery } from '@tanstack/react-query';
import ChoiceInfos from './ChoiceInfos';
import Loading from '../Loading/Loading';
import { TbDiscount2Off } from 'react-icons/tb';

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

				{
                jobNames.map(jobName => <ChoiceInfos
                    key={jobName._id}
                    jobName={jobName}
                ></ChoiceInfos>)
                }
					
				</div>
			</div>
		</section>
	);
};

export default Choice;