import React from 'react';
import BanNerImage from '../../assets/banner.png'
import GradientImage from '../../assets/Group.png'
import PlayImage from '../../assets/Play.png'

const BanNer = () => {
          return (

                         
<div className="max-w-6xl mx-auto flex items-center my-10">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
              {/* Left Content */}
             <div className="space-y-6">
                                        <div className="inline-flex items-center gap-2 bg-[#e1e7ff]  text-[#6130f7] text-sm        font-medium px-5 py-2 rounded-full">
                                        <img src={GradientImage} alt="" />
                                        New: AI-Powered Tools Available
                                        </div>

                                         <h1 className='text-5xl font-bold'>Supercharge Your  <br /> Digital Workflow </h1>

                                        {/* <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-red-600">
                                        One Subscription.
                                        <br />
                                        <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                                        All the AIs You Need
                                        </span>
                                                  </h1> */}

                                        <p className="text-lg text-[#627382] max-w-lg">
                                        Access premium AI toolsv, design assets, templates, and productivity software—all in one place. Start creating faster today.
                                        Explore Products
                                        </p>


                                        <div className="flex flex-wrap gap-4 pt-4">
                                        <button className=" bg-linear-65 from-purple-500 to-[#a06bce]  px-8 py-4 rounded-full font-semibold text-lg  flex items-center gap-3  text-white">
                                        Explore Products
                                        
                                        </button>

                    <button className="border border-black text-[#6130f7]  px-7 rounded-full font-semibold   flex items-center gap-3  hover:bg-linear-65 from-purple-500 to-[#a06bce] hover:text-white ">
                              <img src={PlayImage} alt="" />
                                     Watch Demo
                                        
                                        </button>
                                        </div>
                   
        

          
            </div>

                       {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                              <div className="relative">
                              <img src={BanNerImage} alt="" />
                              </div>
                    </div>
        
         </div>
</div>



                   
          );
};

export default BanNer;