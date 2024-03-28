import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./index.css";
const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);
  const apiStatusConstants = {
    initial: "INITAIL",
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
  };

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const fetchData = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    let url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const response = await fetch(url);
    const data = await response.json();
  
    if (response.ok) {
      setApiStatus(apiStatusConstants.success);
      setPopulationData(data.data);
    } else if (response.status !== 200) {
      setApiStatus(apiStatusConstants.failure);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  const populationChart = (
    <div className="lineChartContainer">
      <div className="lineChartForWeb">
        <LineChart
          width={600}
          height={300}
          data={populationData}
          margin={{ top: 50, right: 30, left: 50, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="Population"
            stroke="#ed5324"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
      <div className="lineChartForMobile">
        <LineChart
          width={330}
          height={300}
          data={populationData}
          margin={{ top: 50, right: 30, left: 50, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="Population"
            stroke="#ed5324"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );

  let resultView = "";
  switch (apiStatus) {
    case apiStatusConstants.success:
      resultView = <div>{populationChart}</div>;
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

  return (
    <div className="populationContainer">
      <div>
        {resultView}
        <h1>Population of United States</h1>
      </div>
    </div>
  );
};

export default PopulationGraph;
