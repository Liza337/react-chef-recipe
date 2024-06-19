import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import { useLoaderData } from 'react-router-dom';
import SingleChef from '../../components/SingleChef';
import Recipes from '../Recipes/Recipes';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    const [chefs, setChefs] =useState(data)

    const [recipes, setRecipes] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Fetch recipe data
        fetch('/recipe.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);
    
    return (
        <div className='w-[90%] mx-auto'>
            
            <Banner/>

             {/* chefs section starts here*/}
            <div className='mt-20 mb-8'>
             <h1 className="text-4xl text-center py-5 font-bold">Our Cuisine Chefs</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mb-5'>
                {
                
                chefs.map((chef) => <SingleChef chef ={chef}/>)
                
                }
            </div>

            {/* Recipe category list section starts here*/}
            <div className='mt-20 mb-8'>
                <h1 className="text-4xl text-center py-4 font-bold">Recipe Categories</h1>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8'>
                   
                <div className='card bg-base-100 shadow-xl'>
                    <figure><img src="https://i.ibb.co/8YPC5mQ/snacks-and-apt.jpg" alt="fish" /></figure>
                    <div className='card-body'>
                        <p className='card-title text-sm'>Snacks & Appetizers</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <figure><img src="https://i.ibb.co/FV9kWdc/Vegeterian.png" alt="fish"/></figure>
                    <div className='card-body text-center'>
                        <h2 className='card-title text-sm'>Vegetarian</h2>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <figure><img src="https://i.ibb.co/NjKspwF/main-courses.jpg" alt="fish" /></figure>
                    <div className='card-body text-center'>
                        <h2 className='card-title text-sm'>Main course dishes</h2>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl'>
                    <figure><img src="https://i.ibb.co/mh17r8g/rasgulla-dessert.jpg" alt="fish" /></figure>
                    <div className='card-body'>
                        <h2 className='card-title text-sm'>Desserts</h2>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl'>
                    <figure><img src="https://i.ibb.co/KDStFjt/Drinks.jpg" alt="fish" /></figure>
                    <div className='card-body'>
                        <h2 className='card-title text-sm'>Beverages</h2>
                    </div>
                </div>
                
            </div>


              {/* Popular Recipes list section starts here*/}

            <div className='mt-20 mb-8'>
                <h1 className="text-4xl text-center py-4 font-bold">Our Featured Recipes</h1>
            </div>

             
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {showAll
                ? recipes.map((recipe, index) => <Recipes key={index} recipe={recipe} />)
                : recipes.slice(0, 4).map((recipe, index) => <Recipes key={index} recipe={recipe} />)}
        </div>
                
            <div className='text-center mb-10'>
                   {
                    !showAll &&<button onClick={() => setShowAll(true)} className='btn btn-md btn-primary my-5 font-bold'>
                       See More
                   </button>
                   }
            </div>
                

            


           
            
            
           


        </div>
    );
};

export default Home;