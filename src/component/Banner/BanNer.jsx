import React from 'react';
import BanNerImage from '../../assets/banner.png'
import GradientImage from '../../assets/Group.png'
import PlayImage from '../../assets/Play.png'
import { ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';


const ExploreProducts = () => {
toast("Explore Products")
}

const WatchDemo = () => {
toast("Watch Demo!")
}



const BanNer = () => {
          return (

                         
<div className="max-w-6xl mx-auto my-22">
      <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center gap-10">
              {/* Left Content */}
                                        <div className='space-y-4 text-center md:text-left'>
                                                
                                        <div className="inline-flex items-center gap-2 bg-[#e1e7ff]  text-[#6130f7] text-sm        font-medium px-5 py-2 rounded-full">
                                        <img src={GradientImage} alt="" />
                                        New: AI-Powered Tools Available
                                        </div>

<div className='space-y-2'>
                                             <h2 className='text-5xl font-bold'>Supercharge Your  <br />   </h2>
                                             <h2 className='text-5xl font-bold'><span className='bg-linear-to-r from-[#4f39f3] to-[#8a52b5] bg-clip-text text-transparent'>Digital Workflow</span></h2>

</div>
                                       

                                        <p className="text-lg text-[#627382] max-w-lg">
                                        Access premium AI toolsv, design assets, templates, and productivity software—all in one place. Start creating faster today.
                                        Explore Products
                                        </p>


                                        <div className="flex flex-wrap justify-center md:justify-start  gap-4 pt-4 ">
                                                <button onClick={ExploreProducts} className="btn bg-linear-to-r from-[#2106f0] to-[#8706ea]  px-8 py-7 rounded-full font-semibold text-lg  flex items-center gap-3  text-white">
                                                    Explore Products
                                                   <ArrowRight />
                                        
                                                </button>

                                                 <button onClick={WatchDemo} className="btn border-2 border-purple-500 bg-transparent hover:bg-linear-to-r hover:from-purple-500 to-[#8706ea] transition duration-1200  px-8 py-7 rounded-full font-semibold   flex items-center gap-3  hover:text-white ">
                                                  <img src={PlayImage} alt="" />
                                                  Watch Demo
                                        
                                                    </button>
                                        </div>
                     
                                        </div>
        

          
           

                       {/* Right Image */}
                    <div className="px-4 md:px-0">
                              
                              <img src={BanNerImage} alt="" className='shadow-xl' />
                              
                    </div>
        
         </div>
</div>



                   
          );
};

export default BanNer;