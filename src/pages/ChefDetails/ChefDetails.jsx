import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const data = useLoaderData();
    // console.log(data)
    const {id,name,experience,recipes,likes,picture,description,recipeDetails} =data


    // handle favorite button

    const [favorites, setFavorites] = useState({});

    const handleFavorite = (index) => {
        alert(`${recipeDetails[index].name} by ${name} is now your favorite!`);
        setFavorites({ ...favorites, [index]: true });
    };
    return (
        
        <div className='w-[90%] mx-auto'>

        {/* Banner section */}
            <div className="hero min-h-screen bg-base-100 shadow-lg mt-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <h1 className="text-lg py-3">{description}</h1>
                            <p className="text-lg py-3 font-bold">Years of Experience: {experience}</p>
                            <p className="text-lg py-3 font-bold">No of Recipes: {recipes}</p>
                            <p className="text-lg py-3">
                            <FontAwesomeIcon icon={faThumbsUp} /> {likes}
                            </p>
                        </div>
                </div>
            </div>


            {/* chefs recipes section */}

                <div className="mt-20 mb-8">
                    <h1 className="text-3xl font-bold text-center mb-10">Recipes by {name}</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mb-5'>

                        {recipeDetails && recipeDetails.map((recipe, index) => (
                            <div key={index} className="card card-side bg-base-100 shadow-xl">
                                <figure className="w-1/2 h-[320px]"><img className='h-full w-full' src={recipe.image} alt="Image"/></figure>
                                <div className="card-body">
                                    <h3 className="card-title text-2xl font-bold">{recipe.name}</h3>
                                    <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                                    <p><strong>Method:</strong> {recipe.method}</p>
                                    <p><strong>Rating:</strong> {recipe.rating}</p>

                                    <button
                                    disabled={favorites[index]}
                                    onClick={() => handleFavorite(index)}
                                    className="btn btn-primary font-bold"
                                >
                                    {favorites[index] ? "Favorited" : "Add to Favorite"}
                                </button>
                                </div>
                            </div>
                        ))}
                        {/**
                            
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
                            */}
                    </div>
                </div>

        </div>
             
    );
};

export default ChefDetails;