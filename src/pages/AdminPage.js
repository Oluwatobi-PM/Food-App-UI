import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function AdminPage() {
    const {user} = useSelector((state) => state.auth)
    return (
        <div className="bg-gray-100">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between sm:flex sm:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Admin Dashboard</h2>
              { user.user.role === 'Admin'  ? (<div className="ml-10 space-x-4">
                       <Link to="/createrestaurant"
                    
                    className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                  >
                    Create a Restaurant
                  </Link>
                
                     </div>) : null }
            </div>
    
        
    
            <div className="mt-8 text-sm md:hidden">
        
            </div>
          </div>
        </div>
      )
}

export default AdminPage