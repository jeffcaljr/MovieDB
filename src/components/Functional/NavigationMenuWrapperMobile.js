import {connect } from 'react-redux'

import {contractNav, expandNav} from "../../actions/MobileNav";
import NavigationMenuWrapperMobile from "../Presentational/NavigationMenuWrapperMobile";

const mapStateToProps = state => {

    return {
        lastGenreID: state.movieListReducer.lastGenreID,
        navOpen: state.mobileNavReducer.expanded
    }
}

const mapDispatchToProps = dispatch => {

    return{
        openNav: () => {
            dispatch(expandNav())
        },
        closeNav: () => {
            dispatch(contractNav())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenuWrapperMobile);