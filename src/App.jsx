
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
    <Navbar carts={carts}></Navbar>
   <BanNer></BanNer>
   <Active></Active>
   <Premium></Premium>

{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent mb-5">
  <input type="radio"
   name="my_tabs_1" 
   className="tab rounded-full w-40 text-xl font-semibold" 
   aria-label="model" 
   onClick={() => setActiveTab("model")}
   defaultChecked/>
  <input type="radio"
   name="my_tabs_1"
    className="tab rounded-full w-40 text-xl font-semibold" 
    aria-label={`Cart (${carts.length})`}
    onClick={() => setActiveTab("cart")}
      />
</div>

{activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}
{activeTab === "cart" &&  <Cart carts={carts} setCarts={setCarts}></Cart>}

  <GetStarted></GetStarted> 
<Simple></Simple>
   

</>
   
  )
}

export default App
