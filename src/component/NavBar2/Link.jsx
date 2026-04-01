
import React from 'react';

const Link = ({route}) => {
          return (
                   <li className='px-3 lg:mr-3 text-lg rounded-md m-1 hover:bg-amber-600 hover:text-white md:hover:text-black md:hover:bg-transparent'>
                    <a href={route.path}>{route.name}</a>
                   </li>
          );
};

export default Link;