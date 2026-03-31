import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
const totalPrice = carts.reduce((sum,item) => sum + item.price ,0)


const handlePayment = () => {
setCarts([]);
toast.success("Payement successful!")
};

const handleDelete = (item) => {
console.log(item);
const filteredArray = carts.filter((c) => c.id !== item.id);
setCarts(filteredArray);
toast.success("Item deleted!")
}





return (
 <div className=" p-6 max-w-6xl mx-auto border border-gray-300 rounded-xl mb-8">
      <h1 className="text-2xl font-bold py-4">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-2xl font-semibold p-5 bg-gray-100 rounded-xl">Cart is empty</p>
      ) : (
        <>


          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between  rounded-lg p-3 bg-[#F9FAFC]"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div className='bg-transparent'>
                    <img
                      className="h-20 w-20 object-contain border border-gray-400 rounded-full p-2 "
                      src={item.image}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                     <div className='flex '>
                    <p>${item.price}</p>
                    <p>/{item.period}</p>
                     </div>
                  </div>
                </div>



                <div className="flex gap-10">
                    <button
                    onClick={() => handleDelete(item)}
                    className=" btn text-red-500"
                  >
                    Remove
                  </button>
                </div>
                
              </div>
            ))}
          </div>



          <div className=" flex justify-between  p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn btn-primary w-full mt-5  text-white text-xl  rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>

  );
};

export default Cart;




