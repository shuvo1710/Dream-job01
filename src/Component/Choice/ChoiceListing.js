import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AllChoiceListing from './AllChoiceListing';

const ChoiceListing = () => {

  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
      if (location?.search) {
          axios.get(`http://localhost:5000/category${location?.search}`)
              .then(res => {
                  if (res.data) {
                      setJobs(res.data)
                  }
              })
              .catch(error => {
                  console.log(error)
              });
      }
  }, [location, jobs]);




  return (
    <div>
      <section className="bg-white text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


    {
        jobs.map(job => <AllChoiceListing
        key={job._id}
        job={job}
        ></AllChoiceListing>)
     }
   
		</div>
	</div>
</section>
    </div>
  )
}

export default ChoiceListing