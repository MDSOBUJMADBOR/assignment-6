
import { useState } from 'react'
import './App.css'
import Active from './component/Banner/Active'
import BanNer from './component/Banner/BanNer'
import Premium from './component/Banner/Premium'
import Models from './component/Models'
import Navbar from './component/Navbar/Navbar'
import Cart from './component/Navbar/Cart'
import GetStarted from './component/Get Started/GetStarted'
import Simple from './component/Simple/Simple'
import Footer from './component/Simple/Footer'
import { ToastContainer } from 'react-toastify'
import Ready from './component/Simple/Ready'
import NavBar2 from './component/NavBar2/NavBar2'


const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
 const [activeTab,setActiveTab] = useState("model");
const [carts, setCarts] = useState([])

  return (
    <>
    <NavBar2 carts={carts}></NavBar2>
    {/* <Navbar carts={carts}></Navbar> */}
   <BanNer></BanNer>
   <Active></Active>
   <Premium></Premium>

{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center   bg-white mb-5">
  <div className='border border-gray-300 rounded-3xl'>
    <input type="radio"
   name="my_tabs_1" 
   aria-label="Products" 
   onClick={() => setActiveTab("model")}
className={`tab rounded-full w-30 text-xl font-semibold
    ${activeTab === "model"
      ? "text-white bg-linear-to-r from-[#2106f0] to-[#8706ea]"
      : "bg-gray-0 text-black"}`}   defaultChecked/>
  <input type="radio"
   name="my_tabs_1"
   aria-label={`Cart (${carts.length})`}
   onClick={() => setActiveTab("cart")}
className={`tab rounded-full w-30 text-xl font-semibold
    ${activeTab === "cart"
      ? "text-white bg-linear-to-r from-[#2106f0] to-[#8706ea]"
      : "bg-gray-0 text-black"}`}      />
  </div>
</div>

{activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}
{activeTab === "cart" &&  <Cart carts={carts} setCarts={setCarts}></Cart>}

  <GetStarted></GetStarted> 
<Simple></Simple>
<Ready></Ready>
  <Footer></Footer>

   <ToastContainer/>

</>
   
  )
}

export default App
