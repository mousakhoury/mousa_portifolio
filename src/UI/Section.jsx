import React from "react";

export default function Section(props) {
  return (
    <section id={props.id} className={props.className}>
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">{props.title}</span>
          <span className="heading-sec__sub"> {props.subText} </span>
        </h2>
        {props.children}
      </div>
    </section>
  );
}
