import React from "react";
import CardView from "../CardViews";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { FaBitcoin } from "react-icons/fa";
import "./index.css";
const Cryptocurrency = () => {
  const [cryptoData, setcrytpoData] = useState([]);
  const apiStatusConstants = {
    initial: "INITAIL",
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
  };

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [chartname, setChartname] = useState("");
  const fetchCryptoData = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, cryptoData);
    if (response.ok) {
      setApiStatus(apiStatusConstants.success);
      setcrytpoData(data.bpi);
      setChartname(data.chartName);
    } else if (response.status !== 200) {
      setApiStatus(apiStatusConstants.failure);
    }
  };
  console.log(cryptoData, "crp");

  useEffect(() => {
    fetchCryptoData();
  }, []);

  let cryptoView = <div>Cripto</div>;
  console.log(cryptoData.EUR, "eur");
  if (cryptoData.EUR !== undefined) {
    cryptoView = (
      <div>
        <div className="bitCoinContainer">
          <h1>
            {chartname}{" "}
            <button type="button" className="symbolBtnCr">
              <FaBitcoin />
            </button>
          </h1>
        </div>

        <div className="cardsContainer">
          <div className="cards eurCard">
            <CardView cripto={cryptoData.EUR} />
          </div>

          <div className="usdCard cards">
            <CardView cripto={cryptoData.USD} />
          </div>
          <div className="gbpCard cards">
            <CardView cripto={cryptoData.GBP} />
          </div>
        </div>
      </div>
    );
  }

  let resultView = "";
  switch (apiStatus) {
    case apiStatusConstants.success:
      resultView = <div>{cryptoView}</div>;
      break;

    case apiStatusConstants.inProgress:
      resultView = <RotatingLines />;
      break;
    case apiStatusConstants.failure:
      resultView = <h1>Something went wrong Pleace try again ....</h1>;
      break;
    default:
      resultView = null;
  }

  return <div className="cryptoFullContainer">{resultView}</div>;
};

export default Cryptocurrency;
