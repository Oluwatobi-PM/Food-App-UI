import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from "react-spinkit"

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
 const { name, email, password, password2 } = formData
 
 const dispatch = useDispatch()
 const navigate = useNavigate()
 
 const { user, isLoading, isError, isSuccess, message } = useSelector(
  (state) => state.auth
)


useEffect(() => {
  if (isError) {
    toast.error(message)
  }

  // Redirect when logged in
  if (isSuccess || user) {
    navigate('/home')
  }

  dispatch(reset())
}, [isError, isSuccess, user, message, navigate, dispatch])


 const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
  console.log(e.target.value)
}

const onSubmit = (e) => {
  e.preventDefault()

  if (password !== password2) {
    toast.error('Passwords do not match')
  } else {
    const userData = {
      name,
      email,
      password,
    }
    dispatch(register(userData))
  }
}
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
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create a new account</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{' '}
                  <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    start your 14-day free trial
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
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={onChange}
                          value={name}
                          autoComplete="name"
                          required
                          placeholder="Type in your username"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                   
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={onChange}
                          value={email}
                          autoComplete="email"
                          placeholder="Type in your email address"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onChange={onChange}
                          value={password}
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                       Confirm Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password2"
                          name="password2"
                          type="password"
                          onChange={onChange}
                          value={password2}
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>
  
                      <div className="text-sm">
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign in
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
              src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
          </div>
        </div>
      </>
    )
  }