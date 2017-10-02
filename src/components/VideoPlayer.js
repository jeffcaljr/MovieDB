import React, {Component} from "react"
import PropTypes from 'prop-types'
import Movie, {BASE_YOUTUBE_URL} from "../models/movie";


class VideoPlayer extends Component{
    constructor(){
        super()

        let state = {
            source: undefined
        }
    }

    loadVideo = () => {
        let src = this.props.movie.loadYouTubeTrailerURL()
            .then((res) => {

                const results = res.results;
                const trailers = results.filter((video) => {return video.type === "Trailer"})
                const firstTrailerVideo = trailers.find((video) => {return video["site"] === "YouTube"})
                //
                if(firstTrailerVideo != undefined){
                    let youtubeURL = `${BASE_YOUTUBE_URL}${firstTrailerVideo["key"]}`
                    // alert(youtubeURL)
                    this.setState({source: youtubeURL})
                }
                else{
                    alert("No Youtube Videos Found")
                }
            })
            .catch((err) => { alert(err)})
    }


    render(){

        if(this.state){
            return (
                <div className="video-player">
                    <iframe width="500" height="500" src={this.state.source} frameborder="0" className="youtube-player" controls></iframe>
                </div>
            );
        }
        else{
            return null
        }

    }

    componentDidMount(){
        this.loadVideo()
    }
}

VideoPlayer.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired
}


export default VideoPlayer

