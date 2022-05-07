import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import restaurantService from './restaurantService'

const initialState = {
  restaurants: [],
  restaurant: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new restaurant
export const createRestaurant = createAsyncThunk(
  'restaurants/create',
  async (restaurantData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await restaurantService.createRestaurant(restaurantData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user restaurants
export const getRestaurants = createAsyncThunk(
  'restaurants/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await restaurantService.getRestaurants(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user restaurant
export const getRestaurant = createAsyncThunk(
  'restaurants/get',
  async (restaurantId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await restaurantService.getRestaurant(restaurantId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)



export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurant.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createRestaurant.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createRestaurant.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRestaurants.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.restaurants = action.payload
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRestaurant.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRestaurant.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.restaurant = action.payload
      })
      .addCase(getRestaurant.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = restaurantSlice.actions
export default restaurantSlice.reducer
