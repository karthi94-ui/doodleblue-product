import { Button, Slider } from "@material-ui/core";
import React from "react";
import "./SliderInput.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";

function SliderInput({ priceRange, setPriceRange, filterProducts }) {
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
  const SliderMenu = withStyles({
    root: {
      color: "#EAF0F4",
      height: 2,
      padding: "15px 0",
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: "#F4F5F7",
      boxShadow: iOSBoxShadow,
      marginTop: -14,
      marginLeft: -14,
      "&:focus, &:hover, &$active": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 12px)",
      top: -22,
      "& *": {
        background: "transparent",
        color: "#000",
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 10,
      opacity: 0.5,
      backgroundColor: "#dae2e8",
    },
    mark: {
      backgroundColor: "#EAF0F5",
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  })(Slider);
  return (
    <div className="silder-container">
      <h5>FILTER BY PRICE</h5>
      <SliderMenu
        defaultValue={29}
        max={599}
        min={0}
        aria-label="ios slider"
        value={priceRange}
        step={10}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <div className="slide-contain">
        <Button className="filter-btn" onClick={() => filterProducts()}>
          Filter
        </Button>
        <p>
          Price:
          <span className="silder-value">
            ${priceRange[0]}-${priceRange[1]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SliderInput;
