import React from 'react'
import { Link } from 'react-router-dom';
// import { TbDiscount2Off } from 'react-icons/tb'

const ChoiceInfos = ({jobName}) => {
    const { img,job_title,jobDesc  } = jobName;
  return (
        <Link to={`/choice-listing?job_title=${job_title}`}>
        <article className="flex flex-col bg-[#F2F6FC] hover:bg-[#011025] duration-300">
			  <div className="flex flex-col flex-1 p-6 group/text-card">
			  {/* <TbDiscount2Off className='choose__icon'></TbDiscount2Off> */}
              <img src={img} alt="" />
				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 group-hover/text-card:text-[#C8C000]">{job_title}</h3>
				<div className="flex flex-wrap justify-between space-x-2 text-xs text-gray-300">
				  <span>{jobDesc}
				  </span>
				</div>
			  </div>
			</article>
        </Link>
  )
}

export default ChoiceInfos