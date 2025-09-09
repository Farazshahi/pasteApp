import React from 'react'
import { Button } from './button'
const Hero=()=> {
    function handleButtonClick(arg0: string): void {
        throw new Error('Function not implemented.')
    }

  return (
    <>
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-16 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Build Your Website Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A beautiful, responsive, and modern web presence is just a few clicks away. Get started now and bring your ideas to life.
            </p>
            <Button onClick={() => handleButtonClick('Get Started clicked!')}>
              Get Started
            </Button>
          </div>
        </div>
      
    </>
  )
}
export default  Hero