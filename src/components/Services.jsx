import React from 'react'

const Services = () => {
  return (
    <div className=' text-center'>
      <h2 className="text-black text-3xl md:text-4xl bubblegum-sans-regular font-semibold ">What YOU Want.!</h2>

      <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-white">

        <div className="bg-[linear-gradient(135deg,_#0091ff,_#00c96b)] rounded-xl p-6 md:p-12 w-full md:w-1/2 flex justify-center">
          <img src="./pc1.webp" alt="App Mockup" className="max-w-full h-auto" />
        </div>

        
        <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Commerce Multi Vendor APP & Website
          </h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            Build your own quick commerce app just like <strong>Blinkit</strong> & <strong>Zepto</strong>! Our app is a powerful tool to build your own quick-commerce platform.
          </p>
          <ul className="text-left text-gray-700 space-y-2 mb-6 text-sm md:text-base">
            <li>✔️ Android and iOS app for Customer</li>
            <li>✔️ Android and iOS app for Seller/Delivery boy</li>
            <li>✔️ Master Admin</li>
            <li>✔️ Website</li>
          </ul>
          <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            BOOK FREE CONSULTATION
          </a>
        </div>
      </div>

    </div>
  )
}

export default Services