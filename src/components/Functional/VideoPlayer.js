import {connect} from 'react-redux'
import {closeVideo} from "../../actions/VideoPlayer";
import VideoPlayer from "../Presentational/VideoPlayer";


const mapStateToProps = state => {
    return {
        movie: state.videoPlayerReducer.video
    }
}

const mapDispatchToProps = dispatch => {
    return{
        closeVideo: () => {
            dispatch(closeVideo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)