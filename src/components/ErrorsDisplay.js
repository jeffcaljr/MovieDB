import React from 'react'
import {connect} from 'react-redux'
import ErrorBox from './Functional/ErrorBox'

const ErrorsDisplay = ({errors}) => {

    const renderErrors = (errors) => {
        let errorsJSX = [];

        errors.map( (error, index) => {
            errorsJSX.push(
                <ErrorBox key={index} index={index} error={error}/>
            );
        })

        return errorsJSX;
    }

    if(!errors || errors.length === 0){
        return null
    }

    return (
        <div className="error-display">
            {renderErrors(errors)}
        </div>
    );


}

const mapStateToProps = state => {
    return{
        errors: state.errorReducer.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsDisplay);