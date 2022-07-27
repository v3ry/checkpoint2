import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

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
    <div className="cupcake-container">
      <div className="cupcake">
        <img src={apiCupcakes.url} alt="accessory" />
        <div className="cream">
          <div
            className="cream-1"
            style={{
              backgroundColor: apiCupcakes.color1,
            }}
          />
          <div
            className="cream-2"
            style={{
              backgroundColor: apiCupcakes.color2,
            }}
          />
          <div
            className="cream-3"
            style={{
              backgroundColor: apiCupcakes.color3,
            }}
          />
        </div>
        <div className="bottom">
          <div className="bottom-in">
            <div className="face">
              <div className="eyes">
                <div className="left-eye" />
                <div className="right-eye" />
              </div>
              <div className="mouth" />
            </div>
          </div>
        </div>
      </div>

      <div className="cupcake-name">{apiCupcakes.name}</div>
      <Link to="/cupcakes">
        <button type="button">BACK</button>
      </Link>
    </div>
  );
}
