
import React from 'react';

const Link = ({route}) => {
          return (
                   <li className='px-3 lg:mr-3 text-lg'>
                    <a href={route.path}>{route.name}</a>
                   </li>
          );
};

export default Link;