import {connect} from 'react-redux'
import ErrorsDisplay from "../Presentational/ErrorsDisplay";

const mapStateToProps = state => {
    return{
        errors: state.errorReducer.errors
    }
}


export default connect(mapStateToProps)(ErrorsDisplay);