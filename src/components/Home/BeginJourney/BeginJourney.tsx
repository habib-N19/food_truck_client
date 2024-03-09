
import React from 'react'

const BeginJourney = () => {
  return (
    <div className='w-full h-[600px] flex gap-14 justify-between items-center border px-10'>
        <div className='w-[500px]  flex-shrink-0 h-[500px]'>
          <img className='w-[100%] object-cover h-[100%]' src='https://img.freepik.com/free-photo/close-up-hand-pointing-food_23-2148896956.jpg?w=740&t=st=1709142865~exp=1709143465~hmac=63ca411c445b40c4548977164f4cf70a316ea7a13166b06644126c9e9dc7341f' alt="" />
        </div>

        <div className=''>
      <h2 className='text-3xl flex-shrink-0 font-bold text-red-500'>Food Truck Partner -Empowering Food Truck Owners</h2>
      <p className='text-lg font-medium py-5'>If you're a food truck owner-operator, Truckster Vendor website is your ultimate companion! Truckster is dedicated to empowering food truck businesses, and our Vendor website  is designed to support your success. With the Vendor websites , you can:"</p>
      <ul className='list-disc mx-8 text-lg font-medium'>
        <li>Share Your Location to Attract More Customers</li>
        <li>Enable Online Ordering for Convenient Lunch Breaks</li>
        <li>Discover Catering Gigs to Grow Your Business</li>
        <li>Track Real-Time Analytics to Effectively Manage Your Small Business</li>
      </ul>

<button className='my-4 px-9 py-4 rounded-md text-white bg-red-500 font-medium'>Begin Your Food Truck Journey Now</button>

        </div>
    </div>
  )
}

export default BeginJourney