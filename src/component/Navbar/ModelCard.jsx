import React, { useState } from 'react';


const ModelCard = ({model,carts,setCarts}) => {
const [isBuy,setIsBuy] = useState(false)
// console.log(carts);
const handleSubsScription = () => {
setIsBuy(true);

setCarts([...carts, model]);
}
//  console.log(model);

          return (
                    <div className='border border-red-500 rounded-xl p-5 space-y-4 '>

<div className='flex justify-between items-center '>
          <img className='border border-gray-400 rounded-full p-2' src={model.image} alt="" />
          <h2 className='bg-red-200 p-1 rounded-3xl'>{model.tagType}</h2>
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
          <li key={index}>✅{feature}</li>
))
          }
</ul>


<div>
          
</div>
<button onClick={handleSubsScription} className='btn w-full rounded-3xl bg-linear-to-r from-cyan-500 to-blue-500 text-white'>{isBuy ? "Buy" : "Buy Now"}</button>
                              
                    </div>
          );
};

export default ModelCard;