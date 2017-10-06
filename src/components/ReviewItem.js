import React from 'react'
import PropTypes from 'prop-types'


const ReviewItem = (props) => {

    return (
        <div className="review-item d-flex flex-column justify-content-start align-items-center w-100">

            <h4
                className='review-item-author align-self-start typeface-serif'>
                @{props.author}
                </h4>
            <p
                className="review-item-content-text text-white font-italic typeface-sans-serif">
                { (props.content.length < 278)
                    ? "\"" + props.content + "\""
                    : "\"" +  props.content.substr(0, 275).concat("...") + "\""
                }

            </p>
            <a
                href={props.url}
                className="review-link  align-self-end text-white underline font-italic"
                target="_blank">
                <u><p className="review-link-text mr-0 typeface-sans-serif small">Go to Review</p></u>
            </a>
        </div>
    );

}

ReviewItem.propTypes = {
    reviewID: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}


export default ReviewItem