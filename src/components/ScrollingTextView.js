import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ScrollingTextView extends Component{
    constructor(){
        super()

        this.state = {
            hasOverflow: false
        }

        this.hasOverflow= this.hasOverflow.bind(this)

    }

    hasOverflow = () =>{
        return this.scrollLeft.offsetWidth < this.scrollText.offsetWidth
    }

    render(){
        return(

            <div className="scroll-left"
                 ref={(scrollLeft) => this.scrollLeft = scrollLeft}>
                <p
                    className={this.props.className + " " + (this.state.hasOverflow ? " scrolling-title w-100 " : " no-scrolling-title ")}
                    ref={(scrollText) => this.scrollText = scrollText}>

                    {this.props.text}
                </p>

            </div>

        );
    }

    componentDidMount(){

        this.setState({ hasOverflow: this.hasOverflow()})

        // alert("scroll-left width: " + this.scrollLeft.offsetWidth + "\n scroll text width: " + this.scrollText.offsetWidth)
    }
}


ScrollingTextView.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired

}

export default ScrollingTextView;