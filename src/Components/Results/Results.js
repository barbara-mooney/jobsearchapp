import React from 'react';
import './Results.css';

const Results = ({ title, location, jobresults }) => {
  console.log(jobresults, 'from searchform')
  return (
    <div>
      <p>
        Search results for <strong>{title}</strong> positions in <strong>{location}</strong>.
      </p>
      <div className='container'>
        { jobresults.map((job) => 
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>{job.title}</h4>
              <h5>{job.company.display_name}</h5>
              <h5>{job.location.display_name}</h5>
              <p className='card-text'>{job.description}</p>
              <a href={job.redirect_url} target='_blank' rel='noopener noreferrer'>View job</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 

export default Results;