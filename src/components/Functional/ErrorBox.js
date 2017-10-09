import {connect } from 'react-redux'
import {removeError} from "../../actions/ErrorDisplay";
import ErrorBox from "../Presentational/ErrorBox";

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