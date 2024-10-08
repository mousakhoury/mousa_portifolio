import React from "react";

export default function Button(props) {
    return (
        <a href={props.link} className={`btn ${props.className}`}>
            {props.children}
        </a>
    );
}
