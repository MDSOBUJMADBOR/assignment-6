

import { Menu, ShoppingCart, X } from 'lucide-react';
import Link from './Link';
import React, { useState } from 'react';


const navLinks = [
  { id: 1, name: "Products",     path: "/" },
  { id: 2, name: "Features",    path: "/" },
  { id: 3, name: "Pricing", path: "/" },
  { id: 4, name: "Testimonials",  path: "/" },
  { id: 5, name: "FAQ",  path: "/" },
];

const Navbar = ({carts}) => {
const [open,setOpen] = useState(false)

const links =navLinks.map(route => <Link key={route.id} route={route}></Link>)
 



          return (
          
         <div className='border-b border-gray-200 sticky top-0 bg-white z-50 shadow-xl/3 py-3.5'>

 <nav className='max-w-6xl mx-auto flex justify-between mt-3 '>
         <span className='flex' onClick={() => setOpen(!open)}>
          {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
           <ul className={`md:hidden absolute text-black duration-1000 ${open ? "left-3 top-15" : "-left-40 top-15"} bg-amber-200 `}>
                {
          links
                }    
           </ul>
          <h3 className='ml-4 font-bold text-3xl md:flex hidden bg-linear-to-r from-[#2106f0] to-[#8706ea] bg-clip-text text-transparent'>DigiTools</h3>
         </span>
<ul className='md:flex hidden items-center gap-2 justify-between'>
{
          links
}
</ul>



                    {/* <ul className='flex'>
                    {
                    navLinks.map(route =>  <li className='mr-10'>                          <a href={route.path}>{route.name} </a>
                              </li>)
                              }
                    </ul> */}

                       {/* <ul className='flex '>
                              <li className='mr-10'><a href="">Home </a></li>
                              <li className='mr-10'><a href="">About </a></li>
                              <li className='mr-10'><a href="">Blog</a></li>
                       </ul>        */}


<div className='flex gap-6 justify-center items-center '>
<div className='relative'>
  {carts.length > 0 && (
    <p className='absolute -top-2 -right-2 bg-red-600 text-center rounded-full text-white w-5 h-5 text-sm flex items-center justify-center'>
      {carts.length}
    </p>
  )}
  <ShoppingCart />
</div>

<button>Login</button>
<a className="btn bg-linear-to-r from-indigo-500 to-purple-500   rounded-full text-white">Get Started</a>

</div>
                    </nav>


         </div>
          );
};

export default Navbar;
