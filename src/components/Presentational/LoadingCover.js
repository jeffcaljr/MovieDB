import React from 'react'
import {connect} from 'react-redux'

import spinner from '../../images/loading_spinner.gif'
import {STATUS_LOADING} from "../../actions/MovieList";

const LoadingCover = ({loading}) => {

    if(loading){
        return (
            <div className={"loading-cover "}>
                <img src={spinner} alt="Loading" width="150px"/>
            </div>
        );
    }
    else{
        return null
    }

}

const mapStateToProps = (state) => {
    return {
        loading: state.status == STATUS_LOADING
    }
}

export default connect(mapStateToProps)(LoadingCover);