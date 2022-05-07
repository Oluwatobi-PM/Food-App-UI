import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from 'react-spinkit'
import { getRestaurants, reset } from '../features/menu/restaurantSlice'

function Home() {
  const {restaurants, isLoading, isSuccess} = useSelector(
    (state) => state.restaurants
  )
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  console.log(restaurants)

 
  if (isLoading) {
    return (
    <div className="grid place-items-center h-full w-full">
    <Spinner 
    name="ball-spin-fade-loader"
    color="blue"
    fadeIn="none"
    className="flex flex-col pt-32 text-center items-center justify-center  h-screen"
    />
    </div>
    )
  }



  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between sm:flex sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Trending restaurants</h2>
          { user.user.role === 'Admin'  ? (<div className="ml-10 space-x-4">
                   <Link to="/createrestaurant"
                
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Add Restaurant
              </Link>
            
                 </div>) : null }
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 ">
          {restaurants.map((restaurant) => (
            <div key={restaurant._id} className="group relative">
              <h3 className="mt-4 text-gray-700 text-2xl">
                {/* <a href={restaurants.href}> */}
                  <span className="absolute inset-0 grid grid-cols-3" />
                  {restaurant.restaurant}
                {/* </a> */}
              </h3>
              <ul className="mt-1 text-sm text-gray-500">{restaurant.drink.map((item) => (
                <li key={item._id}>{item.Name} <span className="ml-4">{item.Price}</span></li>
              ))}</ul>

              <ul className="mt-1 text-sm text-gray-500">{restaurant.food.map((item) => (
                <li  key={item._id}>{item.Name} <span>{item.Price}</span></li>
              ))}</ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
    
        </div>
      </div>
    </div>
  )
}

export default Home