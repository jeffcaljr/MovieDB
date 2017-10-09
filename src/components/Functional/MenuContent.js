import {connect } from 'react-redux'

import {load} from "../../actions/MovieList";
import MenuContent from "../Presentational/MenuContent";

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadGenre: genreID => {
            dispatch(load(genreID))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuContent);