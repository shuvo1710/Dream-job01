import React from 'react'
import { Link } from 'react-router-dom'

const AllChoiceListing = ({job}) => {
    const {job_title, location, Experience, Degree, required_skill ,job_type, deadline} = job;
  return (
    <div>
        <article className="flex flex-col bg-[#F2F6FC]">
				<div className="flex flex-col flex-1 p-6">
					<Link rel="noopener noreferrer" href="#" className="tracking-wider uppercase hover:underline text-black font-bold"> <h1>{job_title}</h1> </Link>
					<h5 className="flex-1 py-2 text-lg font-semibold leading-snug">{location}</h5>
                    <h6>{Experience}</h6>
                    <h6>{Degree}</h6>
                    <h6 className="flex-1 py-2 text-lg font-semibold leading-snug">{required_skill}</h6>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
						<span>{job_type}</span>
						<span>{deadline}</span>
					</div>
				</div>
			</article>
    </div>
  )
}

export default AllChoiceListing
