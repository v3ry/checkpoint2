import Cupcake from "@components/Cupcake";
import React,{useState,useEffect} from "react";
import axios from "axios";

export default function CupcakeList() {
  const [apiData, setApiData] = useState([])
  // Step 1: get all cupcakes
  useEffect(() => {
    axios
    .get(`http://localhost:4000/cupcakes`)
    .then(data => setApiData(data.data))
    //gestion des erreurs
    .catch(error => console.warn('Authorization failed : ' + error.message));
    },[])
  // Step 3: get all accessories
  apiData && console.log(apiData);
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}
