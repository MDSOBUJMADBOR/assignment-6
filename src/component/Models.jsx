import React, { use } from 'react';
import ModelCard from './Cart/ModelCard';

const Models = ({modelPromise,carts,setCarts}) => {

const models = use(modelPromise);
          

          return (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20 px-5 md:px-0'>
{
          models.map(model => <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard>)
          
}

                    </div>
          );
};

export default Models;