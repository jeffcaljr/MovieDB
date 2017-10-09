import React from 'react'

import ErrorBox from '../Functional/ErrorBox'

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

export default ErrorsDisplay;