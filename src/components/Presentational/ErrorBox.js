import React from 'react'
import PropTypes from 'prop-types'
import ScrollingTextView from "./ScrollingTextView";


const ErrorBox = ({error, index, removeError}) => {

    return (
        <div className="error-box error-fade-in" ref={(errorBox) => this.errorBox = errorBox}>

            <div className="error-box-content">
                <div className="error-text">
                    <ScrollingTextView text={error.message}/>
                </div>
            </div>

            <div className="error-box-header">
                <a
                    href="#"
                    className="btn"
                    onClick={() => {this.errorBox.className = "error-box error-fade-out"; setTimeout( () => {removeError(index)}, 300 )}}
                >
                    <i className="fa fa-close text-white"></i>
                </a>
            </div>

        </div>

    );
}

ErrorBox.propTypes = {
    error: PropTypes.instanceOf(Error).isRequired
}

export default ErrorBox;