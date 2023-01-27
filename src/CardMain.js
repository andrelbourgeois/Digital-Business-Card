import React from "react"

function CardMain() {
    return(
      <div className='card-main'>
        <h1>
          André Bourgeois
        </h1>
        <h3>
          Software Developer & Digital Consultant
        </h3>
        <p>
          www.andrebourgeois.me
        </p>
        <div className="buttons">
          <div className="email-button">
            <span>email me!</span>
          </div>
        </div>
        <div className="aboutSection">
          <h3>
            About
          </h3>
          <p>
            I'm a software developer and digital consultant - specializing in the design and implementation of smart spaces
             and applications that leverage real-time data captured through connected sensor networks.
          </p>
          <h3>
            Interests
          </h3>
          <p>
            When I'm not instrumenting the future of our built environment, you can usually find me relaxing in Highland Perthshire,
            planning my next surf trip, or spending a slow morning searching for London's best croissant.
          </p>
        </div>
      </div>
    );
}

export default CardMain;