import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const SingleChef = ({chef}) => {
    const{id,name,experience,recipes,likes,picture} =chef
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2 h-[320px]"><img className='h-full w-full' src={picture} alt="Image"/></figure>
            <div className="card-body">
                <h2 className="card-title">Chef {name}
                </h2>
                <p>Years of Experience: {experience}</p>
                <p>No of Recipes: {recipes}</p>
                <p>
                  <FontAwesomeIcon icon={faThumbsUp} /> {likes}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/chef/${id}`} className="btn btn-primary">View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;