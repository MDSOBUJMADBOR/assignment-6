
import './App.css'
import Active from './component/Banner/Active'
import BanNer from './component/Banner/BanNer'
import Premium from './component/Banner/Premium'
import Models from './component/Models'
import Navbar from './component/Navbar/Navbar'


const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
 

  return (
    <>
    <Navbar></Navbar>
   <BanNer></BanNer>
   <Active></Active>
   <Premium></Premium>
    <Models modelPromise={modelPromise}></Models>

</>
   
  )
}

export default App
