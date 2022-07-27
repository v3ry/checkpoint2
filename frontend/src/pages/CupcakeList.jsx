import Cupcake from "@components/Cupcake";
import React,{ useState, useEffect } from "react";
import axios from "axios";

export default function CupcakeList() {
  const [apiCupcakes, setApiCupcakes] = useState([]);
  const [apiAccessories, setApiAccessories] = useState([]);
  const [accessories, setAccessories] = useState("");
  // Step 1: get all cupcakes
  useEffect(() => {
    axios
    .get(`http://localhost:4000/cupcakes`)
    .then(data => setApiCupcakes(data.data))
    //gestion des erreurs
    .catch(error => console.warn('Authorization failed : ' + error.message));
    },[])
    // Step 3: get all accessories
  useEffect(() => {
    axios
    .get(`http://localhost:4000/accessories`)
    .then(data => setApiAccessories(data.data))
    //gestion des erreurs
    .catch(error => console.warn('Authorization failed : ' + error.message));
    },[])
  
  apiCupcakes && console.log(apiCupcakes);
  apiAccessories && console.log(apiAccessories);

  const onChangeAcc = (e)=>{
    e.preventDefault();
    setAccessories(e.target.value)
    console.log(accessories)
  }
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={onChangeAcc}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {apiAccessories.map((acc,index)=>(
              <option key={"acc" + index} value={acc.id}>{acc.name}</option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {apiCupcakes
        .filter(val=> val.accessory_id === accessories || accessories === "")
        .map((cup,index)=>(
        <li key={index} className="cupcake-item">
          <Cupcake cupcake={cup}/>
        </li>
        ))  
        }
        {/* end of block */}
      </ul>
    </>
  );
}
