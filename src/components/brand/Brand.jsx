import React from "react";
import "./brand.css";
import { google, slack, atlassian, shopify, dropbox } from "./import";

const Brand = () => {
  const images = [google, slack, atlassian, shopify, dropbox];

  return (
    <div className="gpt3__brand section__padding ">
      {images.map((ele, key) => {
        return (
          <div key={key}>
            <img src={ele} alt="Brand Images" />
          </div>
        );
      })}
    </div>
  );
};

export default Brand;
