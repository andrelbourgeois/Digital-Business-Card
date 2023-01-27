import React from "react"
import Card from "./Card.js";

function CardHeader() {
    return(
        <div className="card-header">
          {/*When using Webpack you need to require images in order
          for Webpack to process them
          ie. <img className="" src={require("/images/image-name.png")} alt="" />*/}
        </div>
    );
}

export default CardHeader;