import React from 'react'

const Features=()=> {
    const features = [
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

  return (
    <>
    <div className="mb-12">
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
        </div>
      
    </>
  )
}

export default Features
