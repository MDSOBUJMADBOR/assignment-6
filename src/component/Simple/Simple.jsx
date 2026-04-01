import React from 'react';

const Simple = () => {
          return (

<div className='my-20'>


<div className='text-center space-y-3 mb-7'>
          <h2 className='text-2xl font-bold '>Simple, Transparent Pricing</h2>
          <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
</div>



<div className='relative max-w-6xl mx-auto'>

<span className="hidden md:block left-130 top-2 font-bold bg-amber-100 text-xs border-none   p-2 absolute z-5 rounded-full">Most Popular</span>

<br />

     <div className='my-0 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-5 md:px-0 '>


<div className="card  bg-[#f9fafc] shadow-sm">
  <div className="card-body">
    
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Starter</h2>
      <p>Perfect for getting started</p>
    </div>
    <div className='flex  items-center'>
          <h2 className='text-2xl font-bold'>$0</h2>
          <p>/Month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      <br /><br />
            
    </ul>
    <div className="mt-6">
      <button className="btn text-white bg-linear-to-r from-[#2106f0] to-[#8706ea] btn-block rounded-full">Get Started Free</button>
    </div>
  </div>
</div>



<div className="card   shadow-sm bg-linear-to-r from-[#2106f0] to-[#8706ea] text-white">
  <div className="card-body">
    
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Pro</h2>
    <p>Best for professionals</p>
    </div>
    <div className='flex items-center'>
          <h2 className='text-2xl font-bold'>$29</h2>
          <p>/Month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block bg-white text-[#6130f7] rounded-full">Start Pro Trial</button>
    </div>
  </div>
</div>


<div className="card  bg-[#f9fafc] shadow-sm">
  <div className="card-body">
    
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Enterprise</h2>
      <p>For teams and businesses</p>
    </div>
    <div className='flex  items-center'>
          <h2 className='text-2xl font-bold'>$99</h2>
          <p>/Month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
            
    </ul>
    <div className="mt-6">
      <button className="btn text-white bg-linear-to-r from-[#2106f0] to-[#8706ea] btn-block rounded-full">Contact Sales</button>
    </div>
  </div>
</div>


                    </div>


</div>
</div>



 
               
          );
};

export default Simple;