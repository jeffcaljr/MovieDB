import React, {Component} from "react"
import PropTypes from 'prop-types'

import image1 from '../images/default-movie-cover.jpg'
import image2 from '../images/bg-2.jpeg'
import image3 from '../images/bg-3.jpeg'
import image4 from '../images/bg-4.jpeg'
import image5 from '../images/bg-5.jpeg'

class BackgroundCarousel extends Component{
    constructor(){
        super()

        this.state = {
            currentImageIndex: -1
        }

        this.images = [image1, image2, image3, image4, image5]

        this.looper = -1;

        this.getNextImage = this.getNextImage.bind(this)
    }

    getNextImage = () => {
        let newImageIndex = ( (this.state.currentImageIndex < this.images.length - 1)
            ? this.state.currentImageIndex + 1
            : 0)

        this.setState({currentImageIndex: newImageIndex})
    }


    render(){
        return (
            <div className={"background-carousel background " + " " + `bg-image-${this.state.currentImageIndex + 1} `}>
                <div className="overlay">
                    {this.props.children}
                </div>

            </div>
        );
    }

    componentDidMount(){

        this.looper = setInterval( () => {this.getNextImage()}, 7000)

    }

    componentWillUnmount(){

        // alert("unmounting")
        clearInterval(this.looper)


    }
}

BackgroundCarousel.propTypes =  {
    children: PropTypes.node
}


export default  BackgroundCarousel;
