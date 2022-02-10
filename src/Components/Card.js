import React from "react";

//below code is not html. it's actually jsx
const Card = (props) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${props.id}?size=200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
