import React from 'react'

const Header=()=> {
  return (
    <>
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900">
            MySite
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Header
