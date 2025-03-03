import React, { useState, useEffect } from "react";
import "../../style/components_style/HomeComponents/statistics.css";
import skull from "../../images/Home_Page_Images/skull.png";

function Statistics() {
  const [stats, setStats] = useState({
    websites: 0,
    brand: 0,
    performance: 0,
    sales: 0,
  });

  useEffect(() => {
    const increments = {
      websites: 370,
      brand: 10,
      performance: 4,
      sales: 50,
    };

    const interval = setInterval(() => {
      setStats((prevStats) => ({
        websites:
          prevStats.websites < increments.websites
            ? prevStats.websites + 10
            : increments.websites,
        brand:
          prevStats.brand < increments.brand
            ? prevStats.brand + 1
            : increments.brand,
        performance:
          prevStats.performance < increments.performance
            ? prevStats.performance + 1
            : increments.performance,
        sales:
          prevStats.sales < increments.sales
            ? prevStats.sales + 2
            : increments.sales,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="statistics">
      <div className="staticsContainer">
        <div className="upperPart">
          <div className="leftPart">
            <img src={skull} alt="Skull Icon in Alvido Gaming Page" />
          </div>
          <div className="rightPart">
            <p className="title">
              OUR MISSION IS TO CREATE A VIBRANT AND INCLUSIVE GAMING COMMUNITY
            </p>
          </div>
        </div>
        <div className="contentPart">
          <div className="row">
            <div className="element">
              <p className="number-stat">{stats.websites}+</p>
              <p className="desc">CREATING AND OPTIMIZING WEBSITES</p>
            </div>
            <div className="element">
              <p className="number-stat">{stats.brand}+</p>
              <p className="desc">BRAND AWARENESS AND RECOGNITION</p>
            </div>
          </div>
          <div className="row">
            <div className="element">
              <p className="number-stat">{stats.performance}X</p>
              <p className="desc">MEASURE AND ANALYZE PERFORMANCE</p>
            </div>
            <div className="element">
              <p className="number-stat">{stats.sales}%</p>
              <p className="desc">INCREASE CONVERSIONS AND SALES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
