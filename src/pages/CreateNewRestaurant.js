import { Link } from "react-router-dom"
import {  useState } from 'react'
// import {useEffect} from 'react'
// import { useSelector  } from 'react-redux'
// import {useDispatch} from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { reset } from '../features/auth/authSlice'
// import Spinner from "react-spinkit"
// import { createRestaurant } from '../features/menu/restaurantSlice'
// import { Field, FieldArray, FieldProps, Form, Formik, getIn } from "formik";
// import * as yup from "yup";




  

export default function CreateNewRestaurant() {
    // const [meals, setMeals] = useState([]);
    //     const [currentMeal, setCurrentMeal] = useState("");
    //     const [currentPrice, setCurrentPrice] = useState(null);
      
  const [formData, setFormData] = useState({
    restaurant: '',
    food: '',
    drink: '',
    drink2: '',
  })
 const { restaurant, food, drink, drink2 } = formData

 
//  const { user } = useSelector(
//   (state) => state.auth
// )


 const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.restaurant]: e.target.value,
  }))
  console.log(e.target.value)
}

const onSubmit = (e) => {
  e.preventDefault()

}


    return (
      <>
 
        <div className="min-h-full flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create a new Restaurant</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{' '}
                  <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Go back to Homepage
                  </Link>
                </p>
              </div>
  
              <div className="mt-8">
                <div>
    
  
                  <div className="mt-6 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                  </div>
                </div>
  
                <div className="mt-6">
                  <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                      <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700">
                       Restaurant Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="restaurant"
                          restaurant="restaurant"
                          type="text"
                          onChange={onChange}
                          value={restaurant}
                          autoComplete="restaurant"
                          required
                        //   placeholder="Type in your userrestaurant"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                   
                    <div>
                      <label htmlFor="food" className="block text-sm font-medium text-gray-700">
                        Food
                      </label>
                      <div className="mt-1">
                        <input
                          id="food"
                          restaurant="food"
                          type="text"
                          onChange={onChange}
                          value={food}
                          autoComplete="food"
                        //   placeholder="Type in your food address"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="drink" className="block text-sm font-medium text-gray-700">
                        Drinks
                      </label>
                      <div className="mt-1">
                        <input
                          id="drink"
                          restaurant="drink"
                          type="drink"
                          onChange={onChange}
                          value={drink}
                          autoComplete="current-drink"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="drink" className="block text-sm font-medium text-gray-700">
                       Done yet?
                      </label>
                      <div className="mt-1  hidden">
                        <input
                          id="drink2"
                          restaurant="drink2"
                          type="drink"
                          onChange={onChange}
                          value={drink2}
                          autoComplete="current-drink"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          restaurant="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900 hidden">
                          Remember me
                        </label>
                      </div>
  
                      <div className="text-sm hidden">
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Forgot your drink?
                        </Link>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Restaurant
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-0 flex-1">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </>
    )
  }