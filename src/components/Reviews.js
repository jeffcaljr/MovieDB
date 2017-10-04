import React from 'react'
import loadingSpinner from '../images/loading_spinner.gif'
import DropdownWrapper from "./DropdownWrapper";


const Reviews= () => {
    return(
        <DropdownWrapper title={"Reviews"}
                         children={<div className="loading w-100 d-flex justify-content-center align-items-center">
                             <img src={loadingSpinner} alt="loading" className="img-fluid w-25 p-5"/>
                         </div>
                         }
        />
    );
}

export default Reviews;