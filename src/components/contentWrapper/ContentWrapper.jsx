import React from "react";
import "./style.scss";
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};
export default ContentWrapper;
//every componenet will be wrapped under a ceontentwrapper adn will be styled  in the center