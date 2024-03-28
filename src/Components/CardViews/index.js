import React from "react";
import "./index.css";

const CardView = (props) => {
  const { cripto } = props;
  return (
    <div>
      <div className="cardViewContainer">
        <h1>{cripto.code}</h1>

        <button type="button" className="symbolBtn ">
          <span dangerouslySetInnerHTML={{ __html: cripto.symbol }} />
        </button>
        <p className="crptoValue">
          val {cripto.rate}
          <span dangerouslySetInnerHTML={{ __html: cripto.symbol }} />
        </p>
        <p className="description">{cripto.description}</p>
        <p className="rateFloatpara">
          <span className="ratefloatSpan">Rate Float :</span>{" "}
          {cripto.rate_float}{" "}
          <span dangerouslySetInnerHTML={{ __html: cripto.symbol }} />
        </p>
      </div>
    </div>
  );
};

export default CardView;
