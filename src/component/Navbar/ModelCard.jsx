import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ModelCard = ({model,carts,setCarts}) => {
const [isBuy,setIsBuy] = useState(false)
// console.log(carts);
const handleSubsScription = () => {
setIsBuy(true);

const isFound = carts.find((item) => item.id === model.id);

if(isFound) {
  toast.error("This item is already in your card")
  return;
}

setCarts([...carts, model]);
  
toast.success("Added to Your Card Successfully");
}
//  console.log(model);
const tagColors = {
    New: "bg-green-100 text-[#04f759]",
    "Best Seller": "bg-yellow-100 text-[#f9c804]",
    "Popular": "bg-blue-100 text-[#620cf7]",
  };

          return (
                    <div className='border border-gray-300 rounded-xl p-5 space-y-4 transition duration-500 hover:scale-105 hover:border-gray-500'>

<div className='flex justify-between items-center '>
          <img className='border border-gray-400 rounded-full p-2' src={model.image} alt="" />
          <h2 className={`p-1 px-2 rounded-3xl ${tagColors[model.tagType]}`}>{model.tagType}</h2>
</div>
<h1 className='text-2xl font-semibold'>{model.name}</h1>
<p className='text-gray-400'>{model.description}</p>
<div className='flex items-center'>
          <h3 className='text-xl font-semibold '>${model.price}</h3>
          <p>/{model.period}</p>
</div>
<ul>
          {
model.features.map((feature,index) => (
          <li key={index}> <span className='text-green-500'>✓</span> {feature}</li>
))
          }
</ul>


<div>
          
</div>
<button onClick={handleSubsScription} className={`btn text-base w-full rounded-3xl  text-white ${isBuy ? "bg-emerald-500  " : "bg-linear-to-r from-[#2106f0] to-[#8706ea]"}`}>{isBuy ? " ✓ Added to Card" : "Buy Now"}</button>
                              
                    </div>
          );
};

export default ModelCard;