import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
    return (
        <a className="button" href={ props.href }>
            <FontAwesomeIcon icon={ props.icon } />
            <div className="content">{ props.children }</div>
        </a>
    )
}

Button.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.any,
}

export default Button