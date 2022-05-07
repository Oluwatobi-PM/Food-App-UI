import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

// Create new restaurant
const createRestaurant = async (restaurantData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + 'addrestaurant', restaurantData, config)

  return response.data
}

// Get user restaurants
const getRestaurants = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'menulist', config)

  return response.data
}

// Get user restaurant
const getRestaurant = async (restaurantId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + "" + restaurantId, config)

  return response.data
}

const restaurantService = {
  createRestaurant,
  getRestaurants,
  getRestaurant
}

export default restaurantService
