import React from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {removeError} from "../actions/ErrorDisplay";

const ErrorBox = ({error, index, removeError}) => {

    return (
        <div className="error-box error-fade-in" ref={(errorBox) => this.errorBox = errorBox}>

            <div className="error-box-content">
                <div className="error-text">
                    {error.message}
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

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeError: index => {
            dispatch(removeError(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);