import React from 'react'

export default function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-12 px-4 grid lg:grid-cols-2 gap-4'>
        {/*left side*/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg?auto=compress&cs=tinysrgb&w=800' alt=''/>
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
        </div>

        {/*right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero molestiae temporibus accusamus adipisci porro laborum ea tempore. Delectus, quae?</p>
            <p className='pd-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem soluta iure tenetur sit hic fugit dicta molestias provident laboriosam.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More!</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>

    </div>
  )
}
