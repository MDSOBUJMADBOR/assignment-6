import React from 'react';
import BanNerImage from '../../assets/banner.png'
import GradientImage from '../../assets/Group.png'
import PlayImage from '../../assets/Play.png'

const BanNer = () => {
          return (

                         
<div className="max-w-6xl mx-auto my-12">
      <div className="flex flex-wrap justify-center items-center gap-2">
              {/* Left Content */}
                                        <div className='space-y-4'>
                                                
                                        <div className="inline-flex items-center gap-2 bg-[#e1e7ff]  text-[#6130f7] text-sm        font-medium px-5 py-2 rounded-full">
                                        <img src={GradientImage} alt="" />
                                        New: AI-Powered Tools Available
                                        </div>

                                         <h1 className='text-5xl font-bold'>Supercharge Your  <br /> Digital Workflow </h1>

                                       

                                        <p className="text-lg text-[#627382] max-w-lg">
                                        Access premium AI toolsv, design assets, templates, and productivity software—all in one place. Start creating faster today.
                                        Explore Products
                                        </p>


                                        <div className="flex flex-wrap gap-4 pt-4">
                                                <button className="btn bg-linear-to-r from-[#2106f0] to-[#8706ea]  px-8 py-7 rounded-full font-semibold text-lg  flex items-center gap-3  text-white">
                                                    Explore Products
                                        
                                                </button>

                                                 <button className="btn border-2 border-purple-500 bg-transparent hover:bg-linear-to-r hover:from-purple-500 to-pink-500 transition duration-1200  px-8 py-7 rounded-full font-semibold   flex items-center gap-3  hover:text-white ">
                                                  <img src={PlayImage} alt="" />
                                                  Watch Demo
                                        
                                                    </button>
                                        </div>
                     
                                        </div>
        

          
           

                       {/* Right Image */}
                    <div className=" flex justify-center lg:justify-end">
                              <div >
                              <img src={BanNerImage} alt="" />
                              </div>
                    </div>
        
         </div>
</div>



                   
          );
};

export default BanNer;