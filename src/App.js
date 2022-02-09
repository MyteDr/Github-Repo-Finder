import { mainContext } from "./context";
import { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Profilecard from "./components/Profilecard";
function App() {
  const [Methods,setMethods] = useState([]);
  const appendMethods=(item)=>{
      setMethods({...Methods,...item})
  }
  const data ={
    appendMethods,
    ...Methods
  }
  return (
    <mainContext.Provider value={data}>
      <div className="cont">
        <ToastContainer/>
        <Header/>
        <Searchbar/>
        <Profilecard/>
      </div>
    </mainContext.Provider>
  );
}

export default App;
