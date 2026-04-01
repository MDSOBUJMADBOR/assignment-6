import React from 'react';
import { faFacebook,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
          return (



     <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10 ">
<div className='max-w-6xl mx-auto'>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}

          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              
              <h2 className="text-3xl font-bold tracking-tighter text-white">
              DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

          
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                 Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                 Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                 Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            <div>
                    <ul className='flex gap-2 items-center'>
                              <li ><a className='h-12 w-12 rounded-full p-2 bg-white hover:bg-gray-400' href=""><FontAwesomeIcon icon={faFacebook} className='' /></a></li>
                              <li ><a className='h-12 w-12 rounded-full p-2 bg-white hover:bg-gray-400' href=""><FontAwesomeIcon icon={faGithub} className='' /></a></li>
                              <li ><a className='h-12 w-12 rounded-full p-2 bg-white hover:bg-gray-400' href=""><FontAwesomeIcon icon={faInstagram} className='' /></a></li>
                             
                    </ul>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>

          <div className="flex gap-6">
           
             
          <ul className='flex gap-4 items-center'>
                    <li> <a href="#" className="hover:text-red-400 transition">Privacy Policy</a></li>
                    <li> <a href="#" className="hover:text-red-400 transition">Terms of Service </a></li>
                    <li> <a href="#" className="hover:text-red-400 transition">  Cookies</a></li>
          </ul>
                   
           
           
          </div>
        </div>
      </div>
</div>

    </footer>


          );
};

export default Footer;