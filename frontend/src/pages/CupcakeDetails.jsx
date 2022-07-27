import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import Cupcake from "@components/Cupcake";

export default function CupcakeDetails() {
  const { id } = useParams();
  const [apiCupcakes, setApiCupcakes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cupcakes/${id}`)
      .then((data) => setApiCupcakes(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
  }, []);
  return (
      <Link to="/cupcakes">
        <Cupcake cupcake={apiCupcakes}/>
        <button type="button">BACK</button>
      </Link>

  );
}
