import { Link } from "react-router-dom"
import {  useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect} from 'react'
import { useSelector  } from 'react-redux'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset } from '../features/auth/authSlice'
import Spinner from "react-spinkit"
import { createRestaurant } from '../features/menu/restaurantSlice'


export default function CreateNewRestaurant() {
    const [currentFood, setCurrentFood] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
    const [foods, setFoods] = useState([]);

    const [currentDrink, setCurrentDrink] = useState("");
    const [currentDrinkPrice, setCurrentDrinkPrice] = useState("");
    const [drinks, setDrinks] = useState([]);

    const [restaurantName, setRestaurantName] = useState("");
    const { isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.restaurants
    )
    
  const dispatch = useDispatch()
  const navigate = useNavigate()

const addFood = (e) => {
  e.preventDefault();
  const newFood = currentFood;
  const newPrice = currentPrice;
  console.log(newFood, newPrice);
  if (newFood !== "" && newPrice) {
    const newEntry = [
      ...foods,
      { Name: newFood, Price: newPrice},
    ];
    setFoods(newEntry);
    setCurrentFood("");
    setCurrentPrice("");
  }
};

const addDrink = (e) => {
  e.preventDefault();
  const newDrink = currentDrink;
  const newDrinkPrice = currentDrinkPrice;
  console.log(newDrink, newDrinkPrice);
  if (newDrink !== "" && newDrinkPrice) {
    const newEntry = [
      ...drinks,
      { Name: newDrink, Price: newDrinkPrice},
    ];
    setDrinks(newEntry);
    setCurrentDrink("");
    setCurrentDrinkPrice("");
  }
};

const handleRestaurantNameInput = (e) => {
  setRestaurantName(e.target.value);
};

const handlePriceInput = (e) => {
  setCurrentPrice(e.target.value);
};

const handleFoodInput = (e) => {
    setCurrentFood(e.target.value);

}

const handleDrinkPriceInput = (e) => {
  setCurrentDrinkPrice(e.target.value);
};



const handleDrinkInput = (e) => {
    setCurrentDrink(e.target.value);
}

const deleteFood = (key) => {
  console.log(key);
  const filteredFoods = foods.filter((food) => food.key !== key);
  setFoods(filteredFoods);
  console.log(foods)
};



const deleteDrink = (key) => {
  console.log(key);
  const filteredDrinks = drinks.filter((drink) => drink.key !== key);
  setDrinks(filteredDrinks);
  console.log(drinks)
};

const restaurantData = { restaurant: restaurantName, food: foods, drink: drinks}

const onSubmit = (e) => {
  e.preventDefault()
  dispatch(createRestaurant(restaurantData))
}


useEffect(() => {
  if (isError) {
    toast.error(message)
  }

  if (isSuccess) {
    dispatch(reset())
    navigate('/home')
  }

  dispatch(reset())
}, [dispatch, isError, isSuccess, navigate, message])

console.log(foods)
console.log(drinks)
console.log(restaurantName)
console.log(restaurantData)


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
                      <p className="block text-sm font-medium text-gray-700">
                       Restaurant Name
                      </p>
                      <div className="mt-1">
                        <input
                          id="restaurant"
                          name="restaurant"
                          type="text"
                          onChange={(e) =>  handleRestaurantNameInput(e)}
                          value={restaurantName}
                          autoComplete="restaurant"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                   
                    <div>
                      <p className="block text-sm font-medium text-gray-700">
                        Food
                      </p>
                      <div className="mt-1">
                        <input
                          id="currentFood"
                          name="currentFood"
                          type="text"
                          onChange={(e) => handleFoodInput(e)}
                          value={currentFood}
                          autoComplete="currentFood"
                          placeholder="Type Food Name"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mt-1">
                        <input
                          id="currentPrice"
                          name="currentPrice"
                          type="number"
                          onChange={(e) => handlePriceInput(e)}
                          value={currentPrice}
                          placeholder="Type Food Price"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <button className="p-2 border border-gray-300 rounded-md mt-1"
                      onClick={addFood}
                    >
                    Add
                    </button>
                     <div>
                       {foods ? (foods.map((item, index) => (
                         <ul key={index} className="flex items-center justify-between flex-row">
                         <li>{item.Name}</li>
                         <li>{item.Price} Naira</li>
                         <div onClick={() => deleteFood(item.key)}>
                         <DeleteIcon />
                         </div>
                         </ul>
                       ))) : null}
                     </div>
                    </div>
  
                    <div>
                      <p className="block text-sm font-medium text-gray-700">
                        Drink
                      </p>
                      <div className="mt-1">
                        <input
                          id="currentDrink"
                          name="currentDrink"
                          type="text"
                          onChange={(e) => handleDrinkInput(e)}
                          value={currentDrink}
                          autoComplete="currentDrink"
                          placeholder="Type in your Drink Name"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mt-1">
                        <input
                          id="currentDrinkPrice"
                          name="currentDrinkPrice"
                          type="number"
                          onChange={(e) => handleDrinkPriceInput(e)}
                          value={currentDrinkPrice}
                          autoComplete="currentDrinkPrice"
                          placeholder="Type in your Drink Price"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <button
                      onClick={addDrink}
                      className="p-2 border border-gray-300 rounded-md mt-1"
                    >
                    Add
                    </button>
                     <div >
                       {drinks ? (drinks.map((item, index) => (
                         <ul className="flex items-center justify-between flex-row"  key={index}>
                         <li>{item.Name}</li>
                         <li>{item.Price} Naira</li>
                         <div onClick={() => deleteDrink(item.key)}>
                         <DeleteIcon />
                         </div>
                         </ul>
                       ))) : null}
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