import "./App.css";

import Cryptocurrency from "./Components/CryptocurrencyPrices";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import PopulationGraph from "./Components/PopulationGraph";
import Web from "./Components/Web3";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex w-100">
        <Sidebar />

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/cryptocurrency" Component={Cryptocurrency} />
          <Route exact path="/populationgraph" Component={PopulationGraph} />
          <Route exact path="/web" Component={Web} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
