import React from "react";

export default function SocialIcon({ href, src, alt }) {
    return (
        <a target="_blank" rel="noreferrer" href={href}>
            <img className="main-footer__icon" src={src} alt={alt} />
        </a>
    );
}
