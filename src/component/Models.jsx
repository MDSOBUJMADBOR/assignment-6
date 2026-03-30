import React, { use } from 'react';
import ModelCard from './Navbar/ModelCard';

const Models = ({modelPromise}) => {

const models = use(modelPromise);
          

          return (
                    <div className='grid grid-cols-3 gap-5 max-w-6xl mx-auto'>
{
          models.map(model => <ModelCard key={model.id} model={model}></ModelCard>)
          
}

                    </div>
          );
};

export default Models;