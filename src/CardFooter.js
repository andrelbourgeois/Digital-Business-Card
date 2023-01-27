import React from "react"

function CardFooter() {
    return(
        <div className="card-footer">
            <div className="socials">
                <img className="website-img" src={require("./logoLight.png")} alt="internet logo" href="https://andrebourgeois.me" />
                <img className="social-img" src={require("./linkedin.png")} alt="linkedin logo" href="https://linkedin.com/in/andrelbourgeois" />
                <img className="social-img" src={require("./github.png")} alt="github logo" href="https://github.com/andrelbourgeois" />
                <img className="social-img" src={require("./medium.png")} alt="medium logo" href="https://andrebourgeois.medium.com" />
            </div>
      </div>
    );
}

export default CardFooter;