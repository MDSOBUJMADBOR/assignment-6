import React, { use } from 'react';
import ModelCard from './Navbar/ModelCard';

const Models = ({modelPromise,carts,setCarts}) => {

const models = use(modelPromise);
          

          return (
                    <div className='grid grid-cols-3 gap-5 max-w-6xl mx-auto'>
{
          models.map(model => <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard>)
          
}

                    </div>
          );
};

export default Models;