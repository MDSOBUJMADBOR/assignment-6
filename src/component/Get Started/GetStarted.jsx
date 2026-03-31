import React from 'react';
import Icon1 from '../../assets/user.png'
import Icon2 from '../../assets/package.png'
import Icon3 from '../../assets/rocket.png'

const GetStarted = () => {
          return (
                    <div className='bg-gray-100 py-15 space-y-5'>
                              
                              <div className='text-center space-y-2'>
                              <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                              <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                              </div> 


                         <div className='grid grid-cols-3 gap-5 max-w-6xl mx-auto'>
                                      
                                        <div className=' bg-white rounded-lg p-5 space-y-4'>
                                                  <p className='flex justify-end  '><span className='bg-[#6130f7] text-white p-1 rounded-full'>01</span></p>
                                                 
                                                  <div className='flex justify-center'>
                                                            <img className='text-center bg-[rgb(212,216,218)] rounded-full p-2' src={Icon1} alt="" />
                                                  </div>
                                                  <h2 className='flex justify-center text-xl font-semibold'>Create Account</h2>
                                                  <p className='text-center text-[#627382FF]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                                        
                                                 
                                        </div>
                                        <div className=' bg-white rounded-lg p-5 space-y-4'>
                                                  <p className='flex justify-end  '><span className='bg-[#6130f7] text-white p-1 rounded-full'>02</span></p>
                                                 
                                                  <div className='flex justify-center'>
                                                            <img className='text-center bg-[rgb(212,216,218)] rounded-full p-2' src={Icon2} alt="" />
                                                  </div>
                                                  <h2 className='flex justify-center text-xl font-semibold'>Choose Products</h2>
                                                  <p className='text-center text-[#627382FF]'>Browse our catalog and select the tools
                                                  <br /> that fit your needs.</p>
                                        
                                                 
                                        </div>
                                        <div className=' bg-white rounded-lg p-5 space-y-4'>
                                                  <p className='flex justify-end  '><span className='bg-[#6130f7] text-white p-1 rounded-full'>03</span></p>
                                                 
                                                  <div className='flex justify-center'>
                                                            <img className='text-center  bg-[rgb(212,216,218)] rounded-full p-2' src={Icon3} alt="" />
                                                  </div>
                                                  <h2 className='flex justify-center text-xl font-semibold'>Start Creating</h2>
                                                  <p className='text-center text-[#627382FF]'>Download and start using your premium  <br />
                                                       tools immediately.</p>
                                        
                                                 
                                        </div>
        
                            
                              
                                
                         </div>

                    </div>
          );
};

export default GetStarted;