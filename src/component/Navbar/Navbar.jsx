import { ShoppingCart } from 'lucide-react';
import React from 'react';


const Navbar = ({carts}) => {
          return (
      <div className=" border-b border-gray-200 ">
          <div className='navbar max-w-6xl mx-auto'>
 <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-4xl text-[#6130f7]">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>

        </ul>
      </div>
      <div className="navbar-end gap-5">

     <div className=''>
       <p className='bg-red-600 text-center rounded-full text-white'>{carts.length}</p>
       <ShoppingCart />
     </div>
          <p>Login</p>
        <a className="btn bg-[#6130f7]  rounded-full text-white">Get Started</a>
      </div>
          </div>

     


    </div>              

          );
};

export default Navbar;