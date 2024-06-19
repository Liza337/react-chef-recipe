import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = ({recipe}) => {

    // const data=useLoaderData();
    // console.log(data);
    const {name,image,price,rating,chefName,description} =recipe


    // const [recipes, setRecipes] =useState(recipeData)
    // const[ShowAll,setShowALL]=useState(false)

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="h-[320px]"><img className='h-full w-full' src={image} alt="Image"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}
                    </h2>
                    <p>{description}</p>
                    <h2 className='text-md font-bold'>By {chefName}</h2>
                    <p className='text-md'>Price: {price} Tk</p>
                    <p className='text-md'>Rating: {rating}</p>
                </div>
        </div>

        // <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //         <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //             <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //             </div>
        //         </div>
        // </div>
    );
};

export default Recipes;