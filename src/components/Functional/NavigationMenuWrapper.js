import {connect } from 'react-redux'
import NavigationMenuWrapper from "../Presentational/NavigationMenuWrapper";

const mapStateToProps = state => {

    return {
        lastGenreID: state.movieListReducer.lastGenreID
    }
}


export default connect(mapStateToProps)(NavigationMenuWrapper);