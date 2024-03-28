import React from "react";
import PopulationGraph from "../PopulationGraph";
import Cryptocurrency from "../CryptocurrencyPrices";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import "./index.css";
const Home = () => {
  return (
    <div className="homeFullContainer pb-3">
      <div className="homeAndGraphContainer ">
        <div className="homeCard">
          <h3>Welcome to Crypto World</h3>
          <h3>
            Bitcoin <FaBitcoin />
          </h3>
          <h3>
            Ethereum <FaEthereum />
          </h3>
          <h3>
            Dogecoin <SiDogecoin />
          </h3>
        </div>
        <PopulationGraph />
      </div>

      <Cryptocurrency />
    </div>
  );
};

export default Home;
