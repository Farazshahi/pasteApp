"use client"
import React from 'react';

// Define a type for a single feature object for better type safety
type Feature = {
  id: number;
  title: string;
  description: string;
  svgPath: string;
  svgColor: string;
};

// Define an array of feature objects with their types
const features: Feature[] = [
  {
    id: 1,
    title: "Responsive Design",
    description: "Your site will look great on any device, from a phone to a desktop.",
    svgPath: "M9.75 17L10.5 19.5M10.5 19.5L13.5 19.5M13.5 19.5L14.25 17M12 21a9 9 0 100-18 9 9 0 000 18z",
    svgColor: "text-indigo-500"
  },
  {
    id: 2,
    title: "High Performance",
    description: "Fast loading times ensure a seamless user experience for your visitors.",
    svgPath: "M13 10V3L4 14h7v7l9-11h-7z",
    svgColor: "text-green-500"
  },
  {
    id: 3,
    title: "Modern Aesthetics",
    description: "Designed with a clean and modern look to captivate your audience.",
    svgPath: "M12 11c0 3.866-3 7-3 7s3.134 3 7 3c3.866 0 7-3 7-7s-3.134-7-7-7c-3.866 0-7 3-7 7z",
    svgColor: "text-yellow-500"
  }
];

const  Home=()=> {
  return (

    <>
      <div className="bg-gray-100 text-gray-800 font-sans">

      {/* Header Component */}
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

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section Component */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-16 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Build Your Website Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A beautiful, responsive, and modern web presence is just a few clicks away. Get started now and bring your ideas to life.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white shadow hover:bg-indigo-700/90 h-9 px-4 py-2">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section Component - now uses .map() */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-3xl shadow-lg p-6 text-center transform transition-transform hover:scale-105">
                <svg className={`w-16 h-16 ${feature.svgColor} mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.svgPath}></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MySite. All rights reserved.</p>
        </div>
      </footer>
    </div>



   
    </>
    
  );
}
export default Home;
